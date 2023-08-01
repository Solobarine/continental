<template>
  <section id="about_us">
    <h1>About Us</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, vero sed repellat minus quasi cumque magni voluptatum. Itaque
      sunt iusto nobis nostrum neque maxime totam, eligendi ut quasi animi fugiat nemo aperiam atque nesciunt sapiente! Veniam
      consequatur ad voluptate quaerat quae. Atque illum incidunt iure quos recusandae magni iusto omnis!
    </p>
    <Suspense>
      <template #default>
        <Team />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
    <Team />
  </section>
</template>
<script setup>
import { Suspense } from 'vue'
import Loading from '../reusables/Loading.vue'
import Team from './Team.vue'
</script>
<style scoped>
#about_us {
  padding: 20px;
  margin-bottom: 20px;
}

p {
  max-width: 600px;
  font-size: 0.9rem;
}
</style>
