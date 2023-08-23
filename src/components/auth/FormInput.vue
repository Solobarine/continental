<template>
  <div class="form_input">
    <label :for="props.name">{{ props.label }}</label>
    <input
      :type="props.type"
      :name="props.name"
      :autocomplete="props.autocomplete"
      :required="props.required"
      :pattern="props.pattern"
      :focused="focus.value.toString()"
      v-on:blur="change_focus"
      v-model="props.payload[props.name]" />
    <span class="input_error">{{ props.error_message }}</span>
  </div>
</template>
<script setup>
import { reactive } from 'vue'

const props = defineProps({
  label: String,
  type: String,
  name: String,
  autocomplete: String,
  required: Boolean,
  pattern: String,
  error_message: String,
  payload: Object
})

const focus = reactive({ value: false })
const change_focus = () => {
  focus.value = true
}
</script>
<style scoped>
.form_input {
  display: grid;
  gap: 5px;
  align-items: start;
}

input {
  max-height: 44px;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid var(--text);
}

span {
  display: none;
  font-size: 0.7rem;
}

input:invalid[focused='true'] ~ span {
  display: block;
  color: var(--red);
}

input:invalid[focused='true'] {
  border: 2px solid var(--red);
}
</style>
