<script setup>
import { useMood } from "../composables/useMood"

const { addMood } = useMood()

const select = (mood) => {
  addMood(mood)   // ⭐关键
}
</script>
