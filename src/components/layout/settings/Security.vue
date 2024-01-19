<template>
  <section id="security">
    <div id="new_password">
      <h3>Change Password</h3>
      <FormKit type="form" submit-label="Change Password">
        <FormKit
          v-for="(field, i) in password_change"
          :key="i"
          :type="field.type"
          :name="field.name"
          :validation="field.validation"
          :validation-messages="field.validation_messages"
          :placeholder="field.label"
        />
      </FormKit>
    </div>
    <hr />
    <div id="new_email">
      <h3>Change Email</h3>
      <FormKit type="form" submit-label="Change Email">
        <FormKit
          v-for="(field, i) in email_change"
          :key="i"
          :type="field.type"
          :name="field.name"
          :validation="field.validation"
          :validation-messages="field.validation_messages"
          :placeholder="field.label"
        />
      </FormKit>
    </div>
  </section>
</template>
<script setup>
import { reactive } from 'vue'
import { password_change, email_change } from './security'

const changePassword = data => {}

const changeEmail = data => {}
</script>
<style scoped>
#security {
  padding: 1em 0;
}

#security > div {
  max-width: 30em;
}

h3 {
  margin-bottom: 10px;
}

hr {
  margin: 2em 0;
  border-top: 2px solid var(--secondary);
}

form {
  display: grid;
  gap: 1em;
}
</style>
