<template>
  <div class="rain">
    <span v-for="n in 80" :key="n" class="drop"></span>
  </div>
</template>

<style scoped>
.rain {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.drop {
  position: absolute;
  width: 2px;
  height: 20px;
  background: rgba(255,255,255,0.4);
  bottom: 100%;
  animation: fall linear infinite;
}

.drop:nth-child(n) {
  left: calc(var(--i) * 1%);
  animation-duration: calc(0.5s + var(--i) * 0.02s);
}

@keyframes fall {
  to {
    transform: translateY(100vh);
  }
}
</style>
