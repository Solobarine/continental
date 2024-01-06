<template>
  <section id="transfer_section">
    <form id="transfer_form">
      <h3>Make a Transfer</h3>
      <small>{{ error }}</small>
      <small
        v-if="receiver"
        id="receiver_name"
        >{{ receiver.first_name }} {{ receiver.last_name }}</small
      >
      <div class="payee_account_number">
        <label for="account_number">Enter Account Number</label>
        <input
          type="number"
          name="account_number"
          autocomplete="account_number"
          required
          pattern="^[0-9]{10}$"
          v-model="payload.account_number"
          @input="getReceiver" />
      </div>
      <FormInput
        :key="index"
        v-for="(input, index) in transfer_inputs"
        :type="input.type"
        :label="input.label"
        :name="input.name"
        :autocomplete="input.autocomplete"
        :pattern="input.pattern"
        :required="input.required"
        :error_message="input.error_message"
        :payload="payload" />
      <input
        @click="
          e => {
            e.preventDefault()
            res = useTransferStore().makeTransfer(payload)
          }
        "
        :disabled="payload.payee_id === '' || (payload.user_id && payload.amount === undefined) || 0"
        type="submit"
        value="Proceed" />
    </form>
  </section>
</template>
<script setup>
  import { reactive, ref } from 'vue'
  import { useUserStore } from '../../../stores/UserStore'
  import { useTransferStore } from '../../../stores/TransferStore'
  import FormInput from '../../auth/FormInput.vue'
  import transfer_inputs from './transfer'

  const message = ref('')

  const payload = reactive({
    amount: undefined,
    account_number: '',
    description: '',
    payee_id: '',
    user_id: useUserStore().user.id
  })

  let receiver = ref('')
  let error = ref('')
  let value = ref('')

  const getReceiver = async () => {
    console.log(payload.account_number)
    if (payload.account_number.toString().length !== 10) {
      payload.payee_id = ''
      receiver.value = ''
    } else {
      error.value = ''
      value = await useUserStore().getReceiver({
        account_number: payload.account_number
      })
      console.log(value)
      if (value.status === 200) {
        receiver.value = value.data

        payload.payee_id = value.data.id
        console.log(payload)
      } else {
        error.value = value.response.data.message
      }
    }
  }

  const closeModal = () => {
    message.value = ''
  }

  const makeTransfer = async e => {
    e.preventDefault()
    res = useTransferStore().makeTransfer(payload)
    console.log(res)
  }
</script>
<style scoped>
  #transfer_section {
    position: relative;
  }

  #transfer_form h3 {
    margin-top: 10px;
    grid-column: 1 / -1;
  }

  form {
    display: grid;
    gap: 15px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    margin: auto;
    padding: 1em 1.5em;
    background-color: var(--faint);
    border-radius: 10px;
  }

  #select_card {
    display: grid;
  }

  select {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid var(--text);
    height: 44px;
  }

  select,
  option {
    color: var(--text);
  }

  form > small {
    grid-column: 1 / -1;
    grid-row: 6 / 7;
    text-align: center;
  }

  input[type='submit'] {
    grid-column: 1/1;
    margin-top: 10px;
  }

  span {
    display: none;
    font-size: 0.7rem;
  }

  select:invalid[focused='true'] ~ span {
    display: block;
    color: var(--red);
  }

  select:invalid[focused='true'] {
    border-bottom: 2px solid var(--red);
  }

  .payee_account_number {
    grid-column: 1 / -1;
    grid-row: 3 / 6;
  }

  .payee_account_number > input {
    width: 100%;
    padding: 6px;
    border: 1px solid var(--text);
    border-radius: 5px;
  }

  input[type='submit']:disabled {
    opacity: 0.7;
  }

  @media screen and (max-width: 650px) {
    form {
      position: relative;
      padding-right: 20px;
      max-width: 100%;
    }
  }
</style>
