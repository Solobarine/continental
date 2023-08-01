<template>
  <footer>
    <div>
      <div id="footer_logo">
        <Logo />
        <p>Continental</p>
      </div>
      <p id="closing">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem, laborum quam illo reiciendis eum fuga
        praesentium, fugit perferendis assumenda deleniti esse qui maxime quis tempore vero nemo veritatis soluta.
      </p>
      <div class="socials">
        <ion-icon
          id="google"
          name="logo-google"></ion-icon>
        <ion-icon
          id="twitter"
          name="logo-twitter"></ion-icon>
        <ion-icon
          id="vimeo"
          name="logo-vimeo"></ion-icon>
        <ion-icon
          id="linkedin"
          name="logo-linkedin"></ion-icon>
      </div>
    </div>
    <div id="company_links">
      <h3>Company</h3>
      <a href="#">About</a>
      <a href="#">Carrers</a>
      <router-link to="/team">Team</router-link>
      <a href="#">FAQ</a>
      <a href="#">Legal</a>
    </div>
    <div id="services_links">
      <h3>Services</h3>
      <a href="#">BlockChain</a>
      <a href="#">Deposits</a>
      <a href="#">Wire Transfer</a>
      <a href="#">Exchange</a>
    </div>
  </footer>
</template>
<script setup lang="ts">
import Logo from '../Logo.vue'
</script>
<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
  padding: 10px 40px;
  background-color: var(--primary);
}

footer * {
  color: var(--white);
  fill: var(--white);
}

#footer_logo {
  display: flex;
  gap: 10px;
  align-items: center;
}

footer .logo {
  width: 40px;
}

footer #closing {
  max-width: 350px;
  font-size: 0.8rem;
  margin: 10px 0;
}

.socials {
  display: flex;
  gap: 15px;
}

.socials ion-icon {
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.4s ease;
}

.socials ion-icon:hover {
  color: var(--green);
}

#company_links #services_links {
  display: flex;
  flex-direction: column;
  align-items: start;
}

#company_links h3,
#services_links h3 {
  margin-bottom: 10px;
}

#company_links a,
#services_links a {
  display: block;
  text-decoration: none;
}
</style>
