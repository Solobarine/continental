<template>
  <menu :class="is_collapsed.value ? 'collapse' : 'expand'">
    <div id="menu_nav">
      <angle-double
        @click="
          () => {
            toggle_menu(is_collapsed)
          }
        "
        class="menu_toggle"
        :class="!is_collapsed.value && 'rotate'"
      />
      <div id="menu_items" @click="toggleCollapse" @blur="toggleCollapse">
        <router-link to="/dashboard" class="menu_links">
          <ion-icon
            name="home-outline"
            :class="is_collapsed.value ? 'center' : 'left'"
          ></ion-icon>
          <p :class="is_collapsed.value ? 'hide' : 'show'">Dashboard</p>
        </router-link>
        <router-link to="/profile" class="menu_links">
          <ion-icon
            name="person-outline"
            :class="is_collapsed.value ? 'center' : 'left'"
          ></ion-icon>
          <p :class="is_collapsed.value ? 'hide' : 'show'">Profile</p>
        </router-link>
        <router-link to="/messages" class="menu_links">
          <envelope :class="is_collapsed.value ? 'center' : 'left'" />
          <p :class="is_collapsed.value ? 'hide' : 'show'">Messages</p>
        </router-link>
        <router-link to="/deposit" class="menu_links">
          <deposit :class="is_collapsed.value ? 'center' : 'left'" />
          <p :class="is_collapsed.value ? 'hide' : 'show'">Deposit</p>
        </router-link>
        <router-link to="/transfer" class="menu_links">
          <ion-icon
            :class="is_collapsed.value ? 'center' : 'left'"
            name="card-outline"
          ></ion-icon>
          <p :class="is_collapsed.value ? 'hide' : 'show'">Transfer</p>
        </router-link>
        <router-link to="/transactions" class="menu_links">
          <ion-icon
            name="cash-outline"
            :class="is_collapsed.value ? 'center' : 'left'"
          ></ion-icon>
          <p :class="is_collapsed.value ? 'hide' : 'show'">Transactions</p>
        </router-link>
        <router-link to="/settings/notifications" class="menu_links">
          <ion-icon
            name="settings-outline"
            :class="is_collapsed.value ? 'center' : 'left'"
          ></ion-icon>
          <p :class="is_collapsed.value ? 'hide' : 'show'">Settings</p>
        </router-link>
      </div>
    </div>
    <div id="theme">
      <ion-icon
        :class="is_collapsed.value ? 'hide' : 'show'"
        name="sunny-outline"
      ></ion-icon>
      <toggle-off
        v-if="is_light_theme.value"
        :class="is_collapsed.value ? 'center' : 'left'"
        @click="change_theme"
      />
      <toggle-on
        v-else
        :class="is_collapsed.value ? 'center' : 'left'"
        @click="change_theme"
      />
      <ion-icon
        :class="is_collapsed.value ? 'hide' : 'show'"
        name="moon-outline"
      ></ion-icon>
    </div>
  </menu>
</template>
<script setup>
import { reactive, ref } from 'vue'
import ToggleOn from '../icons/ToggleOn.vue'
import ToggleOff from '../icons/ToggleOff.vue'
import Envelope from '../icons/Envelope.vue'
import Deposit from '../icons/Deposit.vue'
import { toggle_menu } from '../../utils/toggle_menu'
import AngleDouble from '../icons/AngleDouble.vue'

const is_light_theme = reactive({ value: true })
const is_collapsed = reactive({ value: true })
const change_theme = () => {
  is_light_theme.value = !is_light_theme.value
  console.log(is_light_theme)
}

const toggleCollapse = () => {
  if (window.screen.width <= 650) {
    is_collapsed.value = !is_collapsed.value
  }
}
</script>
<style scoped>
menu {
  transition: 0.4s ease;
  padding: 20px 10px;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  min-height: 90vh;
}

.menu_toggle {
  rotate: 360deg;
  font-size: 2em;
  display: block;
  margin: auto;
  margin-bottom: 40px;
  transition: 0.4s ease;
  cursor: pointer;
}

.rotate {
  display: block;
  margin: 0;
  margin-left: auto;
  rotate: 180deg;
  margin-bottom: 40px;
}

#menu_items {
  display: grid;
  row-gap: 5px;
}

.collapse {
  width: 60px;
  margin-left: 20px;
  align-items: center;
  border-radius: 20px;
}

.expand {
  width: 200px;
  margin-left: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

i,
ion-icon {
  font-size: 25px;
  visibility: visible;
  transition: 0.4s ease;
  color: var(--white);
}

p {
  transition: 0.4s ease;
  color: var(--white);
}

.menu_icon {
  width: 25px;
  fill: var(--white);
  visibility: visible;
}

.menu_links {
  border-radius: 20px;
  padding: 12px 10px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  transition: 0.4s ease;
}

.menu_links * {
  transition: 0.4s ease;
}

.router-link-exact-active,
.menu_links:hover {
  background-color: var(--white);
}

.router-link-exact-active *,
.menu_links:hover * {
  color: var(--primary);
  fill: var(--primary);
}

.menu_links,
#theme {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.4s ease;
}

.hide {
  scale: 0;
  position: absolute;
  z-index: -3;
  transition: 0.4s ease;
}

.show {
  scale: 1;
  transition: 0.4s ease;
}

.center {
  margin: auto;
  display: block;
}

svg {
  min-width: 25px;
}

#theme svg:nth-child(odd) {
  font-size: 18px;
}

.toggle {
  transition: 0.4s ease;
  cursor: pointer;
}

@media screen and (max-width: 650px) {
  menu {
    position: fixed;
    z-index: 100;
    height: calc(100% - 60px);
  }

  .menu_toggle {
    position: absolute;
    fill: var(--primary);
    top: 0.3em;
    right: -1em;
  }

  .menu_toggle.rotate {
    position: static;
    fill: var(--white);
  }

  .collapse {
    margin-left: -42px;
    width: 40px;
    border-radius: 0;
  }
}
</style>
