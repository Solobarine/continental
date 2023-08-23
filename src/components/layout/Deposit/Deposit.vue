<template>
  <section id="deposit">
    <!-- <h3>Deposit</h3> -->
    <div id="services">
      <h4>Choose a Service</h4>
      <div id="services_list">
        <div
          @click="select_deposit_option(one)"
          class="service"
          name="Visa">
          <Check
            ref="one"
            class="check" />
          <Visa />
          <p>Visa</p>
        </div>

        <div
          @click="select_deposit_option(two)"
          class="service"
          name="MasterCard">
          <Check
            ref="two"
            class="check" />
          <MasterCard />
          <p>MasterCard</p>
        </div>
        <div
          @click="select_deposit_option(three)"
          class="service"
          name="Maestro">
          <Check
            ref="three"
            class="check" />
          <Maestro />
          <p>Maestro</p>
        </div>
        <div
          @click="select_deposit_option(four)"
          class="service"
          name="American Express">
          <Check
            ref="four"
            class="check" />
          <AmericanExpress />
          <p>American Express</p>
        </div>
        <div
          @click="select_deposit_option(five)"
          class="service"
          name="Discovery">
          <Check
            ref="five"
            class="check" />
          <Discovery />
          <p>Discovery</p>
        </div>
        <div
          @click="select_deposit_option(six)"
          class="service"
          name="JCB">
          <Check
            ref="six"
            class="check" />
          <JCB />
          <p>JCB</p>
        </div>
        <div
          @click="select_deposit_option(seven)"
          class="service"
          name="PayPal">
          <Check
            ref="seven"
            class="check" />
          <PayPal />
          <p>PayPal</p>
        </div>
        <div
          @click="select_deposit_option(eight)"
          class="service"
          name="UnionPay">
          <Check
            ref="eight"
            class="check" />
          <UnionPay />
          <p>UnionPay</p>
        </div>
      </div>
    </div>
    <div id="amount_section">
      <h4>Amount</h4>
      <div id="amount_options">
        <div
          @click="select_amount(amount_one, false)"
          class="amount_option"
          name="3000">
          <Check
            ref="amount_one"
            class="amount_check" />
          <p>$3000</p>
        </div>
        <div
          @click="select_amount(amount_two, false)"
          class="amount_option"
          name="1000">
          <Check
            ref="amount_two"
            class="amount_check" />
          <p>$1000</p>
        </div>
        <div
          @click="select_amount(amount_three, false)"
          class="amount_option"
          name="500">
          <Check
            ref="amount_three"
            class="amount_check" />
          <p>$500</p>
        </div>
        <div
          @click="select_amount(amount_four, false)"
          class="amount_option"
          name="100">
          <Check
            ref="amount_four"
            class="amount_check" />
          <p>$100</p>
        </div>
        <div
          @click="select_amount(other, true)"
          class="amount_option"
          name="other">
          <Check
            ref="other"
            class="amount_check" />
          <p>Other</p>
        </div>
      </div>
      <div id="options">
        <input
          v-if="selected_amount.value"
          v-model="payload.amount"
          type="number"
          name="amount"
          autocomplete="amount"
          placeholder="Enter Amount" />
        <input
          @click="useDepositStore().makeDeposit(payload)"
          type="submit"
          value="Proceed" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive, ref } from 'vue'
import AmericanExpress from '../../icons/services/AmericanExpress.vue'
import Discovery from '../../icons/services/Discovery.vue'
import JCB from '../../icons/services/JCB.vue'
import Maestro from '../../icons/services/Maestro.vue'
import MasterCard from '../../icons/services/MasterCard.vue'
import PayPal from '../../icons/services/PayPal.vue'
import UnionPay from '../../icons/services/UnionPay.vue'
import Visa from '../../icons/services/Visa.vue'
import Check from '../../icons/Check.vue'
import { useUserStore } from '../../../stores/UserStore'
import { useDepositStore } from '../../../stores/DepositStore'

const payload = {
  service: '',
  amount: 0,
  user_id: useUserStore().user.id
}

const selected_amount = reactive({ value: false })

const one = ref(null)
const two = ref(null)
const three = ref(null)
const four = ref(null)
const five = ref(null)
const six = ref(null)
const seven = ref(null)
const eight = ref(null)

const amount_one = ref(null)
const amount_two = ref(null)
const amount_three = ref(null)
const amount_four = ref(null)
const other = ref(null)

const select_deposit_option = (number) => {
  const checks = Array.from(document.querySelectorAll('.check'))
  checks.map((check) => check.classList.remove('selected'))
  number.$el.classList.add('selected')
  payload.service = number.$el.parentElement.getAttribute('name')
}

const select_amount = (number, bool) => {
  selected_amount.value = bool
  const amounts = Array.from(document.querySelectorAll('.amount_check'))
  amounts.map((amount) => amount.classList.remove('selected'))
  number.$el.classList.add('selected')
  payload.amount = parseFloat(number.$el.parentElement.getAttribute('name'))
}
</script>
<style scoped>
#deposit {
  max-width: 800px;
  margin: auto;
}

#services h4,
#amount_section h4,
#or {
  margin: 20px 0;
}

#services_list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.service {
  position: relative;
  width: 150px;
  backdrop-filter: blur(4px) saturate(149%);
  -webkit-backdrop-filter: blur(4px) saturate(149%);
  background-color: rgba(100, 100, 100, 0.15);
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 10px 0;
  align-items: center;
  cursor: pointer;
}
.service svg {
  height: 50px;
  display: block;
  background-size: cover;
}

.service .check,
#amount_options div .amount_check {
  height: 20px;
  fill: blue;
  position: absolute;
  top: 5px;
  right: 10px;
  scale: 0;
  opacity: 0;
}

.service .selected,
#amount_options div .selected {
  opacity: 1;
  scale: 1;
}

#amount_options {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.amount_option {
  padding: 20px 10px;
  padding-right: 60px;
  backdrop-filter: blur(4px) saturate(149%);
  -webkit-backdrop-filter: blur(4px) saturate(149%);
  background-color: rgba(100, 100, 100, 0.15);
  border-radius: 12px;
  cursor: pointer;
}

.amount_option p {
  font-size: 17px;
  text-align: center;
  margin: auto;
}

#amount_section input[type='number'] {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--text);
  margin-bottom: 15px;
  display: block;
}

input[type='submit'] {
  display: block;
  cursor: pointer;
}

#options {
  max-width: 220px;
  display: flex;
  flex-direction: column;
}
</style>
