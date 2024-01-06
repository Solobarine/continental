<template>
  <div id="landing">
    <div id="landing_details">
      <div class="socials">
        <a href="#"><ion-icon name="logo-google"></ion-icon></a>
        <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
        <a href="#"><ion-icon name="logo-vimeo"></ion-icon></a>
        <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
        <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
      </div>
      <div>
        <h1>
          Simple way to manage <br />
          your money
        </h1>
        <sub>Welcome to the Continental, the next generation Bank for all your needs.</sub>
        <sub>Enjoy seamless cash transactions and shorter waiting times</sub>

        <router-link
          id="started"
          to="/register"
          >Get Started</router-link
        >
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
      </div>
    </div>
    <div id="sponsors">
      <img
        src="/src/assets/sponsors/barclays.svg"
        alt="Barclays" />
      <img
        src="/src/assets/sponsors/capital-one.svg"
        alt="Capital One" />
      <img
        src="/src/assets/sponsors/coinbase.svg"
        alt="CoinBase" />
      <img
        src="/src/assets/sponsors/chase.svg"
        alt="Chase" />
      <img
        src="/src/assets/sponsors/champion.svg"
        alt="Champion" />
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
  #landing {
    background-image: url('/landing.png'), url('/R.jpg');
    background-repeat: no-repeat, no-repeat;
    background-size: contain, cover;
    background-position-x: right, 50%;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
  }
  .socials ion-icon {
    color: var(--primary);
    font-size: 18px;
  }

  #landing_details {
    display: flex;
    gap: 1em;
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
    max-width: 800px;
    gap: 0.5em 2.5em;
    justify-content: space-between;
    padding-left: clamp(1em, 1em + 1vh, 5em);
    margin-top: 20px;
  }

  #sponsors img {
    height: 20px;
    margin: auto;
  }

  #sponsors img:nth-child(2) {
    height: 40px;
  }

  @media screen and (max-width: 900px) {
    #landing {
      background-image: url('/R.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: 50%;
    }

    h1 {
      font-size: 25px;
      margin-bottom: 35px;
    }

    #started {
      margin: 20px 0;
    }
  }
</style>
