<template>
  <div>
    <NavbarMenu />
    <SidebarMenu />
    <div class="flex justify-between flex-col gap-[130px] p-4 sm:ml-64">
      <div class="container p-2 mt-1">
        <div class="my-7 mb-5 container flex flex-col justify-center items-center">
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
          <!-- Tabel User -->
          <div v-else>
            <div class="my-5">
              <button
                type="button"
                @click="$router.push(`/user/create`)"
                class="mt-2 text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Add New User
              </button>
            </div>
            <div class="shadow-md sm:rounded-lg p-5 mb-5 border">
              <table
                class="marginMobile w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th scope="col" class="px-2 py-3">No</th>
                    <th scope="col" class="px-2 py-3">Name</th>
                    <th scope="col" class="px-2 py-3">Email</th>
                    <th scope="col" class="px-2 py-3">Phone</th>
                    <th scope="col" class="px-2 py-3">Birth Day</th>
                    <th scope="col" class="px-7 py-3">Address</th>
                    <th scope="col" class="px-7 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(user, index) in users"
                    :key="index"
                    class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td class="px-2 py-1">{{ index + 1 }}</td>

                    <td
                      scope="row"
                      class="px-2 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {{ user.name }}
                    </td>
                    <td class="px-2 py-1">{{ user.email }}</td>
                    <td class="px-2 py-1">{{ user.phone }}</td>
                    <td class="px-2 py-1">
                      {{ formatDate(user.birth_date) }}
                    </td>
                    <td class="px-6 py-1">{{ user.address }}</td>
                    <td class="px-6 py-1">
                      <div class="flex gap-3">
                        <button
                          type="button"
                          @click="$router.push(`/user/${user.id}`)"
                          class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium p-2 rounded-lg text-sm me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Lihat
                        </button>
                        <button
                          type="button"
                          @click="alertDeleteUser(user.id)"
                          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-red-300 font-medium p-2 rounded-lg text-sm me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          @click="alertDeleteUser(user.id)"
                          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium p-2 rounded-lg text-sm me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
import router from '@/router'
import SidebarMenu from '../components/SidebarMenu.vue'
import NavbarMenu from '../components/NavbarMenu.vue'
import { format } from 'date-fns'

export default {
  components: {
    NavbarMenu,
    SidebarMenu
  },

  data() {
    return {
      users: [],
      currentPage: 1,
      limit: 10,
      totalPages: 0,
      loading: false
    }
  },
  methods: {
    fetchUsers() {
      const url = import.meta.env.VITE_API_URL_LOCAL
      this.loading = true

      let token = localStorage.getItem('token')
      if (!token) {
        console.error('Token tidak ditemukan di localStorage')
        return
      }
      token = token.replace(/['"]+/g, '')

      axios
        .get(`${url}/users`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          console.log(res)
          this.users = res.data.data.items
          this.limit = res.data.data.size
          this.totalPages = res.data.data.total_page
          this.currentPage = res.data.data.page
        })
        .catch((err) => {
          console.error('Gagal mengambil data pengguna:', err)
        })
        .finally(() => {
          this.loading = false
        })
    },

    deleteUser(userId) {
      const url = import.meta.env.VITE_API_URL_LOCAL

      let token = localStorage.getItem('token')
      if (!token) {
        console.error('Token tidak ditemukan di localStorage')
        return
      }
      token = token.replace(/['"]+/g, '')
      axios
        .delete(`${url}/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(() => {
          this.fetchUsers()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    alertDeleteUser(userId) {
      Swal.fire({
        title: `Are you sure want to <br> Delete this Account ?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteUser(userId)
          Swal.fire({
            title: 'Deleted!',
            html: `Success Deleted <br> User with ID : ${userId}`,
            icon: 'success'
          })
        }
      })
    },
    formatDate(dateString) {
      // Format tanggal dari format ISO8601 ke dd-mm-yyyy
      const date = new Date(dateString)
      const formattedDate = format(new Date(date), 'dd-MM-yyyy')
      return formattedDate
    }
  },
  mounted() {
    this.fetchUsers()
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
