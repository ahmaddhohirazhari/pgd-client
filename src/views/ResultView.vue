<template>
  <NavbarMenu />
  <SidebarMenu />
  <div class="flex justify-between flex-col gap-[130px] p-4 sm:ml-64">
    <div class="container p-2">
      <div class="h-screen justifyMobile container flex flex-col justify-start mt-3 items-center">
        <!-- Tabel Produk -->
        <div class="container">
          <div class="flex bg-gray-100 rounded p-3 flex-start mb-[30px] text-medium font-bold">
            Result Modem Check
          </div>

          <div class="relative p-5 border overflow-x-auto shadow-md sm:rounded-lg">
            <div class="relative overflow-x-auto p-5 shadow-md sm:rounded-lg">
              <!-- Search -->
              <div
                class="flex justiy-center sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between"
              >
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"
                  >
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for items"
                    v-model="searchKeyword"
                  />
                </div>

                <form class="">
                  <select
                    id="countries"
                    class="w-[300px] h-[38px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2."
                  >
                    <option selected>Modem Syntax</option>
                    <option value="US">Check Firmware Version</option>
                    <option value="CA">Upgrade (OTA)</option>
                    <option value="FR">Restart Modem Again</option>
                    <option value="DE">Check Signal</option>
                    <option value="DE">Check IP</option>
                    <option value="DE">Check IMEI</option>
                    <option value="DE">Check CCID</option>
                    <option value="DE">Check Network Status</option>
                  </select>
                </form>

                <!-- Button -->
                <!-- <div class="flex gap-2">
                  <button
                    type="button"
                    disabled
                    class="focus:outline-none flex justify-center items-center text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-not-allowed"
                  >
                    <svg
                      fill="#ffffff"
                      width="15px"
                      height="15px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>download</title>
                        <path
                          d="M18.313 13.625h-4.031v-6.594c0-0.563-0.469-1.031-1.031-1.031h-4.031c-0.594 0-1.063 0.469-1.063 1.031v6.594h-4.031c-0.531 0-0.719 0.344-0.313 0.75l6.688 6.656c0.188 0.188 0.438 0.281 0.719 0.281s0.563-0.094 0.75-0.281l6.656-6.656c0.375-0.406 0.25-0.75-0.313-0.75zM0 18.344v7.125c0 0.313 0.156 0.5 0.5 0.5h21.375c0.344 0 0.531-0.188 0.531-0.5v-7.125c0-0.313-0.25-0.531-0.531-0.531h-2.031c-0.281 0-0.531 0.25-0.531 0.531v4.531h-16.25v-4.531c0-0.313-0.219-0.531-0.5-0.531h-2.063c-0.281 0-0.5 0.25-0.5 0.531z"
                        ></path>
                      </g>
                    </svg>
                    XLS
                  </button>
                  <button
                    type="button"
                    class="focus:outline-none flex justify-center items-center text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-not-allowed"
                  >
                    <svg
                      fill="#ffffff"
                      width="15px"
                      height="15px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>download</title>
                        <path
                          d="M18.313 13.625h-4.031v-6.594c0-0.563-0.469-1.031-1.031-1.031h-4.031c-0.594 0-1.063 0.469-1.063 1.031v6.594h-4.031c-0.531 0-0.719 0.344-0.313 0.75l6.688 6.656c0.188 0.188 0.438 0.281 0.719 0.281s0.563-0.094 0.75-0.281l6.656-6.656c0.375-0.406 0.25-0.75-0.313-0.75zM0 18.344v7.125c0 0.313 0.156 0.5 0.5 0.5h21.375c0.344 0 0.531-0.188 0.531-0.5v-7.125c0-0.313-0.25-0.531-0.531-0.531h-2.031c-0.281 0-0.531 0.25-0.531 0.531v4.531h-16.25v-4.531c0-0.313-0.219-0.531-0.5-0.531h-2.063c-0.281 0-0.5 0.25-0.5 0.531z"
                        ></path>
                      </g>
                    </svg>
                    XLSX
                  </button>
                  <button
                    type="button"
                    class="focus:outline-none flex justify-center items-center text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-not-allowed"
                  >
                    <svg
                      fill="#ffffff"
                      width="15px"
                      height="15px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>download</title>
                        <path
                          d="M18.313 13.625h-4.031v-6.594c0-0.563-0.469-1.031-1.031-1.031h-4.031c-0.594 0-1.063 0.469-1.063 1.031v6.594h-4.031c-0.531 0-0.719 0.344-0.313 0.75l6.688 6.656c0.188 0.188 0.438 0.281 0.719 0.281s0.563-0.094 0.75-0.281l6.656-6.656c0.375-0.406 0.25-0.75-0.313-0.75zM0 18.344v7.125c0 0.313 0.156 0.5 0.5 0.5h21.375c0.344 0 0.531-0.188 0.531-0.5v-7.125c0-0.313-0.25-0.531-0.531-0.531h-2.031c-0.281 0-0.531 0.25-0.531 0.531v4.531h-16.25v-4.531c0-0.313-0.219-0.531-0.5-0.531h-2.063c-0.281 0-0.5 0.25-0.5 0.531z"
                        ></path>
                      </g>
                    </svg>
                    CSV
                  </button>
                </div> -->
              </div>
            </div>
            <!-- Tambahkan spinner di sini -->
            <div v-if="loading" class="h-64 flex justify-center items-center">
              <div class="text-center">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
            <div v-else>
              <div v-if="ExcelResult && ExcelResult[0]">
                <!-- Table -->
                <div class="overflow-x-auto mt-4">
                  <table class="table-auto w-full">
                    <thead>
                      <tr class="bg-gray-200">
                        <th v-if="ExcelResult && ExcelResult[0]" class="">No</th>
                        <th v-if="ExcelResult && ExcelResult[0]" class="">Status</th>
                        <th v-for="(value, key) in ExcelResult[0]" :key="key" class="">
                          {{ key }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(row, index) in paginatedData" :key="index">
                        <td class="border text-center px-4 py-2">
                          {{ (currentPage - 1) * limit + index + 1 }}
                        </td>
                        <td
                          class="border text-center px-4 py-2"
                          :style="{
                            color:
                              statusModem && statusModem[index]
                                ? statusModem[index].message === '+RESET:OK'
                                  ? 'green'
                                  : statusModem[index].message === 'Modem No Respon'
                                    ? 'red'
                                    : 'blue'
                                : 'blue',
                            'font-weight': 'bold'
                          }"
                        >
                          {{
                            statusModem && statusModem[0]
                              ? statusModem[index].message
                              : 'Loading...'
                          }}
                        </td>
                        <td
                          v-for="(value, key) in row"
                          :key="key"
                          class="border text-center p-3 min-w-10"
                        >
                          {{ value }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div v-else class="h-64 flex justify-center items-center">Tidak Ada Data</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '@/router'
import SidebarMenu from '../components/SidebarMenu.vue'
import NavbarMenu from '../components/NavbarMenu.vue'

export default {
  components: {
    NavbarMenu, // Daftarkan komponen NavbarMenu
    SidebarMenu // Daftarkan komponen SidebarMenu
  },
  data() {
    return {
      ExcelResult: [],
      currentPage: 1,
      limit: 50, // Number of items per page
      totalPages: 1,
      statusModem: [],
      searchKeyword: '',
      loading: false,
      loadingStatus: false
    }
  },
  computed: {
    visiblePages() {
      const visiblePages = []
      const totalPages = this.totalPages
      const maxVisible = 5 // Maximum number of visible pages
      let startPage = Math.max(1, this.currentPage - Math.floor(maxVisible / 2))
      let endPage = Math.min(totalPages, startPage + maxVisible - 1)

      if (endPage - startPage < maxVisible - 1) {
        startPage = Math.max(1, endPage - maxVisible + 1)
      }

      for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i)
      }

      return visiblePages
    },
    paginatedData() {
      return this.ExcelResult
    },
    filteredData() {
      if (!this.searchKeyword) {
        return this.ExcelResult
      } else {
        return this.ExcelResult.filter((row) => {
          return Object.values(row).some((value) => {
            return value.toString().toLowerCase().includes(this.searchKeyword.toLowerCase())
          })
        })
      }
    }
  },
  methods: {
    async reloadInbox() {
      const url = import.meta.env.VITE_API_URL_LOCAL
      try {
        await axios.post(`${url}/target/store-message`)
        this.getStatus()
      } catch (error) {
        console.error('Error:', error)
      }
    },
    async getStatus() {
      this.loadingStatus = true
      const url = import.meta.env.VITE_API_URL_LOCAL
      try {
        const response = await axios.get(`${url}/target/get-status`)
        this.statusModem = response.data
        console.log(response.data)
      } catch (error) {
        console.error('Error:', error)
        this.loadingStatus = false
      }
    },
    async getAllData() {
      this.loading = true
      const url = import.meta.env.VITE_API_URL_LOCAL
      try {
        const response = await axios.get(`${url}/target`, {
          params: {
            page: this.currentPage,
            limit: this.limit
          }
        })
        this.ExcelResult = response.data.data.data
        this.totalPages = response.data.totalPages
        this.loading = false
      } catch (error) {
        console.error('Error:', error)
        this.loading = false
      }
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--
        this.getAllData()
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        this.getAllData()
      }
    },
    goToPage(page) {
      this.currentPage = page
      this.getAllData()
    }
  },
  mounted() {
    // this.getStatus()
    this.getAllData()
    this.reloadInbox()
    this.$router = router
  }
}
</script>

<style scoped>
@media screen and (max-width: 640px) {
  .justifyMobile {
    justify-content: start;
    margin-top: 100px;
  }
  .marginMobile {
    margin-left: 430px;
  }
  .text-action {
    text-align: start !important;
  }
}
</style>
