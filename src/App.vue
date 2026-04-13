<template>
  <IntroScreen />

  <CloudLayer />

  <RainEffect v-if="mood === 'rainy'" />

  <Lightning v-if="mood === 'storm'" />

  <WeatherBackground :mood="mood" />

  <MoodSelector />
  <MoodChart />
  <MoodCalendar />
</template>

<script setup>
import { ref } from 'vue'

import IntroScreen from './components/IntroScreen.vue'
import CloudLayer from './components/CloudLayer.vue'
import RainEffect from './components/RainEffect.vue'
import Lightning from './components/Lightning.vue'

import WeatherBackground from './components/WeatherBackground.vue'
import MoodSelector from './components/MoodSelector.vue'
import MoodChart from './components/MoodChart.vue'
import MoodCalendar from './components/MoodCalendar.vue'

const mood = ref('sunny')
</script>
