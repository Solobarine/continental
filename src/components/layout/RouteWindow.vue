<template>
  <section id="parent">
    <Menu />
    <router-view class="route"></router-view>
  </section>
</template>
<script setup>
import Menu from './Menu.vue'
</script>
<style>
#parent {
  position: relative;
  display: flex;
  gap: 20px;
}

.route {
  flex-grow: 1;
}

@media screen and (max-width: 650px) {
  #parent {
    padding-bottom: 20px;
  }

  .route {
    padding: 2em 0.1em;
  }
}
</style>
