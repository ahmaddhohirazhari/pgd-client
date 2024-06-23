<template>
  <div
    class="font-[sans-serif] from-purple-900 via-purple-800 to-purple-600 text-[#333]"
  >
    <div>ini halaman inbox</div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {

  setup() {
    const router = useRouter()

    router.push('/inbox')

    const isLoading = ref(false)
    return {
      isLoading
    }
  }
}
</script>
