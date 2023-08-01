<template>
  <div id="card">
    <div>
      <Chip />
      <Visa />
    </div>
    <p id="name">{{ first_name }} {{ last_name }}</p>
    <strong>123 XXX XXX 345</strong>
    <p id="company">Continental</p>
  </div>
</template>
<script setup>
import Visa from "./Visa.vue";
import Chip from "./Chip.vue";

const props = defineProps({
  first_name: String,
  last_name: String,
});
</script>
<style scoped>
#card {
  width: 250px;
  padding: 10px;
  background-color: blueviolet;
  border-radius: 20px;
}

#card > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

svg {
  display: block;
}
#card #chip {
  width: 60px;
}

#card #visa {
  width: 50px;
  fill: var(--text);
}

#name {
  margin-top: 10px;
  margin-bottom: 5px;
}

strong {
  display: block;
  text-align: center;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 5px;
}

#company {
  font-size: 26px;
  font-family: "Great Vibes", serif;
  text-align: center;
}
</style>
