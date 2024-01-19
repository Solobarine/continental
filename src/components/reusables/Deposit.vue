<template>
  <div v-if="deposits.length !== 0">
    <div :key="deposit.id" v-for="deposit in deposits" class="deposit_log">
      <div>
        <img src="/src/assets/male_user.png" alt="deposit.user.first_name" />
        <div>
          <small class="name"
            >{{ useUserStore().user.first_name }}
            {{ useUserStore().user.last_name }}</small
          >
          <small class="date">{{
            formatDistance(deposit.created_at, new Date(), { addSuffix: true })
          }}</small>
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
  <p v-else id="not_found">No Deposits Found</p>
</template>
<script setup>
import { useDepositStore } from '../../stores/DepositStore'
import { useUserStore } from '../../stores/UserStore'
import { formatDistance } from 'date-fns'

await useDepositStore().getDeposits()
const deposits = useDepositStore().deposits
</script>
<style scoped>
.deposit_log {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 40em;
  row-gap: 20px;
  padding: 10px;
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
  background-color: rgb(165, 231, 209);
  color: var(--green);
  padding: 8px;
  border-radius: 12px;
}

.status_failed {
  background-color: rgb(231, 165, 165);
  color: var(--red);
  padding: 8px;
  border-radius: 12px;
}

.status_pending {
  background-color: rgb(231, 205, 165);
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
</style>
