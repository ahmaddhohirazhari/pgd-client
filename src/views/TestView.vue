<template>
  <div>tes ini halama tes</div>
  <div>
    <input type="file" id="fileInput" accept=".xlsx" @change="handleFileUpload" />
    <table v-if="excelData.length > 0">
      <thead>
        <tr>
          <th v-for="(value, key) in excelData[0]" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in excelData" :key="index">
          <td v-for="(value, key) in row" :key="key">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import XLSX from 'xlsx'

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
