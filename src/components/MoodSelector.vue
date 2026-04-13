<template>
  <div class="box">
    <div
      v-for="m in moods"
      :key="m.value"
      class="item"
      @click="select(m.value)"
    >
      <div class="emoji">{{ m.emoji }}</div>
      <div class="label">{{ m.label }}</div>
    </div>
  </div>
</template>

<script setup>
import { useMood } from "../composables/useMood"

const { addMood } = useMood()

const moods = [
  { value: "sunny", emoji: "☀️", label: "晴" },
  { value: "cloudy", emoji: "⛅", label: "多云" },
  { value: "overcast", emoji: "☁️", label: "阴" },
  { value: "rainy", emoji: "🌧️", label: "雨" },
  { value: "storm", emoji: "⚡", label: "雷雨" }
]

const select = (mood) => {
  addMood(mood)
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  gap: 18px;
  padding: 40px;
}

.item {
  width: 90px;
  height: 90px;
  background: rgba(255,255,255,0.25);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
}

.item:hover {
  transform: scale(1.1);
}

.emoji {
  font-size: 28px;
}
</style>
