<template>
  <section id="login_component">
    <div class="l-background"></div>
    <div id="l-content">
      <FormKit
        type="form"
        submit-label="Login"
        :value="{
          email: '',
          password: '',
        }"
        @submit="login"
        id="login"
      >
        <h4 id="welcome">Welcome Back</h4>
        <p v-if="userStore.error" id="error">
          {{ userStore.error }}
        </p>
        <FormKit
          type="email"
          name="email"
          placeholder="Enter your Email"
          validation="required|email"
        />
        <FormKit
          type="password"
          name="password"
          placeholder="Enter Your Password"
          validation="required|length:8,20"
        />
      </FormKit>
      <p id="other_action">
        Not a User, <router-link to="/register">Register</router-link>
      </p>
    </div>
  </section>
</template>
<script setup>
import { useUserStore } from '../../stores/UserStore'

const login = payload => {
  console.log(payload)
  return userStore.login(payload)
}

const userStore = useUserStore()
console.log(userStore)
</script>
<style>
#login_component {
  display: flex;
  min-height: 75dvh;
}

.l-background {
  flex-grow: 1;
  background: url(auth.svg);
}

#l-content {
  flex-basis: 30em;
}

#login {
  display: grid;
  padding: 2em 1em;
  gap: 1.5em;
}

#error {
  color: var(--red);
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
  background-color: var(--secondary);
}

.formkit-message {
  color: var(--red);
  margin-top: 0.5em;
  list-style-type: none;
}

#l-content .formkit-inner {
  display: grid;
}

#l-content .formkit-inner input {
  padding: 0.75em 0.5em;
  width: 100%;
  border-radius: 0.5em;
  outline: 0;
  border: 1px solid var(--secondary);
  background-color: var(--faint);
}

.formkit-inner input:focus {
  border: 1px solid var(--primary);
}

#l-content .formkit-input {
  padding: 0.5em 5em;
  display: block;
  margin: auto;
  border-radius: 0.5em;
  border: none;
  outline: none;
  background-color: var(--primary);
  color: var(--faint);
}
</style>
