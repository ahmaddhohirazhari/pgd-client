<!-- eslint-disable no-unused-vars -->
<template>
  <NavbarMenu />
  <SidebarMenu />
  <div class="flex justify-between flex-col gap-[130px] p-4 sm:ml-64">
    <!-- <router-view class="mt-[150px]" /> -->
    <div class="pe-11">
      <div class="flex justify-between">
        <div class="flex justify-end items-center mt-5 me-3">
          <img
            src="@/assets/Logo-ITT-PLN.png"
            alt="Description of the image"
            class="w-[140px] bg-white"
          />
        </div>
        <div class="flex justify-center items-center my-5">
          <p class="font-bold text-black-500 ">Analytics Dashboard</p>
        </div>
        <div class="my-5">
          <button @click="refreshPage" class="btn bg-teal-500 p-2 rounded text-zinc-300 font-bold">
            Refresh Data
          </button>
        </div>
      </div>
      <div class="p-11 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-5">
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div
            class="flex py-5 items-center flex-col justify-center h-24 border rounded bg-gray-50 dark:bg-gray-800"
            style="height: 200px; border-color: #f7b924"
          >
            <p class="text-sm font-bold text-grey-700">Total Offline Bulan ini</p>
            <div class="flex">
              <img src="/icon-laptop.png" class="h-[150px]" alt="FlowBite Logo" />
              <div class="flex flex-col justify-center items-center">
                <p
                  class="text-black-900 dark:text-black-500"
                  style="font-size: 40px; font-weight: 800; color: #f7b924"
                >
                  {{ totalOflineMonthly }}
                </p>
                <p style="font-size: 20px; font-weight: 600; color: #f7b924">Modem</p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center h-24 rounded bg-white-50">
            <p class="text-2xl text-black-400 dark:text-black-500"></p>
          </div>
          <div
            class="flex py-5 items-center flex-col justify-center h-24 border rounded bg-gray-50 dark:bg-gray-800"
            style="height: 200px; border-color: #16aaff"
          >
            <p class="text-sm font-bold text-grey-700">Restart Modem Hari ini</p>
            <div class="flex">
              <img src="/icon-laptop.png" class="h-[150px]" alt="FlowBite Logo" />
              <div class="flex flex-col justify-center items-center">
                <p
                  class="text-black-900 dark:text-black-500"
                  style="font-size: 40px; font-weight: 800; color: #16aaff"
                >
                  {{ totalOflineDaily }}
                </p>
                <p style="font-size: 20px; font-weight: 600; color: #16aaff">Modem</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-10">
          <div
            class="flex flex-col items-center border justify-center rounded bg-gray-50 h-56"
            style="border-color: #d35a51"
          >
            <div>
              <p class="text-sm font-bold text-grey-700">Restart Modem Hari ini</p>
            </div>
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart red">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="circle"
                  :stroke-dasharray="`${((totalOflineDaily - totalSuccessDaily) / totalOflineDaily) * 100}, 100`"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">
                  {{ totalOflineDaily !== 0 ? totalFailedPercent : 0 }}%
                </text>
              </svg>
            </div>
            <div class="flex justify-center items-center">
              <p class="text-2xl fw-boldz" style="color: #d35a51">
                {{ totalOflineDaily - totalSuccessDaily }} Modem Failed
              </p>
            </div>
          </div>
          <div
            class="flex flex-col items-center border justify-center rounded bg-gray-50 h-56"
            style="border-color: #4cc790"
          >
            <div>
              <p class="text-sm font-bold text-grey-700">Restart Modem Hari ini</p>
            </div>
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart green">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="circle"
                  :stroke-dasharray="`${(totalSuccessDaily / totalOflineDaily) * 100}, 100`"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">
                  {{ totalOflineDaily !== 0 ? totalSuccessPercent : 0 }}%
                </text>
              </svg>
            </div>
            <div class="flex justify-center items-center">
              <p
                class="text-2xl text-green-500 dark:text-green-500 fw-boldz"
                style="color: #4cc790"
              >
                {{ totalSuccessDaily }} Modem Success
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
