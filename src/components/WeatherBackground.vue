<template>
  <div :class="['bg', mood]"></div>
</template>

<script setup>
defineProps({ mood: String })
</script>

<style scoped>
.bg {
  position: fixed;
  inset: 0;
  transition: 1.5s ease;
}

/* 晴 */
.sunny {
  background: linear-gradient(120deg, #fde68a, #f59e0b);
}

/* 云 */
.cloudy {
  background: linear-gradient(120deg, #cbd5e1, #94a3b8);
}

/* 阴 */
.overcast {
  background: linear-gradient(120deg, #64748b, #334155);
}

/* 雨 */
.rainy {
  background: linear-gradient(120deg, #38bdf8, #0ea5e9);
}

/* 雷雨 */
.storm {
  background: linear-gradient(120deg, #1e1b4b, #0f172a);
  animation: flash 3s infinite;
}

@keyframes flash {
  0%, 90%, 100% { filter: brightness(1); }
  92% { filter: brightness(2); }
}
</style>
