<template>
  <section id="settings">
    <div id="settings_menu" :class="settingsMenu ? 'show' : 'hide'">
      <ion-icon
        @click="toggleMenu"
        :name="settingsMenu ? 'close-outline' : 'apps'"
        class="menuToggle"
        :class="settingsMenu ? 'hide' : 'show'"
      ></ion-icon>
      <router-link to="/settings/notifications" class="setting_item">
        <ion-icon name="notifications"></ion-icon>
        <p>Notifications</p>
      </router-link>
      <router-link to="/settings/security" class="setting_item">
        <ion-icon name="lock-closed"></ion-icon>
        <p>Security</p>
      </router-link>
      <router-link to="/settings/theme" class="setting_item">
        <ion-icon name="color-palette-outline"></ion-icon>
        <p>Theme</p>
      </router-link>
      <router-link to="/settings/account" class="setting_item">
        <ion-icon name="person-circle-outline"></ion-icon>
        <p>Account</p>
      </router-link>
    </div>
    <router-view class="settings_content"></router-view>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const settingsMenu = ref(false)
const toggleMenu = () => {
  settingsMenu.value = !settingsMenu.value
}
</script>
<style scoped>
#settings {
  display: flex;
  gap: 20px;
}

#settings_menu {
  width: 15em;
  padding: 10px;
  padding-top: 40px;
  border-radius: 20px;
  background-color: var(--primary);
}

.menuToggle {
  display: none;
}

.settings_content {
  flex-grow: 1;
}

.setting_item {
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  margin-bottom: 10px;
  border-radius: 12px;
  color: var(--white);
  transition: 0.4s ease;
}

.setting_item ion-icon,
.setting_item i {
  font-size: 20px;
  color: var(--white);
}

.setting_item > p {
  color: var(--white);
}

.setting_item:hover {
  background-color: var(--white);
}

.setting_item:hover * {
  color: var(--primary);
}

@media screen and (max-width: 650px) {
  #settings {
    flex-direction: column;
  }

  #settings_menu {
    width: 7em;
    position: fixed;
    top: 60px;
    right: 0;
    display: grid;
    gap: 0.6em;
    height: auto;
    padding: 8px;
    padding-top: 4em;
    transition: 0.2s ease-in;
  }

  #settings_menu.show {
    right: 0;
  }

  #settings_menu.hide {
    right: -7em;
  }

  .menuToggle {
    position: fixed;
    display: block;
    top: 1.5em;
    color: var(--primary);
    font-size: 3em;
    visibility: visible;
    margin: auto;
  }

  .menuToggle.show {
    right: 0;
  }

  .menuToggle.hide {
    color: var(--faint);
    font-size: 3em;
    right: 0.5em;
  }

  .setting_item {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .setting_item p {
    font-size: 14px;
  }

  .setting_item ion-icon,
  .setting_item i {
    font-size: 2em;
  }
}
</style>
