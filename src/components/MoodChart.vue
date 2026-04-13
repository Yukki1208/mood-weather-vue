<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useMood } from "../composables/useMood"
import Chart from "chart.js/auto"
options: {
  plugins: {
    legend: {
      labels: {
        color: "#fff"
      }
    }
  }
}
const canvas = ref()
const { stats } = useMood()

onMounted(() => {
  new Chart(canvas.value, {
    type: "doughnut",
    data: {
      labels: ["晴", "多云", "阴", "雨", "雷雨"],
      datasets: [{
        data: Object.values(stats.value),
        backgroundColor: [
          "#fbbf24",
          "#94a3b8",
          "#64748b",
          "#38bdf8",
          "#312e81"
        ]
      }]
    }
  })
})
</script>

