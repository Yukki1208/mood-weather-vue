<template>
  <div class="grid">
    <div
      v-for="item in moodList"
      :key="item.date"
      class="day"
    >
      {{ item.date.slice(8,10) }}
    </div>
  </div>
</template>

<script setup>
import { useMood } from "../composables/useMood"

const { moodList } = useMood()
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 20px;
}

.day {
  height: 40px;
  border-radius: 10px;
  background: rgba(255,255,255,0.2);
  text-align: center;
  line-height: 40px;
}
</style>
.day {
  transition: 0.3s;
  cursor: pointer;
}

.day:hover {
  transform: scale(1.2);
  background: rgba(255,255,255,0.4);
}
