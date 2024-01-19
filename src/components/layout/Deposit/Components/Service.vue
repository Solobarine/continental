<template>
  <div class="service">
    <slot />
  </div>
</template>

<script setup>
const data = defineProps(['name'])
</script>
<style scoped>
.service {
  position: relative;
  width: 5em;
  align-items: start;
  backdrop-filter: blur(4px) saturate(149%);
  -webkit-backdrop-filter: blur(4px) saturate(149%);
  background-color: rgba(100, 100, 100, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 10px 0;
  align-items: center;
  cursor: pointer;
}

.service.highlight {
  background-color: var(--primary);
}

.service svg {
  height: 3em;
  aspect-ratio: 16 / 9;
  display: block;
  background-size: cover;
}
</style>
