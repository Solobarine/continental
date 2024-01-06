<template>
  <section id="profile">
    <div id="user_profile">
      <div>
        <img
          src="/src/assets/male_user.png"
          alt="lucas" />
        <p>{{ user.first_name }} &nbsp;&nbsp;{{ user.last_name }}</p>
      </div>
    </div>
    <div id="other_info">
      <h3>User Information</h3>
      <div id="user_info">
        <div>
          <strong>First Name</strong>
          <small>{{ user.first_name }}</small>
        </div>
        <div>
          <strong>Last Name</strong>
          <small>{{ user.last_name }}</small>
        </div>
        <div>
          <strong>Email</strong>
          <small>{{ user.email }}</small>
        </div>
        <div>
          <strong>Date Of Birth</strong>
          <small>{{ user.date_of_birth ? user.date_of_birth : 'Nil' }}</small>
        </div>
        <div>
          <strong>Gender</strong>
          <small>{{ user.gender ? user.gender : 'Nil' }}</small>
        </div>
        <div>
          <strong>Country</strong>
          <small>{{ user.country ? user.country : 'Nil' }}</small>
        </div>
        <div>
          <b>State</b>
          <small>{{ user.state ? user.state : 'Nil' }}</small>
        </div>
        <div>
          <strong>City</strong>
          <small>{{ user.city ? user.city : 'Nil' }}</small>
        </div>
        <input
          type="submit"
          value="Edit Profile" />
      </div>
      <hr />
      <h3 id="account_info_head">Account Information</h3>
      <hr />
      <div id="account_info">
        <div>
          <strong>Account Number</strong>
          <small>{{ user.account_number }}</small>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
  import { useUserStore } from '../../stores/UserStore'
  const userStore = useUserStore()
  const { user } = userStore
</script>
<style scoped>
  #profile {
    display: flex;
    gap: 20px;
  }

  #user_profile {
    position: relative;
    width: 200px;
    border-radius: 20px;
    background-color: var(--primary);
  }

  #user_profile > div {
    position: absolute;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #user_profile > div img {
    display: block;
    width: 60px;
    margin: 10px auto;
    margin-bottom: 40px;
  }

  #user_profile > div p {
    text-align: center;
    font-size: 20px;
    white-space: nowrap;
    margin-bottom: 5px;
    color: var(--white);
  }

  #other_info {
    flex-grow: 1;
    margin-top: 80px;
    max-width: 500px;
  }

  #other_info h3 {
    margin: 18px 0;
  }

  #user_info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px 60px;
    justify-content: space-between;
  }

  #account_info {
    display: flex;
    gap: 10px 30px;
  }

  small {
    margin-top: 5px;
    display: block;
    white-space: nowrap;
  }

  input[type='submit'] {
    margin-top: 10px;
    width: 150px;
  }

  @media screen and (max-width: 650px) {
    #profile {
      flex-direction: column;
      row-gap: 20px;
    }

    #user_profile {
      width: 90%;
      margin-top: 15px;
    }

    #user_profile > div {
      position: static;
      transform: none;
      top: auto;
      left: auto;
      display: flex;
      gap: 20px;
      align-items: center;
      height: auto;
    }

    #user_profile > div img {
      margin: 10px 0;
    }

    #other_info {
      margin-top: 10px;
    }
  }
</style>
