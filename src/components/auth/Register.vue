<template lang="">
  <section id="register_component">
    <div id="r-background"></div>

    <div id="r-content">
      <FormKit
        type="form"
        submit-label="Register"
        :value="{
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirm_password: '',
        }"
        @submit="register"
        id="register"
      >
        <h4>Create an Account</h4>
        <FormKit
          type="text"
          name="first_name"
          placeholder="Enter your First Name"
          validation="required|length:1,25"
          :validation-messages="{
            required: 'First Name is Required',
            length: 'First Name should be between 1 and 25 Characters',
          }"
        />
        <FormKit
          type="text"
          name="last_name"
          placeholder="Enter your Last Name"
          validation="required|length:1,25"
          :validation-messages="{
            required: 'Last Name is Required',
            length: 'Last Name should be between 1 and 25 Characters',
          }"
        />
        <FormKit
          type="email"
          name="email"
          placeholder="Enter your Email"
          validation="required|email"
        />
        <FormKit
          type="password"
          name="password"
          placeholder="Enter your Password"
          validation="required|length:8,20"
        />
        <FormKit
          type="password"
          name="confirm_password"
          placeholder="Repeat your Password"
          validation="required|confirm"
          :validation-messages="{
            required: 'Confirm Password is Required',
            confirm: 'Confirm Password does not Match',
          }"
        />
      </FormKit>
      <p id="other_action">
        Already a User, <router-link to="/login">Login</router-link>
      </p>
    </div>
  </section>
</template>
<script setup>
import { useUserStore } from '../../stores/UserStore'

const userStore = useUserStore()

const register = payload => {
  return userStore.register(payload)
}
</script>
<style>
#register_component {
  display: flex;
  min-height: 75dvh;
}

#r-background {
  flex-grow: 1;
  background-image: url(../../../public/auth.svg);
}

#r-content {
  flex-basis: 30em;
  padding-bottom: 3em;
}

#register {
  display: grid;
  padding: 2em 1em;
  gap: 1.5em;
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
