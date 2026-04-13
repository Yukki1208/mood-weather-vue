<template>
  <div :class="['app', mood]">
    <div class="glass-card">
      <h1>今天的你是什么天气？</h1>

      <div class="moods">
        <button v-for="m in moods" :key="m.key" @click="selectMood(m.key)">
          {{ m.icon }}
          <span>{{ m.label }}</span>
        </button>
      </div>

      <p class="quote">{{ currentQuote }}</p>
    </div>

    <!-- 日历 -->
    <div class="calendar glass-card">
      <div class="grid">
        <div v-for="day in days" :key="day.date" class="day">
          <span>{{ day.day }}</span>
          <div v-if="day.mood" :class="['dot', day.mood]"></div>
        </div>
      </div>
    </div>

    <!-- 图表 -->
    <div class="chart glass-card">
      <canvas ref="chartRef"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const mood = ref('sunny')
const chartRef = ref(null)

const moods = [
  { key: 'sunny', icon: '☀️', label: '愉悦' },
  { key: 'cloudy', icon: '☁️', label: '平静' },
  { key: 'overcast', icon: '🌥️', label: '低落' },
  { key: 'rain', icon: '🌧️', label: '难过' },
  { key: 'storm', icon: '⛈️', label: '焦虑' }
]

const quotes = {
  sunny: '今天的阳光很好，你也是。',
  cloudy: '平静的日子也有它的温柔。',
  overcast: '低落不是错，是在恢复。',
  rain: '允许自己偶尔下一场雨。',
  storm: '风暴会过去。'
}

const currentQuote = ref('选择一个天气开始')

const selectMood = (m) => {
  mood.value = m
  currentQuote.value = quotes[m]

  const today = new Date().toISOString().split('T')[0]
  localStorage.setItem(today, m)

  loadCalendar()
  renderChart()
}

const days = ref([])

const loadCalendar = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()

  const total = new Date(year, month + 1, 0).getDate()

  const arr = []
  for (let i = 1; i <= total; i++) {
    const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
    arr.push({
      day: i,
      date,
      mood: localStorage.getItem(date)
    })
  }

  days.value = arr
}

const renderChart = () => {
  const counts = {
    sunny: 0,
    cloudy: 0,
    overcast: 0,
    rain: 0,
    storm: 0
  }

  Object.values(localStorage).forEach(v => {
    if (counts[v] !== undefined) counts[v]++
  })

  new Chart(chartRef.value, {
    type: 'doughnut',
    data: {
      labels: Object.keys(counts),
      datasets: [{ data: Object.values(counts) }]
    }
  })
}

onMounted(() => {
  loadCalendar()
  renderChart()
})
</script>

<style>
body, html, #app {
  margin: 0;
  height: 100%;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  transition: 1s;
}

.sunny { background: linear-gradient(#FDE8C4, #F9D7A1); }
.cloudy { background: linear-gradient(#E5E7EB, #D1D5DB); }
.overcast { background: linear-gradient(#CBD5E1, #94A3B8); }
.rain { background: linear-gradient(#BAE6FD, #7DD3FC); }
.storm { background: linear-gradient(#1E1B4B, #312E81); }

.glass-card {
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.2);
  padding: 20px;
  border-radius: 20px;
}

.moods button {
  margin: 10px;
  font-size: 20px;
  border-radius: 15px;
}

.calendar .grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.day {
  text-align: center;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: auto;
}

.sunny .dot { background: orange; }
.cloudy .dot { background: gray; }
.overcast .dot { background: slategray; }
.rain .dot { background: blue; }
.storm .dot { background: purple; }
</style>
