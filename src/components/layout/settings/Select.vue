<template>
  <div>
    <label :for="props.name">{{ props.label }}</label>
    <select
      :name="props.name"
      :id="props.name"
      :required="props.required"
      :pattern="props.pattern"
      :autocomplete="props.autocomplete"
      :focused="focus.toString()"
      @blur="change_focus"
      v-model="props.payload[props.name]"
    >
      <option v-for="(item, index) in props.data" :key="index">
        {{ item }}
      </option>
    </select>
    <span>{{ error_message }}</span>
  </div>
</template>
<script setup>
import { reactive } from "vue";

const props = defineProps({
  label: String,
  name: String,
  data: Array,
  autocomplete: String,
  required: Boolean,
  pattern: String | undefined,
  error_message: String,
  payload: Object,
});

const focus = reactive({ value: false });

const change_focus = () => {
  focus.value = true;
};
</script>
<style scoped>
div {
  display: grid;
  row-gap: 5px;
}

select,
option {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--text);
}

span {
  display: none;
  font-size: 0.7rem;
}

select:invalid[focused="true"] ~ span {
  display: block;
  color: var(--red);
}

select:invalid[focused="true"] {
  border: 2px solid var(--red);
}
</style>
