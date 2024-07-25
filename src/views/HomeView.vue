<!-- eslint-disable no-unused-vars -->
<template>
  <NavbarMenu />
  <SidebarMenu />
  <div class="flex justify-between flex-col gap-[130px] p-4 sm:ml-64">
    <!-- <router-view class="mt-[150px]" /> -->
    <div class="pe-11">
      <div class="flex justify-between">
        <div class="flex justify-center items-center my-5">
          <p class="font-bold text-black-500 text-xl bg-green-500 p-2 text-white rounded-lg">
            Analytics Dashboard
          </p>
        </div>
        <div class="my-5">
          <button
            @click="refreshPage"
            class="btn shadow-md bg-green-500 p-2 rounded text-zinc-300 font-bold"
          >
            Refresh Data
          </button>
        </div>
      </div>
      <div class="p-11 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-5">
        <div class="grid grid-cols-3 gap-4 mb-4"></div>

        <div class="grid grid-cols-2 gap-4 mt-10">
          <div
            class="flex flex-col items-center border justify-center rounded bg-gray-50 h-56"
            style="border-color: #d35a51"
          >
            <div>
              <p class="text-sm font-bold text-grey-700">Total Penjualan Barang</p>
            </div>
            <div class="flex justify-center items-center">
              <p class="text-2xl fw-boldz" style="color: #d35a51">0 Barang</p>
            </div>
          </div>
          <div
            class="flex flex-col items-center border justify-center rounded bg-gray-50 h-56"
            style="border-color: #4cc790"
          >
            <div>
              <p class="text-sm font-bold text-grey-700">Jumlah Customer</p>
            </div>
            <div class="flex justify-center items-center">
              <p
                class="text-2xl text-green-500 dark:text-green-500 fw-boldz"
                style="color: #4cc790"
              >
                {{ totalSuccessDaily }} Customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '../components/SidebarMenu.vue'
import NavbarMenu from '../components/NavbarMenu.vue'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  components: {
    NavbarMenu,
    SidebarMenu
  },
  data() {
    return {
      totalOflineDaily: 0,
      totalOflineMonthly: 0,
      totalSuccessDaily: 0,
      totalSuccessPercent: 0,
      totalFailedDaily: 0,
      totalFailedPercent: 0,
      totalSuccessMonthly: 0,
      dashValue: 0,
      dashValueFailed: 0,
      loading: false,
      imageUrl: './assets/Logo-ITT-PLN.png'
    }
  },
  methods: {
    async getOfflineToday() {
      const url = import.meta.env.VITE_API_URL_LOCAL
      try {
        const response = await axios.get(`${url}/target/count-data/daily`)
        const responseDaily = await axios.get(`${url}/target/count-success/daily`)

        this.totalOflineDaily = response.data.data.data.count
        this.totalSuccessDaily = responseDaily.data.data.data.count
        this.totalSuccessPercent = ((this.totalSuccessDaily / this.totalOflineDaily) * 100).toFixed(
          1
        )
        this.totalFailedDaily = this.totalOflineDaily - this.totalSuccessDaily
        this.totalFailedPercent = ((this.totalFailedDaily / this.totalOflineDaily) * 100).toFixed(1)

        return {
          totalOflineDaily: this.totalOflineDaily,
          totalSuccessDaily: this.totalSuccessDaily,
          totalFailedDaily: this.totalFailedDaily,
          totalFailedPercent: this.totalFailedPercent,
          totalSuccessPercent: this.totalSuccessPercent
        }
      } catch (error) {
        console.error('Error:', error)
      }
    },

    async getOfflineMonthly() {
      // this.loading = true
      const url = import.meta.env.VITE_API_URL_LOCAL
      try {
        const response = await axios.get(`${url}/target/count-data/monthly`)
        return (this.totalOflineMonthly = response.data.data.data.count)
      } catch (error) {
        console.error('Error:', error)
      }
    },
    async getSuccessMonthly() {
      // this.loading = true
      const url = import.meta.env.VITE_API_URL_LOCAL
      try {
        const response = await axios.get(`${url}/target/count-success/monthly`)
        return (this.totalSuccessMonthly = response.data.data.data.count)
      } catch (error) {
        console.error('Error:', error)
      }
    },

    showLoading() {
      Swal.fire({
        title: 'Tunggu sebentar...',
        html: '<div class="spinner-border" role="status"></div> Sedang mengambil data terbaru...',
        didOpen: () => {
          Swal.showLoading()
        },
        allowOutsideClick: false
      })
    },
    refreshPage() {
      this.showLoading()
      setTimeout(() => {
        window.location.reload()
      }, 500)
    }
  },
  mounted() {
    this.getOfflineToday()
    this.getOfflineMonthly()
  }
}
</script>

<style scoped>
.single-chart {
  width: 33%;
  justify-content: space-around;
}

.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.circular-chart.red .circle {
  stroke: #d35a51;
}

.circular-chart.green .circle {
  stroke: #4cc790;
}

.circular-chart.blue .circle {
  stroke: #3c9ee5;
}

.percentage {
  fill: #666;
  font-family: sans-serif;
  font-size: 0.5em;
  text-anchor: middle;
}

.fw-boldz {
  font-weight: 700;
}
</style>
