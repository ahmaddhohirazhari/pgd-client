<template>
  <NavbarMenu />
  <SidebarMenu />
  <div class="flex justify-between flex-col gap-[130px] p-4 sm:ml-64">
    <div class="container p-2">
      <div class="h-screen justifyMobile container flex flex-col justify-start mt-3 items-center">
        <!-- Tambahkan spinner di sini -->
        <div v-if="loading">
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
        <!-- Tabel Produk -->
        <div v-else class="container">
          <div class="flex flex-start text-xl font-bold">Modem Check</div>
          <div class="flex gap-4 flex-col">
            <div class="mt-5">
              <div
                class="flex gap-2 flex-col py-3 px-6 border border-gray-200 rounded-lg shadow bg-gray-100"
              >
                <label class="block text-xl font-medium text-gray-900" for="file_input"
                  >Upload file</label
                >
                <input
                  type="file"
                  id="fileInput"
                  accept=".xlsx"
                  @change="handleFileUpload"
                  class="mt-4"
                />
                <!-- <div class="w-2/12 mt-5">
                  <button
                    @click="importFile"
                    type="button"
                    class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                  >
                    Import File
                  </button>
                </div> -->
              </div>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div class="relative overflow-x-auto p-5 border shadow-md sm:rounded-lg">
                <!-- Search -->
                <div
                  class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4"
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
                  <div class="flex gap-5">
                    <button
                      type="button"
                      @click="handleCheck"
                      class="focus:outline-none flex gap-2 justify-center items-center text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                      <div class="flex justify-center items-center gap-1">
                        <svg
                          fill="#ffffff"
                          width="15px"
                          height="15px"
                          viewBox="0 -8 72 72"
                          id="Layer_1"
                          data-name="Layer 1"
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
                            <title>check</title>
                            <path
                              d="M61.07,12.9,57,8.84a2.93,2.93,0,0,0-4.21,0L28.91,32.73,19.2,23A3,3,0,0,0,15,23l-4.06,4.07a2.93,2.93,0,0,0,0,4.21L26.81,47.16a2.84,2.84,0,0,0,2.1.89A2.87,2.87,0,0,0,31,47.16l30.05-30a2.93,2.93,0,0,0,0-4.21Z"
                            ></path>
                          </g>
                        </svg>
                        Check
                      </div>
                    </button>
                    <button
                      type="button"
                      class="text-gray-900 gap-2 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
                    >
                      <svg
                        fill="#000000"
                        width="15px"
                        height="15px"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <title>warning</title>
                          <path
                            d="M30.555 25.219l-12.519-21.436c-1.044-1.044-2.738-1.044-3.782 0l-12.52 21.436c-1.044 1.043-1.044 2.736 0 3.781h28.82c1.046-1.045 1.046-2.738 0.001-3.781zM14.992 11.478c0-0.829 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5v7c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5v-7zM16.501 24.986c-0.828 0-1.5-0.67-1.5-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.83-0.672 1.5-1.5 1.5z"
                          ></path>
                        </g>
                      </svg>
                      Delete Session
                    </button>
                  </div>
                </div>

                <!-- Isi Tabel -->
                <div class="overflow-x-auto mt-4">
                  <table class="table-auto w-full">
                    <thead>
                      <tr class="bg-gray-200">
                        <th v-if="excelData && excelData[0]" class="px-4 py-2">No</th>
                        <th v-for="(value, key) in excelData[0]" :key="key" class="px-4 py-2">
                          {{ key }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(row, index) in filteredData" :key="index">
                        <td class="border text-center px-4 py-2">{{ index + 1 }}</td>
                        <td
                          v-for="(value, key) in row"
                          :key="key"
                          class="border text-center px-4 py-2"
                        >
                          {{ value }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- Paginasi 
              <div class="flex justify-center items-center my-5">
                Paginasi
                <nav aria-label="Page navigation example">
                  <ul class="flex items-center -space-x-px h-8 text-sm">
                    Tombol Sebelumnya
                    <li>
                      <a
                        href="#"
                        @click.prevent="previousPage"
                        :class="{ 'cursor-not-allowed': currentPage === 1 }"
                        class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >Previous
                        <span class="sr-only">Previous</span>
                        Icon Sebelumnya
                      </a>
                    </li>
                    Tombol Nomor Halaman
                    <li v-for="page in visiblePages" :key="page">
                      <a
                        href="#"
                        @click.prevent="goToPage(page)"
                        :class="{
                          'text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700':
                            currentPage === page,
                          'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white':
                            currentPage !== page
                        }"
                        class="flex items-center justify-center px-3 h-8 leading-tight"
                      >
                        {{ currentPage }}
                      </a>
                    </li>
                    Tombol Selanjutnya
                    <li>
                      <a
                        href="#"
                        @click.prevent="nextPage"
                        :class="{ 'cursor-not-allowed': currentPage === totalPages }"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >Next
                        <span class="sr-only"></span>
                        Icon Selanjutnya
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import * as XLSX from 'xlsx'
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
      products: [],
      productID: '',
      currentPage: 1,
      limit: 20,
      totalPages: 0,
      loading: false,
      isLoading: false,
      excelData: [],
      searchKeyword: '',
      selectedFile: null
    }
  },
  computed: {
    visiblePages() {
      const visiblePages = []
      const totalPages = Math.ceil(this.excelData.length / this.limit)
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
    filteredData() {
      return this.excelData.filter((row) => {
        return Object.values(row).some((value) => {
          return value.toString().toLowerCase().includes(this.searchKeyword.toLowerCase())
        })
      })
    }
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--
        this.fetchProducts()
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        this.fetchProducts()
      }
    },
    goToPage(page) {
      this.currentPage = page
      this.fetchProducts()
    },

    alertDeleteProduct(productId) {
      Swal.fire({
        title: `Are you sure want to delete <br> product with ID : ${productId} ?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteProducts(productId)
          Swal.fire({
            title: 'Deleted!',
            html: `Success Deleted <br> Product with ID : ${productId}`,
            icon: 'success'
          })
        }
      })
    },
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        this.searchKeyword = ''
        this.readFile(file)
      }
    },
    readFile(file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })
        const firstSheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[firstSheetName]
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true })
        this.excelData = jsonData
      }
      reader.readAsArrayBuffer(file)
    },
    showLoading() {
      Swal.fire({
        title: 'Tunggu sebentar...',
        html: '<div class="spinner-border" role="status"></div> Sedang mengirim pesan ke modem...',
        didOpen: () => {
          Swal.showLoading()
        },
        allowOutsideClick: false
      })
    },
    async importFile() {
      try {
        const url = import.meta.env.VITE_API_URL_LOCAL

        await axios.post(`${url}/target/import`, this.excelData)
        router.push('/result')
      } catch (error) {
        console.error('Error uploading data:', error)
        this.isLoading = false
      }
    },
    async sendSMS() {
      try {
        const url = import.meta.env.VITE_API_SMS
        const excelData = this.excelData
        let noHP = ''

        for (const row of excelData) {
          const hpNumber = row['SIM Card No'] // Sesuaikan dengan nama kolom nomor HP
          if (hpNumber) {
            noHP += hpNumber + ';'
          }
        }

        // Hapus titik dua di akhir string
        noHP = noHP.slice(0, -1)

        const res = await axios.post(`${url}?msisdn=${noHP}&sms=%23AT%2BRESET`, this.excelData)
        console.log(res)
      } catch (error) {
        console.error('Error uploading data:', error)
        this.isLoading = false
      }
    },
    async handleCheck() {
      this.showLoading()
      await this.importFile()
      await this.sendSMS()
      Swal.close()
    }
  },

  mounted() {
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
