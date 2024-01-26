<template>
  <header>
    <div id="logo_container">
      <Logo />
      <p>Continental</p>
    </div>
    <nav id="user_auth">
      <div id="sign" v-if="!useUserStore().is_logged_in">
        <router-link to="/register" class="user_auth">Register</router-link>
        <router-link to="/login" class="user_auth log">Login</router-link>
      </div>
      <div v-else>
        <i class="fa-regular fa-bell"></i>
        <img
          @click="toggleOptions"
          @blur="toggleOptions"
          :src="
            user.profile_photo_url
              ? `http://localhost:8000/storage/${user.profile_photo_url}`
              : '/src/assets/male_user.png'
          "
          alt="User Image"
          class="user_image"
        />
        <div :class="{ show: options, hide: !options }" class="user_options">
          <p>{{ user.first_name }} {{ user.last_name }}</p>
          <router-link to="/dashboard">Dashoard</router-link>
          <router-link to="/profile">View Profile</router-link>
          <router-link to="/settings/account">Edit Profile</router-link>
          <button to="/" @click="useUserStore().logout()">Logout</button>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import Logo from '../Logo.vue'
import { useUserStore } from '../../stores/UserStore'
import { ref } from 'vue'
console.log(useUserStore())
const props = defineProps(['user'])
const user = useUserStore().user
console.log(user)
const options = ref(false)

const toggleOptions = () => {
  options.value = !options.value
}
</script>
<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--faint);
  position: sticky;

  top: 0;
  z-index: 200;
}

#logo_container {
  display: flex;
  align-items: center;
  gap: 10px;
}

#logo_container p {
  font-family: 'Lobster', serif;
  font-size: 25px;
}

header .logo {
  width: 40px;
}

.user_image {
  width: 2em;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: var(--primary);
  aspect-ratio: 1 /1;
  border-radius: 50%;
  cursor: pointer;
}

.user_options {
  position: absolute;
  background: var(--secondary);
  width: 100%;
  max-width: 12em;
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  display: grid;
  gap: 1em;
  transition: 500ms ease-in;
}

.user_options a {
  text-decoration: none;
}

.user_options a:hover {
  color: #222;
}

.show {
  top: 110%;
  right: 1em;
  padding: 2em 1em;
  opacity: 1;
}

.hide {
  top: -400%;
  right: 1em;
  opacity: 0;
}

#sign {
  display: flex;
  gap: 1em;
}

#sign a {
  text-decoration: none;
}

@media screen and (max-width: 350px) {
  #sign {
    background-color: var(--faint);
    border-radius: 0.2em;
    padding: 0.5em;
    display: flex;
    gap: 2em;
    position: absolute;
    top: 90%;
    right: 0;
  }
}
</style>
