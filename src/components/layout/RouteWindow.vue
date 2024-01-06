<template>
  <section id="parent">
    <Menu />
    <router-view class="route"></router-view>
  </section>
</template>
<style scoped>
  @media screen and (max-width: 650px) {
    .route {
      padding: 0.6em;
      margin-top: 2em;
    }
  }
</style>
<script setup>
  import Menu from './Menu.vue'
  import { useUserStore } from '../../stores/UserStore'

  let userStore = {}
  if (useUserStore().is_logged_in) {
    userStore = useUserStore()
  } else {
    await useUserStore()
      .getUser()
      .then(() => (userStore = useUserStore()))
  }
  console.log(userStore)
</script>
