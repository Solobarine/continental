<template>
  <section id="settings">
    <div id="settings_menu">
      <router-link
        to="/settings/notifications"
        class="setting_item">
        <ion-icon name="notifications-outline"></ion-icon>
        <p>Notifications</p>
      </router-link>
      <router-link
        to="/settings/security"
        class="setting_item">
        <ion-icon name="lock-closed"></ion-icon>
        <p>Security</p>
      </router-link>
      <router-link
        to="/settings/theme"
        class="setting_item">
        <ion-icon name="brush-outline"></ion-icon>
        <p>Theme</p>
      </router-link>
      <router-link
        to="/settings/account"
        class="setting_item">
        <ion-icon name="person-circle-outline"></ion-icon>
        <p>Account</p>
      </router-link>
    </div>
    <router-view class="settings_content"></router-view>
  </section>
</template>
<script setup></script>
<style scoped>
#settings {
  display: flex;
  gap: 20px;
}

#settings_menu {
  width: 200px;
  padding: 10px;
  padding-top: 40px;
  border-radius: 20px;
  background-color: var(--primary);
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
    width: 100%;
    position: sticky;
    top: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    padding: 8px;
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
    font-size: 45px;
  }
}
</style>
