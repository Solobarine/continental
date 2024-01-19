<template>
  <section id="notification">
    <h3>Notifications</h3>
    <hr />
    <div id="email_notification">
      <div>
        <h4>Email Notifications</h4>
        <small
          >Continental can send you email notifications on news, tips and
          promotions</small
        >
      </div>
      <div>
        <div>
          <div v-if="email_on.value" class="toggle_option">
            <ToggleOn
              :style="email_on.value && 'fill: var(--green)'"
              @click="toggle(email_on)"
            />
            <p>On</p>
          </div>
          <div v-else class="toggle_option">
            <ToggleOff @click="toggle(email_on)" />
            <p else>Off</p>
          </div>
          <div class="email_option">
            <input type="checkbox" name="" id="" />
            <div>
              <h5>News and Updates</h5>
              <small
                >The latest news about the latest features and updates</small
              >
            </div>
          </div>
          <div class="email_option">
            <input type="checkbox" name="" id="" />
            <div>
              <h5>Tips and Tutorials</h5>
              <small>Tips and Tricks to improve your efficiency</small>
            </div>
          </div>
          <div class="email_option">
            <input type="checkbox" name="" id="" />
            <div>
              <h5>Offer and Promotions</h5>
              <small>Be the first to know of discounts and cashbacks</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div id="activity">
      <div>
        <h4>More Activities</h4>
        <small
          >Continental can send you email notifications about upcoming events
          and activities</small
        >
      </div>
      <div>
        <div>
          <div v-if="activity_on.value" class="toggle_option">
            <ToggleOn
              @click="toggle(activity_on)"
              :style="activity_on.value && 'fill: var(--green)'"
            />
            <p>On</p>
          </div>
          <div v-else class="toggle_option">
            <ToggleOff @click="toggle(activity_on)" />
            <p else>Off</p>
          </div>
          <div class="activity_option">
            <input type="checkbox" name="" id="" />
            <div>
              <h5>All Reminders and Activities</h5>
              <small
                >Notify me when any activity and reminder have been
                created</small
              >
            </div>
          </div>
          <div class="activity_option">
            <input type="checkbox" name="" id="" />
            <div>
              <h5>Activities Only</h5>
              <small>Only notify me when new activities are available</small>
            </div>
          </div>
          <div class="activity_option">
            <input type="checkbox" name="" id="" />
            <div>
              <h5>Important Reminders</h5>
              <small>Notify Me only on Important Reminders</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive } from 'vue'
import ToggleOff from '../../icons/ToggleOff.vue'
import ToggleOn from '../../icons/ToggleOn.vue'

const email_on = reactive({ value: false })
const activity_on = reactive({ value: false })

const toggle = state => {
  state.value = !state.value
}
</script>
<style scoped>
#notification {
  padding: 0 0.4em;
}

#notification h3 {
  margin: 10px 0;
}
#email_notification,
#activity {
  display: flex;
  column-gap: 80px;
  flex-wrap: wrap;
}

#email_notification > div:nth-child(1),
#activity > div:nth-child(1) {
  max-width: 300px;
}

#notification svg {
  width: 35px;
}

.toggle_option {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
}

.email_option,
.activity_option {
  padding: 5px;
  display: flex;
  align-items: start;
  gap: 10px;
}

.email_option input,
.activity_option input {
  margin-top: 2px;
  color: red;
}
</style>
