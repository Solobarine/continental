<template>
  <section id="profile">
    <div id="user_avatar">
      <div>
        <img
          :src="
            user.profile_photo_url
              ? `http://localhost:8000/storage/${user.profile_photo_url}`
              : defaultPhoto
          "
          alt="lucas"
        />
        <div class="newAvatar">
          <input
            @change.prevent="loadImage"
            ref="fileInput"
            type="file"
            name="avatar"
            id="avatar"
          />
          <button @click.prevent="() => fileInput.click()" class="getAvatar">
            <ion-icon name="cloud-upload-outline"></ion-icon> Select New Avatar
          </button>
          <button class="change" @click="uploadImage" :disabled="!fileInput">
            Change Avatar
          </button>
        </div>
      </div>
    </div>
    <div>
      <div id="user_info">
        <h3>User Information</h3>
        <div>
          <strong>First Name</strong>
          <p>{{ user.first_name }}</p>
        </div>
        <div>
          <strong>Last Name</strong>
          <p>{{ user.last_name }}</p>
        </div>
        <div>
          <strong>Email</strong>
          <p>{{ user.email }}</p>
        </div>
        <div>
          <strong>Date Of Birth</strong>
          <p>{{ user.date_of_birth ? user.date_of_birth : 'Nil' }}</p>
        </div>
        <div>
          <strong>Gender</strong>
          <p>{{ user.gender ? user.gender : 'Nil' }}</p>
        </div>
        <div>
          <strong>Country</strong>
          <p>{{ user.country ? user.country : 'Nil' }}</p>
        </div>
        <div>
          <b>State</b>
          <p>{{ user.state ? user.state : 'Nil' }}</p>
        </div>
        <div>
          <strong>City</strong>
          <p>{{ user.city ? user.city : 'Nil' }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import { useUserStore } from '../../stores/UserStore'

const fileInput = ref(null)
const defaultPhoto = ref('/src/assets/male_user.png')
const image = ref(null)

const userStore = useUserStore()
const { user } = userStore

const loadImage = () => {
  const file = fileInput.value.files[0]
  image.value = file
}

const uploadImage = async () => {
  const formData = new FormData()
  formData.append('avatar', image.value)
  await userStore.updateProfileImage(formData)
}
</script>
<style scoped>
#profile {
  width: 100%;
  max-width: 40em;
  padding: 1em 0;
}

#user_avatar {
  border-radius: 0.5em;
  background-color: var(--faint);
  padding: 1em;
  box-shadow: var(--box-shadow);
}

#user_avatar img {
  background-color: var(--primary);
  border-radius: 50%;
  width: 6em;
  aspect-ratio: 1;
  box-shadow: var(--box-shadow);
}

#avatar {
  display: none;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

.newAvatar {
  padding: 1em 0;
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: 1em 3em;
}

.getAvatar {
  background-color: var(--primary);
  color: var(--faint);
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 1em;
  padding: 0.6em;
  border-radius: 0.5em;
}

.getAvatar ion-icon {
  color: var(--faint);
  display: block;
  margin: auto;
  font-size: 2em;
}

.change {
  padding: 0.8em;
  font-size: 1em;
  border-radius: 0.5em;
  background-color: var(--green);
  color: var(--faint);
}

h3 {
  grid-column: 1 / -1;
}

#user_info {
  margin-top: 2em;
  background-color: var(--faint);
  border-radius: 0.5em;
  box-shadow: var(--box-shadow);
  padding: 1.5em 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  gap: 1em 4em;
}

#user_info > div {
  display: grid;
  gap: 1em;
  border-bottom: 1px solid var(--primary);
}
</style>
