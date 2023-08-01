<template lang="">
  <section id="register_component">
    <!-- <div></div> -->
    <form id="register_form">
      <h4>Create an Account</h4>
      <FormInput
        v-for="(input, index) in register_inputs"
        :key="index"
        :label="input.label"
        :type="input.type"
        :name="input.name"
        :pattern="input.pattern"
        :autocomplete="input.autocomplete"
        :required="input.required"
        :error_message="input.error_message"
        :payload="payload" />
      <input
        type="submit"
        value="Register" />
      <p id="other_action">Already a User, <router-link to="/login">Login</router-link></p>
    </form>
  </section>
</template>
<script setup>
import { reactive } from 'vue'
import FormInput from './FormInput.vue'
import { register_inputs } from './inputs'

const payload = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm_password: ''
})
</script>
<style>
#register_component {
  background-image: url(/R.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

#register_form {
  max-width: 650px;
  border-radius: 20px;
  backdrop-filter: invert(100%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 30px;
  padding: 20px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  border: 1px solid var(--primary);
}

#register_form h4 {
  grid-column: 1 / -1;
  color: var(--faint);
  margin: 10px 0;
}

#register_form label {
  color: var(--white);
}

#register_form input {
  color: var(--text);
}

#register_form input[type='submit'] {
  grid-column: 1/1;
}

#other_action {
  grid-column: 1/ -1;
  text-align: center;
}

#other_action a {
  text-decoration: none;
  transition: 0.4s ease;
}

#other_action a:hover {
  color: var(--green);
}

#register_form span {
  color: var(--red);
  font-weight: 600;
}
</style>
