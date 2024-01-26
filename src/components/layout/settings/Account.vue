<template>
  <section id="account_settings">
    <div>
      <h3>Update Details</h3>
      <div id="account_profile">
        <img
          ref=""
          :src="
            user.profile_photo_url
              ? `http://localhost:8000/storage/${user.profile_photo_url}`
              : userImageSrc
          "
          alt="user"
        />
        <input
          @change.prevent="loadImage"
          ref="imageElement"
          type="file"
          name="image"
          id="image"
        />
        <div>
          <button
            type="submit"
            class="change"
            @click.prevent="() => imageElement.click()"
          >
            Change Profile
          </button>
          <button type="submit" class="upload" @click.prevent="uploadImage">
            Upload
          </button>
        </div>
      </div>
      <hr />
      <FormKit
        type="form"
        id="update_form"
        submit-label="Update Profile"
        @submit="update"
      >
        <FormKit
          v-for="(field, i) in update_inputs"
          :key="i"
          :type="field.type"
          :validation="field.validation"
          :placeholder="field.label"
          :name="field.name"
          :validation-messages="
            field.validation_messages ? field.validation_messages : null
          "
        />
      </FormKit>
      <hr />
      <div id="delete_account">
        <div>
          <h4>Delete Account</h4>
          <p>
            When You delete your Account, you lose access to our services and we
            permanently delete your personal data.
          </p>
        </div>
        <form action="delete">
          <button type="submit" class="delete">Delete Account</button>
          <button type="submit">Learn More</button>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup>
import { update_inputs } from './account_inputs'
import { ref } from 'vue'
import { useUserStore } from '../../../stores/UserStore'

const userStore = useUserStore()
const { user } = userStore
console.log(user)
const userImageSrc = ref('/src/assets/male_user.png')
const imageElement = ref(null)
const image = ref('')

const loadImage = () => {
  const file = imageElement.value.files[0]
  image.value = file
  userImageSrc.value = file
}

const uploadImage = async () => {
  const formData = new FormData()
  formData.append('avatar', image.value)
  await userStore.updateProfileImage(formData)
}

const update = data => {
  console.log(data)
}
</script>
<style scoped>
#account_settings > div {
  padding: 0 1em;
  max-width: 45em;
  width: 100%;
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

#account_profile input[type='file'] {
  display: none;
}

.change {
  background-color: var(--green);
  color: var(--white);
}

.upload {
  background-color: var(--primary);
  color: var(--white);
}

.delete {
  background-color: var(--red);
  color: var(--faint);
}

hr {
  border-top: 1px solid var(--secondary);
  margin: 1.5em 0.75em;
  outline: 0px;
}

#account_profile img {
  display: block;
  width: 4em;
  aspect-ratio: 1;
  border-radius: 50%;
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
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  gap: 10px 30px;
}

.formkit-wrapper,
.formkit-inner {
  display: grid;
  gap: 0.4em;
}

#delete_account {
  display: flex;
  gap: 1em 2em;
  align-items: center;
  flex-wrap: wrap;
}

#delete_account p {
  font-size: 0.7rem;
  max-width: 20em;
  width: 100%;
}

#delete_account form {
  display: flex;
  align-items: center;
  column-gap: 30px;
}
</style>
