import { ref, computed } from "vue"

const moodList = ref(JSON.parse(localStorage.getItem("moods") || "[]"))

export function useMood() {

  const addMood = (mood) => {
    const today = new Date().toISOString().slice(0, 10)

    const newData = { date: today, mood }

    moodList.value = moodList.value.filter(i => i.date !== today)
    moodList.value.push(newData)

    localStorage.setItem("moods", JSON.stringify(moodList.value))
  }

  const currentMood = computed(() => {
    return moodList.value[moodList.value.length - 1]?.mood || "sunny"
  })

  const stats = computed(() => {
    const res = { sunny: 0, cloudy: 0, overcast: 0, rainy: 0, storm: 0 }

    moodList.value.forEach(i => res[i.mood]++)

    return res
  })

  const last7Days = () => moodList.value.slice(-7)

  return {
    moodList,
    addMood,
    currentMood,
    stats,
    last7Days
  }
}
