<template>
  <section id="theme_section">
    <div>
      <h3>Change Theme</h3>
      <div id="themes">
        <div
          class="theme light_theme"
          @click="select_option(one, 'theme_confirm')"
        >
          <ThemeExample
            bar_color="rgb(65, 1, 1)"
            line_color="#444"
            body_color=""
          />
          <div class="theme_content">
            <p>Light</p>
            <Check ref="one" class="theme_confirm" />
          </div>
        </div>
        <div
          class="theme dark_theme"
          @click="select_option(two, 'theme_confirm')"
        >
          <ThemeExample
            bar_color="#aaa"
            line_color="rgba(255, 255, 255, 0.87)"
            body_color="rgb(65, 1, 1)"
          />
          <div class="theme_content">
            <p>Dark</p>
            <Check ref="two" class="theme_confirm" />
          </div>
        </div>
        <div
          class="theme system_theme"
          @click="select_option(three, 'theme_confirm')"
        >
          <ThemeExample
            bar_color="#aaa"
            line_color="rgba(255, 255, 255, 0.87)"
            body_color="#e0071c"
          />
          <div class="theme_content">
            <p>System</p>
            <Check ref="three" class="theme_confirm" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import select_option from "../../../utils/select_option";
import Check from "../../icons/Check.vue";
import ThemeExample from "./ThemeExample.vue";

const one = ref(null);
const two = ref(null);
const three = ref(null);
</script>
<style scoped>
#theme_section {
  padding: 20px;
}

#theme_section h3 {
  margin-bottom: 10px;
}

#themes {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 30px;
}

.theme {
  width: 220px;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid var(--text);
}

.theme > img {
  display: block;
  height: 120px;
  padding: 10px;
}

.theme > .theme_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--text);
  padding: 6px 12px;
}
.selected {
  opacity: 1;
  scale: 1;
}

.theme .theme_confirm {
  scale: 0;
  opacity: 0;
}

.light_theme .theme_confirm.selected {
  fill: var(--green);
  opacity: 1;
  scale: 1;
}

.dark_theme .theme_confirm.selected {
  fill: var(--primary);
  opacity: 1;
  scale: 1;
}

.system_theme .theme_confirm.selected {
  fill: var(--text);
  opacity: 1;
  scale: 1;
}
</style>
