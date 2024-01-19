<template>
  <section id="dashboard">
    <div id="dash">
      <h1>Dashboard</h1>
      <div id="details">
        <div class="account_details">
          <div>
            <p>Balance</p>
            <arrow-up-right />
          </div>
          <p>$ {{ user.balance ? user.balance : 0 }}</p>
        </div>
        <div class="account_details">
          <div>
            <p>Account Number</p>
            <arrow-up-right />
          </div>
          <p>{{ user.account_number }}</p>
        </div>
        <div class="account_details">
          <div>
            <p>Email</p>
            <arrow-up-right />
          </div>
          <p>{{ user.email }}</p>
        </div>
      </div>
      <div id="recents_section">
        <hr />
        <h3>Recent Transactions</h3>
        <hr />
        <div id="recents">
          <Suspense>
            <template #default>
              <recent-transactions />
            </template>
            <template #fallback>
              <loading />
            </template>
          </Suspense>
        </div>
      </div>
    </div>
    <div id="wallet" :class="{ active: showWallet }">
      <ion-icon
        @click="toggleWallet"
        onblur="toggleWallet"
        name="grid"
        class="toggle_wallet"
        :class="{ active: showWallet }"
      ></ion-icon>
      <p class="quick">My Wallet</p>
      <Card :first_name="user.first_name" :last_name="user.last_name" />
      <div id="quick_transfer">
        <p class="quick">Quick Transfer</p>
        <form>
          <input
            type="number"
            name="amount"
            id="amount"
            v-model="payload.amount"
            placeholder="Enter Amount"
          />
          <input
            type="number"
            name="receiver"
            id="receiver"
            v-model="account_no"
            placeholder="Receiver Account Number"
            @input="getReceiver"
          />
          <p v-if="error" id="error">
            {{ error }}
          </p>
          <p v-if="success" id="success">
            {{ success.first_name }} {{ success.last_name }}
          </p>
          <input
            :disabled="!payload.payee_id"
            @click="
              e => {
                e.preventDefault()
                console.log('click')

                const res = useTransferStore().makeTransfer(payload)
                console.log(res)
              }
            "
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  </section>
</template>
<script setup>
import ArrowUpRight from '../icons/ArrowUpRight.vue'
import Card from '../reusables/Card.vue'
import RecentTransactions from './RecentTransactions.vue'
import Loading from '../reusables/Loading.vue'
import { useUserStore } from '../../stores/UserStore'
import { useTransferStore } from '../../stores/TransferStore'
import { ref } from 'vue'

await useUserStore().getUser()

const userStore = useUserStore()
const { user, transactions } = userStore
console.log(transactions)
const account_no = ref('')
let error = ref('')
let success = ref('')
let value = ref(null)
const showWallet = ref(false)

const toggleWallet = () => {
  showWallet.value = !showWallet.value
}

const payload = {
  amount: '',
  account_number: '',
  user_id: user.id,
  payee_id: '',
  description: '',
}

const getReceiver = async () => {
  if (payload.payee_id) payload.payee_id = ''
  if (account_no.value.toString().length === 10) {
    error.value = ''
    success.value = {}
    value = await useUserStore().getReceiver({
      account_number: account_no.value,
    })
    if (value.status === 200) {
      success.value = value.data
      payload.payee_id = value.data.id
      payload.account_number = account_no.value
      console.log(payload)
    } else {
      error.value = value.response.data.message
    }
  }
}
</script>
<style scoped>
#dashboard {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

#dashboard .arrow {
  padding: 10px;
  width: 30px;
  background-color: var(--primary);
  border-radius: 8px;
  fill: var(--white);
}

#dash {
  flex-grow: 1;
}

h1 {
  margin: 20px 0;
  font-size: 20px;
}

#details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  padding: 1em;
  gap: 30px;
  flex-wrap: wrap;
}

.account_details {
  padding: 20px 10px;
  border-radius: 15px;
  background-color: var(--faint);
}

.account_details div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}

.account_details > p {
  font-size: 18px;
}

.account_details > p:last-child {
  font-weight: 500;
}

#recents_section {
  margin-top: 30px;
}

#recents_section h3 {
  padding: 10px;
}

#recents {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
}

#recent_transfers,
#recent_deposits {
  padding: 10px;
  padding-top: 25px;
  min-width: 350px;
  max-width: 400px;
  min-height: 250px;
  background-color: var(--faint);
  border-radius: 20px;
  flex-grow: 1;
}

#recent_transfers small,
#recent_deposits small {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

#recent_transfers div,
#recent_deposits div {
  position: relative;
  height: 100%;
}

#wallet {
  position: relative;
  padding: 10px;
  flex-basis: 300px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: var(--primary);
}

#card {
  margin: auto;
}

.quick {
  margin-top: 30px;
  font-size: 25px;
  color: var(--white);
  margin-bottom: 15px;
}

form {
  gap: 10px;
  margin-top: 5px;
}

input {
  display: block;
  margin: auto;
  margin-bottom: 20px;
}

form input:not([type='submit']) {
  width: 250px;
  display: block;
  padding: 8px;
  border: 1px solid var(--faint);
  outline: none;
}

#error,
#success {
  text-align: center;
  color: var(--faint);
  margin-bottom: 15px;
}

input[type='submit']:disabled {
  opacity: 0.7;
}

.toggle_wallet {
  display: none;
}

@media screen and (max-width: 750px) {
  #dashboard {
    flex-wrap: wrap;
  }

  #recents {
    margin-top: 20px;
  }

  #wallet {
    min-width: 15em;
    position: fixed;
    right: -18em;
    top: 60px;
    height: 100dvh;
    border-radius: 20px;
    margin-bottom: 15px;
    transition: 500ms ease-in;
  }

  #wallet.active {
    right: 0;
  }

  .toggle_wallet {
    display: block;
    position: fixed;
    right: 0.4em;
    color: var(--primary);
    font-size: 2em;
    visibility: visible;
    transition: 500ms ease-in;
  }

  .toggle_wallet.active {
    position: absolute;
    color: var(--faint);
    right: 0.4em;
    z-index: 30;
  }

  .quick {
    text-align: center;
  }
}
</style>
