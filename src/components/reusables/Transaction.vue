<template>
  <div id="transaction">
    <div>
      <img src="/src/assets/female_user.png" alt="arya" />
      <p>A. Devin</p>
    </div>
    <small class="status">completed</small>
    <small>20 Jun 2023</small>
    <p>$1456</p>
  </div>
</template>
<script setup>
const props = defineProps({
  name: String,
  image: String,
  status: String,
  date: Date,
  amount: Number,
});
</script>
<style scoped>
#transaction {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 12px 3px;
  margin-bottom: 5px;
}

#transaction > div {
  display: flex;
  align-items: center;
  gap: 12px;
}

#transaction > div p {
  font-size: 0.8rem;
}

img {
  width: 35px;
  display: block;
}

.status {
  background-color: rgb(165, 231, 209);
  color: var(--green);
  padding: 8px;
  border-radius: 12px;
}
</style>
