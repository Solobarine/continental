<template>
  <div :style="element_style" class="theme_element">
    <div :style="bar_style" class="bar"></div>
    <div id="cover">
      <div v-for="index in 3" :key="index">
        <ion-icon
          :style="circle_style"
          class="circle"
          name="ellipse-outline"
        ></ion-icon>
        <div :style="line_style" class="line"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  body_color: String,
  bar_color: String,
  line_color: String,
});

const element_style = computed(() => ({
  "background-color": props.body_color,
}));

const bar_style = computed(() => ({
  width: "90%",
  padding: "15px",
  "border-radius": "10px",
  "background-color": props.bar_color,
  margin: "auto",
  "margin-bottom": "20px",
}));

const line_style = computed(() => ({
  width: "70%",
  padding: "7px",
  "border-radius": "10px",
  "background-color": props.line_color,
}));

const circle_style = computed(() => ({
  "font-size": "20px",
  "border-radius": "50%",
  fill: props.line_color,
  "background-color": props.line_color,
}));
</script>
<style scoped>
.theme_element {
  width: 220px;
  padding: 15px;
}

/* .bar {
  width: 90%;
  padding: 15px;
  border-radius: 10px;
  background-color: green;
  background-color: v-bind(body_color);
  margin: auto;
  margin-bottom: 20px;
} */

#cover > div {
  display: flex;
  margin-bottom: 10px;
  gap: 15px;
}

/* .circle {
  font-size: 20px;
  border-radius: 50%;
}

.line {
  width: 70%;
  padding: 7px;
  border-radius: 10px;
  background-color: red;
} */
</style>
