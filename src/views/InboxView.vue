<template>
  <div
    class="font-[sans-serif] from-purple-900 via-purple-800 to-purple-600 text-[#333]"
  >
    <div>ini halaman inbox</div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const isLoading = ref(false)

    return {
      isLoading
    }
  }
}
</script>
