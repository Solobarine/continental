<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import { useUserStore } from '../../stores/UserStore'

const userStore = useUserStore()
if (!userStore.is_logged_in) userStore.getUser()

console.log(useUserStore().user)
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>
