<template>
  <div id="recent_transfers">
    <h4>Recent Transfers</h4>
    <div>
      <div v-if="transfers.length !== 0">
        <div
          :key="transfer.id"
          v-for="transfer in transfers"
          id="transaction">
          <div>
            <img
              src="/src/assets/female_user.png"
              alt="transfer.user.first_name" />
            <div>
              <p>{{ transfer.first_name }}</p>
              <small>{{ convertDate(transfer.created_at) }}</small>
            </div>
          </div>
          <small
            :class="
              transfer.status === 'completed'
                ? 'status_completed'
                : transfer.status === 'failed'
                ? 'status_failed'
                : 'status_pending'
            "
            >{{ transfer.status }}</small
          >
          <small
            id="green"
            v-if="transfer.payee_id === user_id"
            >${{ transfer.amount }}</small
          >
          <small
            v-else
            id="red"
            >-${{ transfer.amount }}</small
          >
        </div>
      </div>
      <small v-else>No Transfers, Make the first one</small>
    </div>
  </div>
  <div id="recent_deposits">
    <h4>Recent Deposits</h4>
    <div>
      <div v-if="deposits.length !== 0">
        <div
          :key="deposit.id"
          v-for="deposit in deposits"
          class="deposit_log">
          <div>
            <img
              src="/src/assets/male_user.png"
              alt="deposit.user.first_name" />
            <div>
              <small class="name">{{ useUserStore().user.first_name }}</small>
              <small class="date">{{ convertDate(deposit.created_at) }}</small>
            </div>
          </div>
          <small
            :class="
              deposit.status === 'completed'
                ? 'status_completed'
                : deposit_status === 'failed'
                ? 'status_failed'
                : 'status_pending'
            "
            >{{ deposit.status }}</small
          >
          <small class="amount">${{ deposit.amount }}</small>
        </div>
      </div>
      <small v-else>No Deposits, Make the first one</small>
    </div>
  </div>
</template>
<script setup>
  import { useUserStore } from '../../stores/UserStore'
  import convertDate from '../../utils/convertDate'

  const transactions = await useUserStore().recents()
  const user_id = useUserStore().user.id
  console.log(transactions)
  const { deposits, transfers } = transactions
</script>
<style>
  #recent_transfers,
  #recent_deposits {
    flex-grow: 1;
  }

  .deposit_log {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 40em;
    row-gap: 20px;
    padding: 10px;
    transition: 0.4s ease;
  }

  .deposit_log:hover {
    background-color: var(--faint);
  }

  .deposit_log > div {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .deposit_log > div > img {
    width: 35px;
  }

  .deposit_log > div > div {
    display: grid;
    gap: 5px;
  }

  .status_completed {
    color: var(--green);
    padding: 8px;
    border-radius: 12px;
  }

  .status_failed {
    color: var(--red);
    padding: 8px;
    border-radius: 12px;
  }

  .status_pending {
    color: orange;
    padding: 8px;
    border-radius: 12px;
  }

  #not_found {
    color: var(--red);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }

  #transaction {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 3px;
    margin-bottom: 5px;
    transition: 0.4s ease;
  }

  #transaction:hover {
    background-color: var(--faint);
  }

  #transaction > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  #transaction > div p {
    font-size: 0.8rem;
  }

  img {
    width: 35px;
    display: block;
  }

  #not_found {
    color: var(--red);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }

  #green {
    color: var(--green);
    font-weight: 700;
  }

  #red {
    color: var(--red);
    font-weight: 700;
  }
</style>
