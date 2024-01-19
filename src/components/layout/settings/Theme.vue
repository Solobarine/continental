<template>
  <section id="theme_section">
    <div>
      <h3>Change Theme</h3>
      <div id="themes">
        <h1>Themes are currently not supported.</h1>
        <h1>Coming Soon</h1>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
#theme_section {
  padding: 20px;
}

#theme_section h3 {
  margin-bottom: 10px;
}

#themes :first-child {
  font-size: 1em;
}

#themes :last-child {
  font-size: 2em;
  color: var(--red);
  text-shadow: aliceblue;
}

#themes {
  display: grid;
  place-content: center;
  min-height: 15em;
}
</style>
