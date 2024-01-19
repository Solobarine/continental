<template>
  <section id="transfer_section">
    <form id="transfer_form">
      <h3>Make a Transfer</h3>
      <small>{{ error }}</small>
      <small v-if="receiver" id="receiver_name"
        >{{ receiver.first_name }} {{ receiver.last_name }}</small
      >
	  <FormKit type="text"  />
      <div class="payee_account_number">
        <label for="account_number">Enter Account Number</label>
        <input
          type="text"
          name="account_number"
          maxlength="10"
          pattern="\\d{10}"
          title="Account Number should be 10 numbers"
          v-model="payload.account_number"
          @input="getReceiver"
        />
        <small
          :class="
            payload.account_number.length === 10 ? 'number' : 'number error'
          "
          >Hint: Account Number should be 10 numbers</small
        >
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
        :payload="payload"
      />
      <div class="description">
        <label for="">Transfer Description</label>
        <textarea
          v-model="payload.description"
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Description..."
        ></textarea>
      </div>
      <input
        @click="toggle"
        :disabled="
          payload.payee_id === '' ||
          (payload.user_id && payload.amount === undefined) ||
          0
        "
        type="submit"
        value="Proceed"
      />
    </form>
    <Summary
      @cancelTransfer="data => handle(data)"
      @makeTransfer="data => handle(data)"
      :class="showSummary ? 'show' : 'hide'"
      :payload="payload"
      :receiver="receiver"
    />
    <div class="overlay" :class="showSummary ? 'show' : ''"></div>
  </section>
</template>
<script setup>
import { reactive, ref } from 'vue'
import Summary from './Summary.vue'
import { useUserStore } from '../../../stores/UserStore'
import { useTransferStore } from '../../../stores/TransferStore'
import FormInput from '../../auth/FormInput.vue'
import transfer_inputs from './transfer'

const payload = reactive({
  amount: undefined,
  account_number: '',
  description: '',
  payee_id: '',
  user_id: useUserStore().user.id,
})

let receiver = ref('')
let error = ref('')
let value = ref('')

const showSummary = ref(false)
const toggle = () => {
  showSummary.value = !showSummary.value
  console.log(showSummary)
}

const getReceiver = async () => {
  console.log(payload.account_number)
  if (payload.account_number.toString().length !== 10) {
    payload.payee_id = ''
    receiver.value = ''
  } else {
    error.value = ''
    value = await useUserStore().getReceiver({
      account_number: payload.account_number,
    })
    console.log(value)
    if (value.status === 200) {
      receiver.value = value.data

      payload.payee_id = value.data.id
    } else {
      error.value = value.response.data.message
    }
  }
}

const handle = data => {
  showSummary.value = false
  if (data) return makeTransfer(data)
}

const makeTransfer = data => {
  console.log(data)
  useTransferStore().makeTransfer(data)
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
  margin: 2em auto;
  max-width: 35em;
  padding: 10px;
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
  font-size: 1.2em;
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

.payee_account_number > input,
.payee_account_number > input:valid {
  width: 100%;
  padding: 6px;
  outline: none;
  border: 1px solid var(--secondary);
  border-radius: 5px;
}

.payee_account_number > input:invalid {
  border: 1px solid var(--red);
}

small.number {
  display: none;
}

small.number.error {
  display: block;
  margin-top: 0.75em;
  color: var(--red);
}

input:focus {
  border: 1px solid var(--primary);
}

input[type='submit']:disabled {
  opacity: 0.7;
}

.description {
  display: grid;
  gap: 0.3em;
}

textarea {
  padding: 0.5em;
  border-radius: 0.5em;
  outline: none;
  border: 1px solid var(--secondary);
}

textarea:focus {
  border: 1px solid var(--primary);
}
.overlay {
  transition: 0.5s ease-in;
}

.overlay.show {
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0 0 0 0;
  background-color: rgba(0, 0, 0, 0.3);
  pointer-events: none;
  transition: 0.5s ease-in;
  pointer-events: all;
  z-index: 20;
}

@media screen and (max-width: 650px) {
  form {
    position: relative;
    padding-right: 20px;
    max-width: 100%;
  }
}
</style>
