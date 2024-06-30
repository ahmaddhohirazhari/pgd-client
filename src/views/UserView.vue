<template>
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
              class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add New User
            </button>
          </div>
          <div class="shadow-md sm:rounded-lg p-5 mb-5 border">
            <!-- <div
              class="flex items-center justify-between my-5 flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900"
            >
              <label for="table-search" class="sr-only">Search</label>
              <div class="relative">
                <div
                  class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search-users"
                  class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for users"
                />
              </div>
            </div> -->
            <table
              class="marginMobile w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">No</th>
                  <th scope="col" class="px-6 py-3">Name</th>
                  <th scope="col" class="px-6 py-3">Email</th>
                  <th scope="col" class="px-7 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(user, index) in users"
                  :key="index"
                  class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td class="px-6 py-1">{{ index + 1 }}</td>

                  <th
                    scope="row"
                    class="px-6 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {{ user.username }}
                  </th>
                  <td class="px-6 py-1">{{ user.email }}</td>
                  <td class="px-6 py-1">
                    <div class="flex gap-3">
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
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
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
      users: [],
      currentPage: 1,
      limit: 5,
      totalPages: 0,
      loading: false
    }
  },
  methods: {
    fetchUsers() {
      const url = import.meta.env.VITE_API_URL_LOCAL
      this.loading = true

      axios
        .get(`${url}/user`)
        .then((res) => {
          console.log(res)
          this.users = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.loading = false // Set loading menjadi false saat pemanggilan AJAX selesai
        })
    },
    deleteUser(userId) {
      const url = import.meta.env.VITE_API_URL_LOCAL
      axios
        .delete(`${url}/user/${userId}`)
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
    maskName(name) {
      return name.replace(/./g, '*') // Mengganti setiap huruf dengan karakter '*'
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
