<template>
  <div class="amount_option">
    <div>
      <ion-icon name="wallet" class="wallet"></ion-icon>
      <div class="content">
        <span>$</span>
        <p>{{ data.amount }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const data = defineProps(['amount', 'payload', 'selected'])
const emit = defineEmits()
</script>
