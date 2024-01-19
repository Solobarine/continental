<script setup>
import { ref } from 'vue'
import Amount from './Amount.vue'

const props = defineProps(['amounts', 'payload', 'next'])
console.log(props.payload)
const emit = defineEmits()

const input = ref(0)

const show = ref(false)

const toggle = () => {
  show.value = !show.value
}

const toggler = e => {
  e.preventDefault()
  emit('selectAmount', input)
  toggle()
  props.next()
}
</script>

<template>
  <p id="amountCall">Select or Enter Deposit Amount</p>
  <div class="amount_options">
    <Amount
      @click="emit('selectAmount', amount)"
      v-for="(amount, i) in props.amounts"
      :key="i"
      :amount="amount"
      :payload="props.payload"
      :selected="props.payload.amount === amount"
      :class="amount === props.payload.amount ? 'highlight' : ''"
    />
    <div class="amount_option" @click="toggle">
      <div>
        <ion-icon name="wallet" class="wallet"></ion-icon>
        <div class="content">
          <p>Other</p>
        </div>
      </div>
    </div>
    <div class="amount_input" :class="show ? 'show' : 'hide'">
      <button @click="toggle">&times;</button>
      <label>Enter Amount</label>
      <input v-model="input" type="number" />
      <input type="submit" value="Confirm" @click="toggler" />
    </div>
  </div>
  <div class="overlay" :class="show ? 'show' : ''"></div>
</template>
<style>
#amountCall {
  text-align: center;
  padding-bottom: 1.2em;
}

.amount_option {
  width: 7em;
  background-color: var(--white);
  border-radius: 1em;
  padding: 0.75em;
  transition: 0.4s ease-in;
  cursor: pointer;
}

.amount_option.highlight {
  background-color: var(--primary);
}

.amount_option.highlight :is(p, ion-icon, span) {
  color: var(--faint);
}

.amount_option > div {
  border: 2px solid var(--secondary);
  border-radius: 0.4em;
  padding: 0.75em 0.4em;
}

.amount_input {
  position: fixed;
  width: 100%;
  max-width: 30em;
  min-width: 10em;
  background-color: var(--faint);
  border-radius: 0.5em;
  box-shadow: var(--box-shadow);
  z-index: 30;
  display: grid;
  gap: 0.5em;
  padding: 2em 1em;
  padding-top: 3em;
  top: 35%;
  left: 50%;
  transform: translateY(0%);
  transition: 0.5s ease-in;
}

.amount_input.show {
  transform: translateX(-50%);
  opacity: 1;
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

.amount_input.hide {
  transform: translateX(200%);
  opacity: 0;
}

.amount_input button {
  position: absolute;
  right: 0.5em;
  padding: 0.4em;
  font-size: 1.7em;
  outline: none;
  border: none;
  font-weight: bold;
  color: var(--primary);
  cursor: pointer;
  background-color: transparent;
}

.amount_input input[type='number'] {
  outline: none;
  padding: 0.5em;
  border-radius: 0.5em;
  border: 1px solid var(--secondary);
}

.amount_input input[type='number']:focus {
  border: 1px solid var(--primary);
}

.wallet {
  font-size: 1.5em;
}

.content {
  display: flex;
  gap: 0.5em;
}

.amount_option span {
  font-size: 1em;
}

.amount_option p {
  font-size: 1.2em;
  font-weight: 600;
}
</style>
