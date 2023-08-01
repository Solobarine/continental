<template>
  <section id="login_component">
    <form id="login_form">
      <h4 id="welcome">Welcome Back</h4>
      <p
        v-if="userStore.error"
        id="error">
        {{ userStore.error }}
      </p>
      <FormInput
        :key="index"
        v-for="(input, index) in login_inputs"
        :label="input.label"
        :name="input.name"
        :autocomplete="input.autocomplete"
        :pattern="input.pattern"
        :required="input.required"
        :error_message="input.error_message"
        :payload="payload" />
      <input
        type="submit"
        value="Login"
        @click="login" />
      <p id="other_action">Not a User, <router-link to="/register">Register</router-link></p>
    </form>
  </section>
</template>
<script setup>
import { reactive } from 'vue'
import { login_inputs } from './inputs'
import FormInput from './FormInput.vue'
import { useUserStore } from '../../stores/UserStore'

const payload = reactive({
  email: '',
  password: ''
})

const login = (e) => {
  e.preventDefault()
  console.log(userStore)
  return userStore.login(payload)
}

const userStore = useUserStore()
console.log(userStore)
</script>
<style>
#login_component {
  background-image: url(/R.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

#login_form {
  margin: auto;
  margin-top: 7%;
  margin-bottom: 7%;
  max-width: 500px;
  backdrop-filter: invert(90%);
  border-radius: 20px;
  border: 1px solid var(--primary);
  display: grid;
  gap: 15px;
  padding: 20px;
}

#login_form label {
  color: var(--faint);
}

#login_form h4 {
  margin-top: 10px;
  color: var(--faint);
  grid-column: 1 / -1;
}

#login_form input[type='submit'] {
  grid-column: 1/1;
}

#other_action {
  text-align: center;
  color: var(--white);
}

#other_action a {
  text-decoration: none;
  transition: 0.4s ease;
  color: var(--white);
}

#other_action a:hover {
  color: var(--green);
}

#login_form span {
  background-color: var(--white);
  text-align: center;
  font-weight: 600;
}

#error {
  color: var(--red);
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
  background-color: var(--secondary);
}
</style>
