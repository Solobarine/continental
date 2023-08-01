<template>
  <section id="team">
    <h4>Meet the Team</h4>
    <div id="team_list">
      <div
        :key="teammate"
        v-for="(teammate, id) in team"
        class="team_member">
        <img
          :src="teammate.picture.medium"
          alt="" />
        <small>{{ teammate.name.first }} {{ teammate.name.last }}</small>
        <small>{{ positions[id] }}</small>
      </div>
    </div>
  </section>
</template>
<script setup>
import axios from 'axios'

const response = await axios.get('https://randomuser.me/api/?results=6')

const team = response.data.results
const positions = [
  'CEO',
  'Project Manager',
  'Software Developer',
  'Marketing Strategist',
  'Software Developer',
  'Quality Assurance'
]
console.log(team)
</script>
<style scoped>
h4 {
  margin: 15px 0;
}

#team_list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  max-width: 600px;
  border: 1px solid var(--primary);
  border-radius: 15px;
  padding: 20px;
}

.team_member {
  display: grid;
  width: 150px;
  background-color: var(--faint);
  gap: 5px;
  padding: 15px;
  border-radius: 10px;
}

img {
  display: block;
  margin: auto;
  border-radius: 45%;
}

small {
  display: block;
  text-align: center;
}

small:last-of-type {
  font-weight: 600;
  color: var(--primary);
}

@media screen and (min-width: 650px) {
  #team_list {
    max-width: 100%;
  }
}
</style>
