<template>
  <div v-if="transfers.length !== 0">
    <div :key="transfer.id" v-for="transfer in transfers" id="transaction">
      <div>
        <img src="/src/assets/female_user.png" alt="transfer.user.first_name" />
        <div>
          <p>{{ transfer.first_name }} {{ transfer.last_name }}</p>
          <small>{{
            formatDistance(transfer.created_at, new Date(), { addSuffix: true })
          }}</small>
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
      <small id="green" v-if="transfer.payee_id === user_id"
        >${{ transfer.amount }}</small
      >
      <small v-else id="red">-${{ transfer.amount }}</small>
    </div>
  </div>
  <p v-else id="not_found">No Transfers Found</p>
</template>
<script setup>
import { useTransferStore } from '../../stores/TransferStore'
import { useUserStore } from '../../stores/UserStore'
import { formatDistance } from 'date-fns'

await useTransferStore().getTransfers()
const transfers = useTransferStore().transfers
const user_id = useUserStore().user.id
console.log(user_id)
const props = defineProps({
  name: String,
  status: String,
  date: Date,
  amount: Number,
})
</script>
<style scoped>
#transaction {
  display: flex;
  max-width: 40em;
  justify-content: space-between;
  align-items: center;
  padding: 12px 3px;
  margin-bottom: 5px;
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

#green {
  color: var(--green);
  font-weight: 700;
}

#red {
  color: var(--red);
  font-weight: 700;
}
</style>
