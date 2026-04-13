<template>
  <div class="app">
    <WeatherBackground :mood="currentMood" />

    <div class="glass-container">
      <h1 class="title">Emotion Weather</h1>
      <p class="subtitle">用天气记录你的情绪</p>

      <MoodSelector />

      <div class="panel">
        <MoodChart />
        <MoodCalendar />
      </div>
    </div>
  </div>
</template>

<script setup>
import WeatherBackground from "./components/WeatherBackground.vue"
import MoodSelector from "./components/MoodSelector.vue"
import MoodChart from "./components/MoodChart.vue"
import MoodCalendar from "./components/MoodCalendar.vue"

import { useMood } from "./composables/useMood"

const { currentMood } = useMood()
</script>

<style scoped>
.app {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.glass-container {
  position: relative;
  z-index: 10;
  padding: 40px;
  text-align: center;
}

.title {
  font-size: 42px;
  font-weight: bold;
  color: white;
}

.subtitle {
  color: rgba(255,255,255,0.8);
  margin-bottom: 30px;
}

.panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
}
</style>
