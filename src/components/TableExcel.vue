<template lang="">
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
          <td v-for="(value, key) in row" :key="key" class="border text-center px-4 py-2">
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
import * as XLSX from 'xlsx'
import router from '@/router'
export default {
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
    async importFile() {
      this.isLoading = true
      try {
        const url = import.meta.env.VITE_API_URL_LOCAL

        const response = await axios.post(`${url}/target/import`, this.excelData)
        this.isLoading = false
        console.log('Data uploaded successfully:', response.data)
      } catch (error) {
        console.error('Error uploading data:', error)
        this.isLoading = false
      }
    }
  },
  mounted() {
    this.fetchProducts()
    this.$router = router
  }
}
</script>
<style lang=""></style>
