<template>
  <div class="app">
    <GlobalNav />
    <ProjectNav />
    <Nuxt />
  </div>
</template>

<style>
:root {
    --font-color: #ccc;
    --link-color: #61a5e4;
    --site-dark-bg: #222931;
    --content-bg: #2d3742;
    --shadow-color: rgba(0, 0, 0, 0.4);
}

body {
    background-color: var(--content-bg);
    color: var(--font-color);
    font-family: "Noto Sans", "Lucida Grande", "Lucida Sans", "Segoe UI", sans-serif;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

.app {
    height: 100vh;
    display: flex;
    flex-direction: row;
}

.app > main {
    padding: 1em;
}

</style>
