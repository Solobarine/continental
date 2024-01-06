<template>
  <section id="messages_section">
    <div id="messages_menu">
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
    <div id="messages">
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
  import ImportantMail from '../../icons/ImportantMail.vue'
  import Loading from '../../reusables/Loading.vue'
  import GetMessages from './GetMessages.vue'
</script>
<style>
  #messages_section {
    display: flex;
    padding-top: 30px;
    gap: 20px;
  }

  #messages_menu {
    width: 20rem;
    height: 90vh;
    border-radius: 15px;
    padding: 10px 5px;
    padding-top: 40px;
    background-color: var(--primary);
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
  }

  @media screen and (max-width: 650px) {
    #messages_section {
      flex-direction: column;
    }

    #messages_menu {
      position: sticky;
      top: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      height: auto;
      width: auto;
      z-index: 10;
    }

    #messages_menu {
      padding: 8px;
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
      font-size: 1.4em;
    }

    .message_options p {
      font-size: 14px;
    }

    .message_options .important_mail {
      width: 1.2em;
    }
  }
</style>
