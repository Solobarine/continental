<template>
  <section>
    <Suspense>
      <template #default>
        <RouteWindow />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </section>
</template>

<script setup>
import Loading from '../reusables/Loading.vue'
import RouteWindow from './RouteWindow.vue'
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
    padding-right: 20px;
    padding-bottom: 20px;
  }

  .route {
    padding-left: 55px;
  }
}
</style>
