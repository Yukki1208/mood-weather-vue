<template>
  <div class="clouds"></div>
</template>

<style scoped>
.clouds {
  position: fixed;
  inset: 0;
  background: url('https://images.unsplash.com/photo-1501973801540-537f08ccae7b') repeat-x;
  opacity: 0.15;
  animation: move 60s linear infinite;
  pointer-events: none;
}

@keyframes move {
  from { background-position-x: 0; }
  to { background-position-x: 2000px; }
}
</style>
