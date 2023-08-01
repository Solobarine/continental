<template>
  <header>
    <div id="logo_container">
      <Logo />
      <p>Continental</p>
    </div>
    <nav
      ref="menu"
      id="web_links"
      @click="
        () => {
          toggleState = false
          menu.classList.add('close')
        }
      "
      @blur="
        () => {
          toggleState = false
          menu.classList.add('close')
        }
      "
      class="close">
      <router-link
        v-if="useUserStore().is_logged_in"
        class="web_link"
        to="/dashboard"
        >Dashboard</router-link
      >
      <router-link
        to="/"
        class="web_link"
        >Home</router-link
      >
      <router-link
        to="/contact-us"
        class="web_link"
        >Contact Us</router-link
      >
      <router-link
        to="/about-us"
        class="web_link"
        >About Us</router-link
      >
      <router-link
        to="/register"
        class="user_auth"
        >Register</router-link
      >
      <router-link
        to="/login"
        class="user_auth log"
        >Login</router-link
      >
    </nav>
    <nav id="user_auth">
      <div
        id="sign"
        v-if="!useUserStore().is_logged_in">
        <router-link
          to="/register"
          class="user_auth"
          >Register</router-link
        >
        <router-link
          to="/login"
          class="user_auth log"
          >Login</router-link
        >
      </div>
      <button
        @click="useUserStore().logout()"
        v-else
        to="/logout"
        class="user_auth log">
        Logout
      </button>
    </nav>
    <div id="menu">
      <ion-icon
        v-if="!toggleState"
        name="menu-outline"
        @click="toggleMenu"></ion-icon>
      <ion-icon
        v-else
        name="close-outline"
        @click="toggleMenu"></ion-icon>
    </div>
  </header>
</template>
<script setup>
import Logo from '../Logo.vue'
import { useUserStore } from '../../stores/UserStore'
import { reactive, ref } from 'vue'

const toggleState = ref(false)
const menu = ref(null)

const toggleMenu = () => {
  toggleState.value = !toggleState.value
  menu.value.classList.toggle('close')
  console.log(menu.value)
}
</script>
<style>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--secondary);
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

#web_links,
#user_auth {
  display: flex;
  align-items: center;
  gap: 15px;
}

#web_links .user_auth {
  display: none;
}

.web_link,
.user_auth {
  text-decoration: none;
  transition: 0.6s ease;
}

#sign {
  display: flex;
  align-items: center;
  gap: 20px;
}

header .log {
  color: var(--white);
  background-color: var(--primary);
  padding: 7px 14px;
  font-size: 0.9rem;
  border-radius: 16px;
}

#menu {
  display: none;
}

.router-link-exact-active {
  font-weight: 600;
  transition: 0.6s ease;
}

@media screen and (max-width: 650px) {
  #web_links {
    flex-direction: column;
    position: absolute;
    background-color: var(--secondary);
    border-radius: var(--faint);
    padding: 20px;
    top: 80px;
    right: 20px;
    z-index: 10;
    border-radius: 15px;
    pointer-events: all;
    transition: 0.4s ease-in;
  }

  #web_links .user_auth {
    display: flex;
  }

  #web_links a {
    color: var(--faint);
    transition: 0.4s ease-in;
  }

  #web_links a:hover {
    color: var(--primary);
  }

  #user_auth {
    display: none;
  }

  #menu {
    display: flex;
    align-items: center;
  }

  #menu > ion-icon {
    font-size: 20px;
  }

  .close {
    position: absolute;
    opacity: 0;
    z-index: -2;
    top: -600px;
    scale: 0;
    pointer-events: none;
  }
}
</style>
