<template>
  <div
    id="overlay"
    class="hide">
    <div>
      <p>{{ props.message }} Your Transfer is successful</p>
      <p
        @click="closeModal"
        id="close">
        &copysr;
      </p>
      <router-link to="/dashboard">Go to Dashboard</router-link>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTransferStore } from '../../stores/TransferStore'

const props = defineProps({
  message: String,
  closeModal: Function
})

// const message = ref(useTransferStore().success)
// console.log(message)
</script>
<style scoped>
#overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  transition: 0.5s;
}

#overlay p {
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
}

#overlay > div {
  position: relative;
  width: 70%;
  margin-left: 15%;
  border-radius: 10px;
  padding: 10px;
  background-color: var(--green);
}

.hide {
  opacity: 0;
  transform: translateY(-500px);
  z-index: -3;
}

.show {
  opacity: 1;
  transform: translateY(0);
  z-index: 1;
}

#close {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}

#overlay a {
  text-decoration: none;
  display: block;
  text-align: center;
  color: #fff;
  margin-top: 30px;
  transition: ease 0.5s;
}

#overlay a:hover {
  text-decoration: underline;
  font-weight: 600;
}
</style>
