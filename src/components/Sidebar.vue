<script setup lang="ts">
import { ref } from 'vue'
import { useSidebar } from '../composables/useSidebar'
import { sidebarSVG } from '../assets/sidebarSVG'

const { isOpen } = useSidebar()
const activeClass = ref(
  'text-black border-r-4 border-r-[#4318ff]',
)
const inactiveClass = ref(
  '  text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100',
)
</script>

<template>
  <div class="flex"> 
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden" @click="isOpen = false"
    /> 

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-white lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
        

          <span class="mx-2 text-2xl font-semibold text-[#2b3674] font-semibold">HORIZON</span>
        </div>
      </div>

      <nav class="mt-10">
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 rounded-sm"
          :class="[$route.name === 'Dashboard'||$route.name === 'Home' ? activeClass : inactiveClass]" to="/dashboard"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_12_790)">
              <path
                d="M10.0001 19V14H14.0001V19C14.0001 19.55 14.4501 20 15.0001 20H18.0001C18.5501 20 19.0001 19.55 19.0001 19V12H20.7001C21.1601 12 21.3801 11.43 21.0301 11.13L12.6701 3.59997C12.2901 3.25997 11.7101 3.25997 11.3301 3.59997L2.9701 11.13C2.6301 11.43 2.8401 12 3.3001 12H5.0001V19C5.0001 19.55 5.4501 20 6.0001 20H9.0001C9.5501 20 10.0001 19.55 10.0001 19Z"
                :fill="$route.name === 'Dashboard'||$route.name === 'Home' ? '#4318FF' : '#A3AED0'"
              />
            </g>
            <defs>
              <clipPath id="clip0_12_790">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span class="mx-4">Dashboard</span>
        </router-link>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200"
          :class="[$route.name === 'Disputes' ? activeClass : inactiveClass]" to="/disputes"
        >
          <svg
            width="20px" height="20px" viewBox="0 0 24 24" :fill="$route.name === 'Disputes' ? '#4318FF' : '#A3AED0'"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 14a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1zm-1.5 2.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"
              fill="#0D0D0D"
            />
            <path
              d="M10.23 3.216c.75-1.425 2.79-1.425 3.54 0l8.343 15.852C22.814 20.4 21.85 22 20.343 22H3.657c-1.505 0-2.47-1.6-1.77-2.931L10.23 3.216zM20.344 20L12 4.147 3.656 20h16.688z"
              :fill="$route.name === 'Disputes' ? '#4318FF' : '#A3AED0'"
            />
          </svg>

          <span class="mx-4">Disputes</span>
        </router-link>
        <span :class="`flex items-center px-6 py-2 mt-4 duration-200 ${inactiveClass}`">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.55 11C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C20.25 2.82 19.77 2 19.01 2H4.21L3.27 0H0V2H2L5.6 9.59L4.25 12.03C3.52 13.37 4.48 15 6 15H18V13H6L7.1 11H14.55ZM5.16 4H17.31L14.55 9H7.53L5.16 4ZM6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z"
              fill="#A3AED0"
            />
          </svg>

          <span class="mx-4">NFT Marketplace</span>
        </span>

        <span :class="`flex items-center px-6 py-2 mt-4 duration-200 ${inactiveClass}`">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.46659 5.73325H2.69992C3.59825 5.73325 4.33325 6.46825 4.33325 7.36659V15.5333C4.33325 16.4316 3.59825 17.1666 2.69992 17.1666H2.46659C1.56825 17.1666 0.833252 16.4316 0.833252 15.5333V7.36659C0.833252 6.46825 1.56825 5.73325 2.46659 5.73325V5.73325ZM8.99992 0.833252C9.89825 0.833252 10.6333 1.56825 10.6333 2.46659V15.5333C10.6333 16.4316 9.89825 17.1666 8.99992 17.1666C8.10158 17.1666 7.36659 16.4316 7.36659 15.5333V2.46659C7.36659 1.56825 8.10158 0.833252 8.99992 0.833252ZM15.5333 10.1666C16.4316 10.1666 17.1666 10.9016 17.1666 11.7999V15.5333C17.1666 16.4316 16.4316 17.1666 15.5333 17.1666C14.6349 17.1666 13.8999 16.4316 13.8999 15.5333V11.7999C13.8999 10.9016 14.6349 10.1666 15.5333 10.1666V10.1666Z"
              fill="#A3AED0"
            />
          </svg>

          <span class="mx-4">Tables</span>
        </span>

        <span :class="`flex items-center px-6 py-2 mt-4 duration-200 ${inactiveClass}`">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 10H7C7.55 10 8 9.55 8 9V1C8 0.45 7.55 0 7 0H1C0.45 0 0 0.45 0 1V9C0 9.55 0.45 10 1 10ZM1 18H7C7.55 18 8 17.55 8 17V13C8 12.45 7.55 12 7 12H1C0.45 12 0 12.45 0 13V17C0 17.55 0.45 18 1 18ZM11 18H17C17.55 18 18 17.55 18 17V9C18 8.45 17.55 8 17 8H11C10.45 8 10 8.45 10 9V17C10 17.55 10.45 18 11 18ZM10 1V5C10 5.55 10.45 6 11 6H17C17.55 6 18 5.55 18 5V1C18 0.45 17.55 0 17 0H11C10.45 0 10 0.45 10 1Z"
              fill="#A3AED0"
            />
          </svg>

          <span class="mx-4">Kanban</span>
        </span>

        <span :class="`flex items-center px-6 py-2 mt-4 duration-200 ${inactiveClass}`">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z"
              fill="#A3AED0"
            />
          </svg>

          <span class="mx-4">Profile</span>
        </span>

        <span :class="`flex items-center px-6 py-2 mt-4 duration-200 ${inactiveClass}`">
          <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM5 7V5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5Z"
              fill="#A3AED0"
            />
          </svg>

          <span class="mx-4">Sign In</span>
        </span>
      </nav>
      <div v-html="sidebarSVG" />
    </div>
  </div>
</template>
