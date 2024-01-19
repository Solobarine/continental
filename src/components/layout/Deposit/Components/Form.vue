<script setup>
import { ref } from 'vue'

const emit = defineEmits()
const props = defineProps(['steps', 'services', 'amounts', 'payload'])
console.log(props.steps[0])
const currentIndex = ref(0)

const next = () => {
  if (currentIndex.value !== props.steps.length - 1) {
    if (currentIndex.value >= props.steps.length - 1)
      return (currentIndex.value = props.steps.length - 1)
    return (currentIndex.value = currentIndex.value + 1)
  } else {
    emit('depositRequest', updatedPayload.value)
  }
}

const back = () => {
  if (currentIndex.value <= 0) return (currentIndex.value = 0)

  return (currentIndex.value = currentIndex.value - 1)
}

const updatedPayload = ref({
  amount: 0,
  service: '',
})

const updateAmount = data => {
  updatedPayload.value.amount = data
}

const updateService = data => {
  updatedPayload.value.service = data
}
</script>

<template>
  <div id="depositForm">
    <component
      @selectAmount="data => updateAmount(data)"
      @selectService="data => updateService(data)"
      :is="props.steps[currentIndex]"
      :amounts="props.amounts"
      :services="props.services"
      :payload="updatedPayload"
      :next="next"
    ></component>
    <div id="controls">
      <button @click="back">Prev</button>
      <button @click="next">
        {{ currentIndex === props.steps.length - 1 ? 'Finish' : 'Next' }}
      </button>
    </div>
  </div>
</template>
