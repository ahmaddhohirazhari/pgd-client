<template>
  <div>
    <div v-if="excelData.length > 0" class="overflow-x-auto mt-4">
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-gray-200">
            <th v-for="(value, key) in excelData[0]" :key="key" class="px-4 py-2">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in excelData" :key="index">
            <td v-for="(value, key) in row" :key="key" class="border px-4 py-2">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import * as XLSX from 'xlsx';

export default {
  data() {
    return {
      excelData: []
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
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
    }
  }
}
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika diperlukan */
</style>
