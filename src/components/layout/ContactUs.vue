<template>
  <section id="contact_form">
    <div id="contact_image">
      <img
        src="/contact.svg"
        alt="" />
    </div>
    <form action="post">
      <h2>Contact Us</h2>
      <FormInput
        :key="index"
        v-for="(input, index) in contact_inputs"
        :type="input.type"
        :label="input.label"
        :name="input.name"
        :autocomplete="input.autocomplete"
        :pattern="input.pattern"
        :required="input.required"
        :error_message="input.error_message"
        :payload="payload[input.name]" />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="5"
        placeholder="Describe your issue"
        required></textarea>
      <input
        type="submit"
        value="Send" />
    </form>
  </section>
</template>
<script setup>
import FormInput from '../auth/FormInput.vue'
import contact_inputs from './contact_inputs'

const payload = {
  first_name: '',
  last_name: '',
  email: ','
}
</script>
<style scoped>
#contact_form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 20px;
  padding-bottom: 30px;
  background-image: url(/R.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

#contact_image {
  flex-grow: 1;
  min-width: 350px;
  max-width: 550px;
  margin: auto;
}

#contact_form form {
  max-width: 400px;
  min-width: 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: auto;
}

h2 {
  grid-column: 1 / -1;
  font-weight: 500;
  color: black;
  margin-top: 20px;
}

#contact_form form > :nth-child(4),
#contact_form form > :nth-child(5) {
  grid-column: 1 / -1;
}

textarea {
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--text);
}
</style>
