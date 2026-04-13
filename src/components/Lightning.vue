<template>
  <div :class="['flash', { active }]"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const active = ref(false)

function strike() {
  active.value = true
  setTimeout(() => (active.value = false), 120)
}

onMounted(() => {
  setInterval(() => {
    if (Math.random() > 0.7) {
      strike()
    }
  }, 2000)
})
</script>

<style scoped>
.flash {
  position: fixed;
  inset: 0;
  background: white;
  opacity: 0;
  pointer-events: none;
  transition: 0.1s;
}

.active {
  opacity: 0.8;
}
</style>
