<template>
  <section id="security">
    <div id="new_password">
      <h3>Change Password</h3>
      <form action="post">
        <FormInput
          :key="index"
          v-for="(input, index) in password_change"
          :type="input.type"
          :label="input.label"
          :name="input.name"
          :autocomplete="input.autocomplete"
          :pattern="input.pattern"
          :required="input.required"
          :error_message="input.error_message"
          :payload="password_payload" />
        <input
          type="submit"
          value="Change" />
      </form>
    </div>
    <div id="new_email">
      <h3>Change Email</h3>
      <form action="post">
        <FormInput
          :key="index"
          v-for="(input, index) in email_change"
          :type="input.type"
          :label="input.label"
          :name="input.name"
          :autocomplete="input.autocomplete"
          :pattern="input.pattern"
          :required="input.required"
          :error_message="input.error_message"
          :payload="email_payload" />
        <input
          type="submit"
          value="Change" />
      </form>
    </div>
  </section>
</template>
<script setup>
  import { reactive } from 'vue'
  import FormInput from '../../auth/FormInput.vue'
  import { password_change, email_change } from './security'
  import { ref } from 'vue'

  const password_payload = reactive({
    old_password: '',
    new_password: '',
    confirm_new_password: ''
  })

  const email_payload = reactive({
    old_email: '',
    new_email: '',
    password: ''
  })
</script>
<style scoped>
  #security > div {
    max-width: 400px;
    margin-bottom: 40px;
  }

  h3 {
    margin-bottom: 10px;
  }

  form {
    display: grid;
    gap: 15px;
  }

  input[type='submit'] {
    width: 150px;
    margin-top: 20px;
  }
</style>
