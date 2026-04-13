<template>
  <div v-if="show" class="intro">
    <div class="title">Emotion Weather</div>
    <div class="subtitle">Feel your mood like weather</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const show = ref(true)

onMounted(() => {
  setTimeout(() => {
    show.value = false
  }, 2500)
})
</script>

<style scoped>
.intro {
  position: fixed;
  inset: 0;
  background: radial-gradient(circle, #1e1b4b, #0f172a);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeOut 2.5s ease forwards;
  z-index: 999;
}

.title {
  font-size: 42px;
  color: white;
  letter-spacing: 2px;
  animation: float 2s ease;
}

.subtitle {
  color: #94a3b8;
  margin-top: 10px;
}

@keyframes float {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes fadeOut {
  0% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; visibility: hidden; }
}
</style>
