<template>
  <div id="landing">
    <div class="socials">
      <a href="#"><ion-icon name="logo-google"></ion-icon></a>
      <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
      <a href="#"><ion-icon name="logo-vimeo"></ion-icon></a>
      <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
      <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
    </div>
    <div id="landing_details">
      <h1>
        Simple way to manage <br />
        your money
      </h1>
      <sub
        >Welcome to the Continental, the next generation Bank for all your
        needs.</sub
      >
      <sub>Enjoy seamless cash transactions and shorter waiting times</sub>

      <router-link id="started" to="/register">Get Started</router-link>
      <div id="statistics">
        <div>
          <p>10M+</p>
          <small>Active Users</small>
        </div>
        <div>
          <p>10+</p>
          <small>Countries</small>
        </div>
        <div>
          <p>$15+</p>
          <small>Transactions</small>
        </div>
      </div>
      <div id="sponsors">
        <img src="/src/assets/sponsors/barclays.svg" alt="Barclays" />
        <img src="/src/assets/sponsors/capital-one.svg" alt="Capital One" />
        <img src="/src/assets/sponsors/coinbase.svg" alt="CoinBase" />
        <img src="/src/assets/sponsors/chase.svg" alt="Chase" />
        <img src="/src/assets/sponsors/champion.svg" alt="Champion" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#landing {
  display: flex;
  height: calc(100vh - 60px);
  flex-wrap: wrap-reverse;
  gap: 0 1em;
  padding: 0em 0.5em;
  background-repeat: repeat;
  background-size: contain;
  background-position-x: center right;
}

h1 {
  padding-top: 30px;
  margin-bottom: 10px;
  color: var(--primary);
}

sub {
  display: block;
  margin-bottom: 10px;
  color: black;
}

.socials {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 20px;
  flex-grow: 1;
  align-self: center;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
}
.socials ion-icon {
  color: var(--primary);
  font-size: 2em;
}

#landing_details {
  flex-grow: 9999999;
}

#started {
  border-radius: 8px;
  max-width: fit-content;
  display: block;
  padding: 10px;
  margin: 15px 0;
  text-decoration: none;
  color: var(--white);
  background-color: var(--primary);
  transition: 0.4s;
}

#started:hover {
  color: var(--primary);
  background-color: var(--secondary);
}

#statistics {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: fit-content;
  gap: 30px;
}

#statistics div {
  display: grid;
  gap: 8px;
  text-align: center;
}

#statistics p {
  font-size: 20px;
  color: var(--primary);
}

#statistics small {
  color: black;
}

#sponsors {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 1em;
  max-width: 800px;
  justify-content: space-between;
  margin-top: 20px;
}

#sponsors img {
  height: 4em;
  aspect-ratio: 16 / 9;
}

@media screen and (max-width: 900px) {
  #landing {
    background-image: none;
  }
  h1 {
    font-size: 25px;
    margin-bottom: 35px;
  }

  #started {
    margin: 20px 0;
  }

  #landing_details {
    margin-top: 10em;
  }
}
</style>
