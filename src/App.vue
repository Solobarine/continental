<template>
  <section id="top_app">
    <HeaderVue />
    <router-view></router-view>
    <FooterVue />
  </section>
</template>
<script setup>
import FooterVue from './components/layout/Footer.vue'
import HeaderVue from './components/layout/Header.vue'
</script>
<style></style>
