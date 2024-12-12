<script setup lang="ts">
import { ref } from 'vue'
import { useSidebar } from '../composables/useSidebar'

const dropdownOpen = ref(false)
const { isOpen } = useSidebar()
</script>

<template>
  <header class="flex items-center justify-between px-6 py-4 bg-[#F4F7FE]">
    <div class="flex items-center">
      <button class="text-gray-500 focus:outline-none lg:hidden" @click="isOpen = true">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div class="flex flex-col mt-8">
        <nav class="text-gray-600 text-sm" aria-label="Breadcrumb">
          <ol class="flex space-x-2">
            <li>
              <a href="/" class="text-blue-500 hover:underline">Pages</a>
            </li>
            <li class="text-gray-500">
              /
            </li>
            <li class="text-gray-500">
              {{ $route.name }}
            </li>
          </ol>
        </nav>
        <h3 class="text-4xl font-semibold text-gray-700">
          {{ $route.name }}
        </h3>
      </div>
    </div>

    <div class="flex items-center gap-4 bg-white p-3 rounded-full mt-5">
      <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            />
          </svg>
        </span>

        <input
          class="w-32 pl-10 h-10 pr-4 text-indigo-600 bg-[#F4F7FE] rounded-full sm:w-64 border-none"
          type="text" placeholder="Search"
        >
      </div>

      <svg width="16" height="20" class="cursor-pointer hover:scale-110" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.2901 15.29L14.0001 14V9C14.0001 5.93 12.3601 3.36 9.50005 2.68V2C9.50005 1.17 8.83005 0.5 8.00005 0.5C7.17005 0.5 6.50005 1.17 6.50005 2V2.68C3.63005 3.36 2.00005 5.92 2.00005 9V14L0.710051 15.29C0.0800515 15.92 0.520051 17 1.41005 17H14.5801C15.4801 17 15.9201 15.92 15.2901 15.29ZM12.0001 15H4.00005V9C4.00005 6.52 5.51005 4.5 8.00005 4.5C10.4901 4.5 12.0001 6.52 12.0001 9V15ZM8.00005 20C9.10005 20 10.0001 19.1 10.0001 18H6.00005C6.00005 19.1 6.89005 20 8.00005 20Z"
          fill="#A3AED0"
        />
      </svg>
      <svg width="18" height="18" class="cursor-pointer hover:scale-110" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.95691 18C12.7329 18 15.2683 16.737 16.948 14.6675C17.1965 14.3613 16.9255 13.9141 16.5415 13.9872C12.175 14.8188 8.1651 11.4709 8.1651 7.06303C8.1651 4.52398 9.52431 2.18914 11.7334 0.931992C12.0739 0.738211 11.9883 0.221941 11.6013 0.150469C11.0589 0.0504468 10.5085 8.21369e-05 9.95691 0C4.98902 0 0.956909 4.02578 0.956909 9C0.956909 13.9679 4.98269 18 9.95691 18Z"
          fill="#A3AED0"
        />
      </svg>
      <svg width="20" height="20" class="cursor-pointer hover:scale-110" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 5H11V7H9V5ZM10 15C10.55 15 11 14.55 11 14V10C11 9.45 10.55 9 10 9C9.45 9 9 9.45 9 10V14C9 14.55 9.45 15 10 15ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
          fill="#A3AED0"
        />
      </svg>

      <div class="relative">
        <button
          class="relative cursor-pointer hover:scale-110 z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
          @click="dropdownOpen = !dropdownOpen"
        >
          <img
            class="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
            alt="profile-avatar"
          >
        </button>

        <div v-show="dropdownOpen" class="fixed inset-0 z-10 w-full h-full" @click="dropdownOpen = false" />

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform" leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div v-show="dropdownOpen" class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
              Log out
            </a>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>
