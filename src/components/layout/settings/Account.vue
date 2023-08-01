<template>
  <section id="account_settings">
    <div>
      <h3>Update Details</h3>
      <div id="account_profile">
        <h4>My Profile</h4>
        <div>
          <img
            src="/src/assets/male_user.png"
            alt="user" />
          <button
            type="submit"
            class="submit">
            Upload Now
          </button>
          <button
            type="submit"
            class="delete">
            Delete
          </button>
        </div>
      </div>
      <hr />
      <form
        action="put"
        id="update_data">
        <FormInput
          :key="index"
          v-for="(input, index) in update_inputs"
          :type="input.type"
          :label="input.label"
          :name="input.name"
          :autocomplete="input.autocomplete"
          :pattern="input.pattern"
          :required="input.required"
          :error_message="input.error_message"
          :payload="basic_details" />
        <Select
          v-for="(input, index) in select_fields"
          :key="index"
          :label="input.label"
          :name="input.name"
          :pattern="input.pattern"
          :autocomplete="input.autocomplete"
          :required="input.required"
          :payload="more_details" />
        <input
          type="submit"
          value="Update" />
      </form>
      <hr />
      <div id="delete_account">
        <div>
          <h4>Delete Account</h4>
          <p>When You delete your Account, you lose access to our services and we permanently delete your personal data.</p>
        </div>
        <form action="delete">
          <button
            type="submit"
            class="delete">
            Delete Account
          </button>
          <button type="submit">Learn More</button>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup>
import FormInput from '../../auth/FormInput.vue'
import Select from './Select.vue'
import { update_inputs, select_fields } from './account_inputs'
import { reactive } from 'vue'

const basic_details = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  dob: ''
})

const more_details = reactive({
  country: '',
  state: '',
  city: ''
})
</script>
<style scoped>
#account_settings > div {
  padding: 20px;
  max-width: 600px;
}

#account_settings h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

#account_profile {
  display: grid;
  gap: 15px;
}

#account_profile > div {
  display: flex;
  align-self: center;
  gap: 10px 30px;
}

.submit {
  background-color: var(--green);
  color: var(--white);
}

.delete {
  background-color: var(--red);
  color: var(--white);
}

hr {
  border-top: 1px solid var(--alternative);
  margin: 20px;
  outline: 0px;
}

#account_profile > div img {
  display: block;
  width: 45px;
}

#account_profile > div button,
#delete_account button {
  display: block;
  white-space: nowrap;
  align-self: center;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--secondary);
  cursor: pointer;
}

#update_data {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 30px;
}

#update_data input[type='submit'] {
  width: 120px;
  color: var(--white);
  margin-top: 10px;
}

#delete_account {
  display: flex;
  column-gap: 40px;
  align-items: center;
}

#delete_account p {
  font-size: 0.7rem;
}

#delete_account form {
  display: flex;
  align-items: center;
  column-gap: 30px;
}
</style>
