<template>
  <div
    class="font-[sans-serif] bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600 text-[#333]"
  >
    <div class="min-h-screen flex fle-col items-center justify-center lg:p-6 p-4">
      <div class="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
        <div class="max-md:text-center">
          <h2 class="text-4xl font-extrabold lg:leading-[50px] text-white">
            Seamless Login for Exclusive Access
          </h2>
          <p class="text-sm mt-6 text-white">
            Immerse yourself in a hassle-free login journey with our intuitively designed login
            form. Effortlessly access your account.
          </p>
        </div>
        <form
          class="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto max-md:mx-auto w-full"
          @submit.prevent="handleLogin"
        >
          <div class="mb-10">
            <h3 class="text-3xl font-extrabold">Sign in</h3>
          </div>
          <div>
            <label class="text-sm mb-2 block">Email Address</label>
            <div class="relative flex items-center">
              <input
                name="email"
                type="email"
                v-model="form.email"
                required
                class="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                placeholder="Enter Your Email"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                class="w-[18px] h-[18px] absolute right-4"
                viewBox="0 0 24 24"
              >
                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                <path
                  d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
          </div>
          <div class="mt-6">
            <label class="text-sm mb-2 block">Password</label>
            <div class="relative flex items-center">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                placeholder="Enter password"
              />
              <svg
                @click="togglePassword"
                :fill="showPassword ? '#000' : '#bbb'"
                :stroke="showPassword ? '#000' : '#bbb'"
                class="w-[18px] h-[18px] absolute right-6 cursor-pointer"
                viewBox="0 0 128 128"
              >
                <template v-if="showPassword">
                  <svg
                    fill="#000000"
                    viewBox="0 0 64 64"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xml:space="preserve"
                    xmlns:serif="http://www.serif.com/"
                    style="
                      fill-rule: evenodd;
                      clip-rule: evenodd;
                      stroke-linejoin: round;
                      stroke-miterlimit: 2;
                    "
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect
                        id="Icons"
                        x="-960"
                        y="-256"
                        width="1280"
                        height="800"
                        style="fill: none"
                      ></rect>
                      <g id="Icons1" serif:id="Icons">
                        <g id="Strike"></g>
                        <g id="H1"></g>
                        <g id="H2"></g>
                        <g id="H3"></g>
                        <g id="list-ul"></g>
                        <g id="hamburger-1"></g>
                        <g id="hamburger-2"></g>
                        <g id="list-ol"></g>
                        <g id="list-task"></g>
                        <g id="trash"></g>
                        <g id="vertical-menu"></g>
                        <g id="horizontal-menu"></g>
                        <g id="sidebar-2"></g>
                        <g id="Pen"></g>
                        <g id="Pen1" serif:id="Pen"></g>
                        <g id="clock"></g>
                        <g id="external-link"></g>
                        <g id="hr"></g>
                        <g id="info"></g>
                        <g id="warning"></g>
                        <g id="plus-circle"></g>
                        <g id="minus-circle"></g>
                        <g id="vue"></g>
                        <g id="cog"></g>
                        <g id="logo"></g>
                        <g id="radio-check"></g>
                        <g id="eye-slash">
                          <path
                            d="M13.673,10.345l-3.097,3.096l39.853,39.854l3.097,-3.097l-39.853,-39.853Z"
                          ></path>
                          <path
                            d="M17.119,19.984l2.915,2.915c-3.191,2.717 -5.732,6.099 -7.374,9.058l-0.005,0.01c4.573,7.646 11.829,14.872 20.987,13.776c2.472,-0.296 4.778,-1.141 6.885,-2.35l2.951,2.95c-4.107,2.636 -8.815,4.032 -13.916,3.342c-9.198,-1.244 -16.719,-8.788 -21.46,-17.648c2.226,-4.479 5.271,-8.764 9.017,-12.053Zm6.63,-4.32c2.572,-1.146 5.355,-1.82 8.327,-1.868c0.165,-0.001 2.124,0.092 3.012,0.238c0.557,0.092 1.112,0.207 1.659,0.35c8.725,2.273 15.189,10.054 19.253,17.653c-1.705,3.443 -3.938,6.398 -6.601,9.277l-2.827,-2.827c1.967,-2.12 3.622,-4.161 4.885,-6.45c0,0 -1.285,-2.361 -2.248,-3.643c-0.619,-0.824 -1.27,-1.624 -1.954,-2.395c-0.54,-0.608 -2.637,-2.673 -3.136,-3.103c-3.348,-2.879 -7.279,-5.138 -11.994,-5.1c-1.826,0.029 -3.582,0.389 -5.249,0.995l-3.127,-3.127Z"
                            style="fill-rule: nonzero"
                          ></path>
                          <path
                            d="M25.054,27.92l2.399,2.398c-0.157,0.477 -0.243,0.987 -0.243,1.516c0,2.672 2.169,4.841 4.841,4.841c0.529,0 1.039,-0.085 1.516,-0.243l2.399,2.399c-1.158,0.65 -2.494,1.02 -3.915,1.02c-4.425,0 -8.017,-3.592 -8.017,-8.017c0,-1.421 0.371,-2.756 1.02,-3.914Zm6.849,-4.101c0.049,-0.001 0.099,-0.002 0.148,-0.002c4.425,0 8.017,3.593 8.017,8.017c0,0.05 0,0.099 -0.001,0.148l-8.164,-8.163Z"
                          ></path>
                        </g>
                        <g id="eye"></g>
                        <g id="toggle-off"></g>
                        <g id="shredder"></g>
                        <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"></g>
                        <g id="react"></g>
                        <g id="check-selected"></g>
                        <g id="turn-off"></g>
                        <g id="code-block"></g>
                        <g id="user"></g>
                        <g id="coffee-bean"></g>
                        <g id="coffee-beans"><g id="coffee-bean1" serif:id="coffee-bean"></g></g>
                        <g id="coffee-bean-filled"></g>
                        <g id="coffee-beans-filled">
                          <g id="coffee-bean2" serif:id="coffee-bean"></g>
                        </g>
                        <g id="clipboard"></g>
                        <g id="clipboard-paste"></g>
                        <g id="clipboard-copy"></g>
                        <g id="Layer1"></g>
                      </g>
                    </g>
                  </svg>
                </template>
                <template v-else>
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  ></path>
                </template>
              </svg>
            </div>
          </div>
          <div class="mt-4 text-right">
            <a
              href="jajvascript:void(0);"
              class="text-blue-600 text-sm font-semibold hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <div class="mt-10">
            <button
              type="submit"
              class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              <p v-if="!isLoading">Log in</p>
              <div v-else>
                Loading &nbsp;
                <i class="fas fa-spinner fa-spin"></i>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
export default {
  setup() {
    const router = useRouter()
    const showPassword = ref(false)
    const isLoading = ref(false)

    const togglePassword = () => {
      showPassword.value = !showPassword.value
    }

    let form = reactive({
      email: '',
      password: ''
    })
    const handleLogin = async () => {
      isLoading.value = true // Mengatur isLoading menjadi true sebelum permintaan dikirim
      const url = 'http://localhost:3001/api/v1/auth'

      try {
        const res = await axios.post(`${url}/login`, form)

        // Simpan data payload ke local storage
        localStorage.setItem('userData', JSON.stringify(res.data))
        localStorage.setItem('token', JSON.stringify(res.data.data.token))
        localStorage.setItem('role', JSON.stringify(res.data.data.payload.role))

        await router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email or Password is wrong!'
        })
        console.error('Error:', error)
      } finally {
        isLoading.value = false // Mengatur isLoading menjadi false setelah permintaan selesai atau gagal
      }
    }

    return {
      showPassword,
      togglePassword,
      handleLogin,
      form,
      isLoading
    }
  }
}
</script>
