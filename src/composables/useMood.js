import { ref, computed } from "vue"

const moodList = ref(JSON.parse(localStorage.getItem("moods") || "[]"))

const save = () => {
  localStorage.setItem("moods", JSON.stringify(moodList.value))
}

export function useMood() {

  const addMood = (mood) => {
    const today = new Date().toISOString().slice(0, 10)

    moodList.value = moodList.value.filter(i => i.date !== today)

    moodList.value.push({
      date: today,
      mood
    })

    save()
  }

  const currentMood = computed(() => {
    return moodList.value[moodList.value.length - 1]?.mood || "sunny"
  })

  return {
    moodList,
    addMood,
    currentMood
  }
}
