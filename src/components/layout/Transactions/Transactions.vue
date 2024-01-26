<template>
  <section id="transaction_section">
    <div id="transfers">
      <h3>Transfer History</h3>
      <hr />
      <div>
        <Suspense>
          <template #default>
            <Transfer />
          </template>
          <template #fallback>
            <Loading />
          </template>
        </Suspense>
      </div>
    </div>
    <div id="deposits">
      <h3>Deposit History</h3>
      <hr />
      <div>
        <Suspense>
          <template #default>
            <Deposit />
          </template>
          <template #fallback>
            <Loading />
          </template>
        </Suspense>
      </div>
    </div>
  </section>
</template>
<script setup>
import Deposit from '../../reusables/Deposit.vue'
import Transfer from '../../reusables/Transfer.vue'
</script>
<style scoped>
#transaction_section {
  display: flex;
  align-items: start;
  gap: 30px;
  flex-wrap: wrap;
  padding: 0 20px;
}

#transaction_section > div {
  flex-grow: 1;
  padding: 10px;
  border-radius: 20px;
  margin: 20px 0;
  border: 1px solid var(--faint);
  min-height: 7em;
  max-width: 35em;
}

h3 {
  padding: 10px 0;
}

hr {
  margin-bottom: 10px;
  border-top: 1px solid var(--faint);
}

#transfers > div,
#deposits > div {
  position: relative;
  min-height: 5em;
  max-height: 75vh;
  overflow-y: auto;
}
</style>
