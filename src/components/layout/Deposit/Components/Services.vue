<script setup>
import Service from './Service.vue'

const emit = defineEmits()
const props = defineProps(['services', 'payload'])
</script>

<template>
  <p id="serviceCall">Select Preferred Payment Platform</p>
  <div class="service_options">
    <Service
      @click="emit('selectService', service.name)"
      v-for="(service, i) in props.services"
      :key="i"
      :name="service.name"
      :class="service.name === props.payload.service ? 'highlight' : ''"
    >
      <component :is="service.logo"></component>
    </Service>
  </div>
</template>
<style>
#serviceCall {
  text-align: center;
  padding-bottom: 1.2em;
}
</style>
