<template lang="">
  <section id="register_component">
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
        value="Register"
        @click="register" />
      <p id="other_action">Already a User, <router-link to="/login">Login</router-link></p>
    </form>
  </section>
</template>
<script setup>
  import { reactive } from 'vue'
  import FormInput from './FormInput.vue'
  import { register_inputs } from './inputs'
  import { useUserStore } from '../../stores/UserStore'

  const userStore = useUserStore()

  const register = e => {
    e.preventDefault()
    return userStore.register(payload)
  }

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
    backdrop-filter: blur(10px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px 30px;
    padding: 20px;
    margin: 40px auto;
    border: 1px solid var(--primary);
  }

  #register_form h4 {
    grid-column: 1 / -1;
    color: var(--text);
    margin: 10px 0;
  }

  #register_form label {
    color: var(--text);
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

  @media only screen and (max-width: 650px) {
    #register_form {
      display: flex;
      flex-direction: column;
      margin: 40px 10px;
    }
  }
</style>
