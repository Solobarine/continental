<template>
  <section id="messages_section">
    <div id="messages_menu" :class="showMessageMenu ? 'show' : 'hide'">
      <ion-icon
        @click="toggle"
        class="message_toggle"
        :class="showMessageMenu ? 'hide' : 'show'"
        :name="showMessageMenu ? 'close-outline' : 'mail'"
      ></ion-icon>
      <div class="message_options">
        <ion-icon name="mail-outline"></ion-icon>
        <p>Inbox</p>
      </div>
      <div class="message_options">
        <ion-icon name="star-half-outline"></ion-icon>
        <p>Starred</p>
      </div>
      <div class="message_options">
        <important-mail />
        <p>Important</p>
      </div>
      <div class="message_options">
        <ion-icon name="archive-outline"></ion-icon>
        <p>Archive</p>
      </div>
      <div class="message_options">
        <ion-icon name="trash-outline"></ion-icon>
        <p>Trash</p>
      </div>
    </div>
    <div class="messages">
      <Suspense>
        <template #default>
          <GetMessages />
        </template>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import ImportantMail from '../../icons/ImportantMail.vue'
import Loading from '../../reusables/Loading.vue'
import GetMessages from './GetMessages.vue'

const showMessageMenu = ref(false)
const toggle = () => {
  showMessageMenu.value = !showMessageMenu.value
}
</script>
<style>
#messages_section {
  display: flex;
  padding-top: 30px;
  gap: 20px;
}

#messages_menu {
  width: 15rem;
  height: 90vh;
  border-radius: 1em 1em 0 0;
  padding: 10px 5px;
  padding-top: 40px;
  background-color: var(--primary);
}

.message_toggle {
  display: none;
}

.message_options {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 10px;
  transition: 0.4s ease;
  cursor: pointer;
}

.message_options:hover {
  background-color: var(--white);
}

.message_options:hover * {
  fill: var(--primary);
  color: var(--primary);
}

.message_options > svg {
  width: 18px;
  fill: var(--white);
  display: block;
}

.message_options > ion-icon {
  font-size: 20px;
  color: var(--white);
}

.message_options p {
  color: var(--white);
}

.messages {
  flex-grow: 1;
  min-height: calc(100vh - 60px);
}

@media screen and (max-width: 650px) {
  #messages_section {
    flex-direction: column;
  }

  .message_toggle {
    position: fixed;
    display: block;
    top: 60px;
    font-size: 3em;
    color: var(--faint);
    right: 0;
  }

  .message_toggle.show {
    color: var(--primary);
    visibility: visible;
  }

  .message_toggle.hide {
    visibility: visible;
    right: 0.5em;
  }

  #messages_menu {
    position: fixed;
    transition: 0.5s ease-in;
    top: 60px;
    padding: 3em 0;
    display: grid;
    gap: 0.5em;
    border-radius: 0;
    height: auto;
    width: auto;
    z-index: 10;
  }

  #messages_menu.hide {
    right: -15em;
  }

  #messages_menu.show {
    right: 0;
  }

  .message_options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    gap: 5px;
    padding: 10px;
  }

  .message_options ion-icon {
    align-self: center;
    text-align: center;
    justify-content: center;
    font-size: 45px;
  }

  .message_options p {
    font-size: 14px;
  }

  .message_options .important_mail {
    width: 45px;
  }
}
</style>
