<template>
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-[75px] transition-transform -translate-x-full bg-black border-r border-gray-200 sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-black">
      <div class="flex ms-[10px] text-white justify-start items-center">
        <h2>Main Menu</h2>
      </div>
      <hr class="h-px my-3 bg-gray-200 border-0" />

      <ul class="space-y-2 font-medium">
        <li>
          <router-link
            to="/"
            :class="{ 'bg-blue-500 text-white': $route.path === '/', 'hover:bg-blue': true }"
            class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-black black group"
          >
            <svg
              height="24px"
              width="24px"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#d4d4d4"
              stroke-width="0.00015000000000000001"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z"
                  fill="#bfbfbf"
                ></path>
              </g>
            </svg>
            <span class="ms-3">Dashboard</span>
          </router-link>
        </li>
        <li>
          <button
            type="button"
            :class="{
              'bg-blue-500 text-white': $route.path === '/result' || $route.path === '/modem'
            }"
            class="flex items-center w-full p-2 text-base text-white hover:bg-gray-100 hover:text-black text-whitetransition duration-75 rounded-lg group"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <svg
              fill="#a1a1a1"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="25px"
              height="35px"
              viewBox="0 0 924.14 924.14"
              xml:space="preserve"
              transform="rotate(90)"
              stroke="#a1a1a1"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    d="M350.27,388.938c0.399-50.8-41.5-93.8-92.2-94.8c-52.9-1.101-96.1,41.5-96.1,94.1c0,41.801,27.4,76.801,65,89.101v35.8 c0,22,10.3,42.7,27.9,55.9l181.2,136.5c-46.5,13.399-80.5,56.3-80.5,107.1c0,61.6,49.9,111.5,111.5,111.5 c61.6,0,111.5-49.9,111.5-111.5c0-51.3-34.699-94.5-81.9-107.5v-52.6l166.4-115.601c18.801-13.1,30.1-34.6,30.1-57.5v-49.5h19 c27.602,0,50-22.399,50-50v-81.2c0-27.6-22.398-50-50-50H615.97c-27.6,0-50,22.4-50,50v81.2c0,27.601,22.4,50,50,50h19v55.7 l-138.301,96v-366.3h48.9c35,0,56.6-38.301,38.5-68.301L509.87,24.138c-19.301-32-65.6-32.2-85.3-0.5l-76.2,123 c-18.6,30,3,68.7,38.3,68.7h51.9v419.1l-153.3-115.399v-41.7C322.669,465.138,349.97,430.338,350.27,388.938z"
                  ></path>
                </g>
              </g>
            </svg>
            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Modem</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <ul id="dropdown-example" class="hidden py-2 space-y-2">
            <li>
              <router-link
                to="/modem"
                :class="{
                  'bg-gray-100 text-black': $route.path === '/modem',
                  'text-white': $route.path !== '/modem'
                }"
                class="flex gap-3 justify-start items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-black"
              >
                <div v-if="$route.path === '/modem'">
                  <svg
                    fill="#000000"
                    height="15px"
                    width="15px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 470 470"
                    xml:space="preserve"
                    stroke="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g>
                          <g>
                            <circle cx="85" cy="337" r="10"></circle>
                            <circle cx="135" cy="337" r="10"></circle>
                            <circle cx="185" cy="337" r="10"></circle>
                            <circle cx="235" cy="337" r="10"></circle>
                            <circle cx="285" cy="337" r="10"></circle>
                            <circle cx="335" cy="337" r="10"></circle>
                            <circle cx="385" cy="337" r="10"></circle>
                            <path
                              d="M462.5,279.5h-73.655l40.734-231.016c2.633-14.934-7.374-29.225-22.307-31.857c-14.93-2.64-29.224,7.374-31.858,22.307 l-38.221,216.765c-0.719,4.079,2.005,7.97,6.084,8.688c4.075,0.723,7.969-2.005,8.688-6.083l38.221-216.765 c1.197-6.789,7.692-11.336,14.481-10.141c6.788,1.197,11.336,7.693,10.139,14.48L373.613,279.5H222.5V42 c0-6.893,5.607-12.5,12.5-12.5s12.5,5.607,12.5,12.5v215c0,4.143,3.358,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5V42 c0-15.163-12.336-27.5-27.5-27.5S207.5,26.837,207.5,42v237.5H96.387L55.193,45.879c-1.197-6.787,3.352-13.283,10.139-14.48 c6.792-1.194,13.285,3.353,14.481,10.141l38.221,216.765c0.719,4.079,4.611,6.807,8.688,6.083 c4.079-0.719,6.803-4.609,6.084-8.688L94.586,38.934c-2.633-14.933-16.923-24.945-31.858-22.307 c-14.933,2.633-24.94,16.924-22.307,31.857L81.155,279.5H7.5c-4.142,0-7.5,3.357-7.5,7.5v91c0,23.639,17.36,43.295,40,46.902V448 c0,4.143,3.358,7.5,7.5,7.5h70c4.142,0,7.5-3.357,7.5-7.5v-22.5h220V448c0,4.143,3.358,7.5,7.5,7.5h70c4.142,0,7.5-3.357,7.5-7.5 v-23.098c22.64-3.607,40-23.263,40-46.902v-91C470,282.857,466.642,279.5,462.5,279.5z M110,440.5H55v-15h55V440.5z M415,440.5 h-55v-15h55V440.5z M455,378c0,17.921-14.58,32.5-32.5,32.5h-375C29.58,410.5,15,395.921,15,378v-83.5h440V378z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div v-else>
                  <svg
                    fill="#bfbfbf"
                    height="15px"
                    width="15px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 470 470"
                    xml:space="preserve"
                    stroke="#bfbfbf"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g>
                          <g>
                            <circle cx="85" cy="337" r="10"></circle>
                            <circle cx="135" cy="337" r="10"></circle>
                            <circle cx="185" cy="337" r="10"></circle>
                            <circle cx="235" cy="337" r="10"></circle>
                            <circle cx="285" cy="337" r="10"></circle>
                            <circle cx="335" cy="337" r="10"></circle>
                            <circle cx="385" cy="337" r="10"></circle>
                            <path
                              d="M462.5,279.5h-73.655l40.734-231.016c2.633-14.934-7.374-29.225-22.307-31.857c-14.93-2.64-29.224,7.374-31.858,22.307 l-38.221,216.765c-0.719,4.079,2.005,7.97,6.084,8.688c4.075,0.723,7.969-2.005,8.688-6.083l38.221-216.765 c1.197-6.789,7.692-11.336,14.481-10.141c6.788,1.197,11.336,7.693,10.139,14.48L373.613,279.5H222.5V42 c0-6.893,5.607-12.5,12.5-12.5s12.5,5.607,12.5,12.5v215c0,4.143,3.358,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5V42 c0-15.163-12.336-27.5-27.5-27.5S207.5,26.837,207.5,42v237.5H96.387L55.193,45.879c-1.197-6.787,3.352-13.283,10.139-14.48 c6.792-1.194,13.285,3.353,14.481,10.141l38.221,216.765c0.719,4.079,4.611,6.807,8.688,6.083 c4.079-0.719,6.803-4.609,6.084-8.688L94.586,38.934c-2.633-14.933-16.923-24.945-31.858-22.307 c-14.933,2.633-24.94,16.924-22.307,31.857L81.155,279.5H7.5c-4.142,0-7.5,3.357-7.5,7.5v91c0,23.639,17.36,43.295,40,46.902V448 c0,4.143,3.358,7.5,7.5,7.5h70c4.142,0,7.5-3.357,7.5-7.5v-22.5h220V448c0,4.143,3.358,7.5,7.5,7.5h70c4.142,0,7.5-3.357,7.5-7.5 v-23.098c22.64-3.607,40-23.263,40-46.902v-91C470,282.857,466.642,279.5,462.5,279.5z M110,440.5H55v-15h55V440.5z M415,440.5 h-55v-15h55V440.5z M455,378c0,17.921-14.58,32.5-32.5,32.5h-375C29.58,410.5,15,395.921,15,378v-83.5h440V378z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span> Modem Check </span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/result"
                :class="{
                  'bg-gray-100 text-black': $route.path === '/result',
                  'text-white': $route.path !== '/result'
                }"
                class="flex gap-3 items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-black"
              >
                <div v-if="$route.path === '/result'">
                  <svg
                    fill="#000000"
                    height="15px"
                    width="15px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    stroke="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g>
                          <path
                            d="M256,127.996c-7.074,0-12.8,5.726-12.8,12.8v204.8c0,7.074,5.726,12.8,12.8,12.8c7.074,0,12.8-5.726,12.8-12.8v-204.8 C268.8,133.722,263.074,127.996,256,127.996z"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M508.57,442.731L278.17,43.669c-4.574-7.919-13.022-12.8-22.17-12.8s-17.596,4.881-22.17,12.8L3.43,442.731 c-4.574,7.919-4.574,17.681,0,25.6c4.574,7.919,13.022,12.8,22.17,12.8h460.8c9.148,0,17.596-4.881,22.17-12.8 S513.143,450.65,508.57,442.731z M25.605,455.522L256,56.461l230.4,399.061H25.605z"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g><circle cx="256" cy="409.596" r="25.6"></circle></g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div v-else>
                  <svg
                    fill="#bfbfbf"
                    height="15px"
                    width="15px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    stroke="#bfbfbf"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g>
                          <path
                            d="M256,127.996c-7.074,0-12.8,5.726-12.8,12.8v204.8c0,7.074,5.726,12.8,12.8,12.8c7.074,0,12.8-5.726,12.8-12.8v-204.8 C268.8,133.722,263.074,127.996,256,127.996z"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M508.57,442.731L278.17,43.669c-4.574-7.919-13.022-12.8-22.17-12.8s-17.596,4.881-22.17,12.8L3.43,442.731 c-4.574,7.919-4.574,17.681,0,25.6c4.574,7.919,13.022,12.8,22.17,12.8h460.8c9.148,0,17.596-4.881,22.17-12.8 S513.143,450.65,508.57,442.731z M25.605,455.522L256,56.461l230.4,399.061H25.605z"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g><circle cx="256" cy="409.596" r="25.6"></circle></g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span> Result </span>
              </router-link>
            </li>
          </ul>
        </li>
        <div v-if="isSuperAdmin">
          <li>
            <router-link
              to="/user"
              :class="{ 'bg-blue-500  text-white': $route.path === '/user' }"
              class="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 group hover:text-black"
            >
              <svg
                fill="#bfbfbf"
                width="20px"
                height="35px"
                viewBox="0 0 32.00 32.00"
                id="user"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#bfbfbf"
                transform="rotate(0)"
                stroke-width="0.00032"
                class="me-1"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title>
                  <path
                    d="M22.56,16.53a9.95,9.95,0,0,1-13.12,0A15,15,0,0,0,1,30a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1A15,15,0,0,0,22.56,16.53Z"
                  ></path>
                  <circle cx="16" cy="9" r="8"></circle>
                </g>
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Management Users</span>
            </router-link>
          </li>
        </div>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { onMounted,ref } from 'vue'
import { initFlowbite } from 'flowbite'

const isSuperAdmin = ref(false)

const checkRole = () => {
  const roles = localStorage.getItem('role')
  if(roles === '"superAdmin"'){
    isSuperAdmin.value = true
  }
}
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
  checkRole()
})
</script>

<style scope>
.usb-icon {
  width: 35px;
  height: 30px;
  transform: rotate(90deg);
  margin-left: 0px;
}
</style>
