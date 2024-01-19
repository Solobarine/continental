<template>
  <section id="deposit">
    <h2>Add Credit</h2>
    <Form
      @depositRequest="data => makeDeposit(data)"
      :steps="[Amounts, Services, Summary]"
      :amounts="amounts"
      :services="services"
      :payload="payload"
      :deposit-value="payload.amount"
    />
  </section>
</template>
<script setup>
import { ref } from 'vue'
import AmericanExpress from '../../icons/services/AmericanExpress.vue'
import Discovery from '../../icons/services/Discovery.vue'
import JCB from '../../icons/services/JCB.vue'
import Maestro from '../../icons/services/Maestro.vue'
import MasterCard from '../../icons/services/MasterCard.vue'
import PayPal from '../../icons/services/PayPal.vue'
import UnionPay from '../../icons/services/UnionPay.vue'
import Visa from '../../icons/services/Visa.vue'
import Services from './Components/Services.vue'
import { useUserStore } from '../../../stores/UserStore'
import { useDepositStore } from '../../../stores/DepositStore'
import Form from './Components/Form.vue'
import Amounts from './Components/Amounts.vue'
import Summary from './Components/Summary.vue'

const amounts = [2000, 1000, 500, 200, 100, 50, 20, 10]

const services = [
  {
    name: 'AmericanExpress',
    logo: AmericanExpress,
  },
  {
    name: 'Discovery',
    logo: Discovery,
  },
  {
    name: 'JCB',
    logo: JCB,
  },
  {
    name: 'Maestro',
    logo: Maestro,
  },
  {
    name: 'MasterCard',
    logo: MasterCard,
  },
  {
    name: 'Visa',
    logo: Visa,
  },
  {
    name: 'PayPal',
    logo: PayPal,
  },
  {
    name: 'UnionPay',
    logo: UnionPay,
  },
]

const payload = ref({
  service: '',
  amount: 0,
  user_id: useUserStore().user.id,
})

const makeDeposit = data => {
  payload.value.amount = data.amount
  payload.value.service = data.service
  payload.value.user_id = useUserStore().user.id

  console.log(payload.value)
  useDepositStore().makeDeposit(payload.value)
}
</script>
<style>
#deposit {
  max-width: 45em;
  margin: auto;
  padding: 0.2em;
}

#deposit > h2 {
  text-align: center;
}

#depositForm {
  position: relative;
  max-width: 45em;
  margin: auto;
  width: 100%;
  border-radius: 0.5em;
  padding: 1em 0;
  margin-top: 1.5em;
  background-color: var(--faint);
  box-shadow: var(--box-shadow);
}

#depositForm #controls {
  position: absolute;
  bottom: 1em;
  right: 1em;
  display: flex;
  align-items: center;
  gap: 0.5em;
}

#depositForm #controls > button {
  background-color: var(--primary);
  color: var(--faint);
  padding: 0.75em 1.2em;
  border-radius: 0.5em;
  font-size: 0.9em;
  outline: none;
  border: none;
  cursor: pointer;
}

.service_options,
.amount_options {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: auto;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding-bottom: 6em;
}

#amount_section input[type='number'] {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--text);
  margin-bottom: 15px;
  border: 1px solid var(--primary);
  outline: none;
  display: block;
}

input[type='submit'] {
  display: block;
  cursor: pointer;
  margin-top: 1em;
  background-color: var(--primary);
  border-radius: 0.5em;
  padding: 1em;
  color: var(--faint);
  outline: none;
  border: none;
}

#deposit #options {
  max-width: 220px;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 650px) {
  #deposit {
    padding-top: 2em;
  }
}
</style>
