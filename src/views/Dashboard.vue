<script setup lang="ts">
import LineChart from './Charts/LineChart.vue'
import BarChart from './Charts/BarChart.vue'

const dashboardItems = [{
  mainText: '$350.4',
  secondaryText: 'Earnings',
  SVG: `<svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="28" cy="28" r="28" fill="#F4F7FE"/>
<g clip-path="url(#clip0_12_161)">
<path d="M20.2839 24.3135H20.5576C21.6113 24.3135 22.4734 25.1755 22.4734 26.2292V35.808C22.4734 36.8617 21.6113 37.7238 20.5576 37.7238H20.2839C19.2303 37.7238 18.3682 36.8617 18.3682 35.808V26.2292C18.3682 25.1755 19.2303 24.3135 20.2839 24.3135ZM27.947 18.5662C29.0007 18.5662 29.8627 19.4283 29.8627 20.4819V35.808C29.8627 36.8617 29.0007 37.7238 27.947 37.7238C26.8933 37.7238 26.0312 36.8617 26.0312 35.808V20.4819C26.0312 19.4283 26.8933 18.5662 27.947 18.5662ZM35.61 29.5134C36.6637 29.5134 37.5258 30.3755 37.5258 31.4291V35.808C37.5258 36.8617 36.6637 37.7238 35.61 37.7238C34.5564 37.7238 33.6943 36.8617 33.6943 35.808V31.4291C33.6943 30.3755 34.5564 29.5134 35.61 29.5134Z" fill="#4318FF"/>
</g>
<defs>
<clipPath id="clip0_12_161">
<rect width="32.8417" height="32.8417" fill="white" transform="translate(11.5264 11.7241)"/>
</clipPath>
</defs>
</svg>
`,
  info: '',
  infoAmount: '',
},
{
  mainText: '$642.39',
  secondaryText: 'Spend This Month',
  SVG: `<svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="28" cy="28" r="28" fill="#F4F7FE"/>
<g clip-path="url(#clip0_12_170)">
<path d="M27.6734 26.6397C24.5672 25.8324 23.5682 24.9976 23.5682 23.6977C23.5682 22.2061 24.9503 21.1661 27.2629 21.1661C29.206 21.1661 30.1776 21.9051 30.5334 23.0819C30.6976 23.6292 31.1492 24.0398 31.7239 24.0398H32.1344C33.0376 24.0398 33.6807 23.1503 33.366 22.3019C32.7913 20.6872 31.4502 19.3461 29.3155 18.8261V17.8819C29.3155 16.7462 28.3987 15.8293 27.2629 15.8293C26.1271 15.8293 25.2103 16.7462 25.2103 17.8819V18.7851C22.5556 19.3598 20.4209 21.084 20.4209 23.725C20.4209 26.886 23.0345 28.4597 26.8524 29.3765C30.2734 30.1976 30.9576 31.4018 30.9576 32.6744C30.9576 33.6186 30.2871 35.1238 27.2629 35.1238C25.005 35.1238 23.8419 34.3165 23.3903 33.167C23.1851 32.6333 22.7198 32.2502 22.1588 32.2502H21.7756C20.8588 32.2502 20.2156 33.1807 20.5577 34.0291C21.3377 35.9312 23.1577 37.0533 25.2103 37.4912V38.408C25.2103 39.5438 26.1271 40.4606 27.2629 40.4606C28.3987 40.4606 29.3155 39.5438 29.3155 38.408V37.5185C31.9839 37.0122 34.1049 35.4659 34.1049 32.6607C34.1049 28.7744 30.7797 27.4471 27.6734 26.6397Z" fill="#4318FF"/>
</g>
<defs>
<clipPath id="clip0_12_170">
<rect width="32.8417" height="32.8417" fill="white" transform="translate(11.5264 11.7241)"/>
</clipPath>
</defs>
</svg>
`,
  info: '',
  infoAmount: '',
}, {
  mainText: '$574.34',
  secondaryText: 'Sales',
  SVG: '',

  info: 'since last month',
  infoAmount: '23%',
}, {
  mainText: '$1,000',
  secondaryText: 'Your Balance',
  SVG: `
<image  width="60" height="60" alt="country-flag" class="rounded-full h-12 w-12 " src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png"/>

`,
  info: '',
  infoAmount: '',
}, {
  mainText: '$154',
  secondaryText: 'New Tasks',
  SVG: `<svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="28" cy="28" r="28" fill="url(#paint0_linear_12_195)"/>
<g clip-path="url(#clip0_12_195)">
<path d="M39.6666 20.0433L26.3549 33.3666L21.4083 28.4199L23.0533 26.7749L26.3549 30.0766L38.0216 18.4099L39.6666 20.0433ZM27.9999 37.3333C22.8549 37.3333 18.6666 33.1449 18.6666 27.9999C18.6666 22.8549 22.8549 18.6666 27.9999 18.6666C29.8316 18.6666 31.5466 19.2033 32.9933 20.1249L34.6849 18.4333C32.7833 17.1149 30.4849 16.3333 27.9999 16.3333C21.5599 16.3333 16.3333 21.5599 16.3333 27.9999C16.3333 34.4399 21.5599 39.6666 27.9999 39.6666C30.0183 39.6666 31.9199 39.1533 33.5766 38.2433L31.8266 36.4933C30.6599 37.0299 29.3649 37.3333 27.9999 37.3333ZM36.1666 31.4999H32.6666V33.8333H36.1666V37.3333H38.4999V33.8333H41.9999V31.4999H38.4999V27.9999H36.1666V31.4999Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_12_195" x1="0" y1="28" x2="56" y2="28" gradientUnits="userSpaceOnUse">
<stop stop-color="#4481EB"/>
<stop offset="1" stop-color="#04BEFE"/>
</linearGradient>
<clipPath id="clip0_12_195">
<rect width="28" height="28" fill="white" transform="translate(14 14)"/>
</clipPath>
</defs>
</svg>

`,
  info: '',
  infoAmount: '',
}, {
  mainText: '$2935',
  secondaryText: 'Total Projects',
  SVG: `<svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="28" cy="28" r="28" fill="#F4F7FE"/>
<g clip-path="url(#clip0_12_204)">
<path d="M31.2502 16.0833H19.3335C18.1419 16.0833 17.1669 17.0583 17.1669 18.2499V32.3333C17.1669 32.9291 17.6544 33.4166 18.2502 33.4166C18.846 33.4166 19.3335 32.9291 19.3335 32.3333V19.3333C19.3335 18.7374 19.821 18.2499 20.4169 18.2499H31.2502C31.846 18.2499 32.3335 17.7624 32.3335 17.1666C32.3335 16.5708 31.846 16.0833 31.2502 16.0833ZM31.8894 21.0558L37.1219 26.2883C37.5227 26.6891 37.7502 27.2416 37.7502 27.8158V37.7499C37.7502 38.9416 36.7752 39.9166 35.5835 39.9166H23.656C22.4644 39.9166 21.5002 38.9416 21.5002 37.7499L21.511 22.5833C21.511 21.3916 22.4752 20.4166 23.6669 20.4166H30.351C30.9252 20.4166 31.4777 20.6441 31.8894 21.0558ZM31.2502 27.9999H36.1252L30.1669 22.0416V26.9166C30.1669 27.5124 30.6544 27.9999 31.2502 27.9999Z" fill="#4318FF"/>
</g>
<defs>
<clipPath id="clip0_12_204">
<rect width="26" height="26" fill="white" transform="translate(15 15)"/>
</clipPath>
</defs>
</svg>

`,
  info: '',
  infoAmount: '',
}]
</script>

<template>
  <div>
    <div class="flex flex-wrap gap-4 w-full">
      <div
        v-for="(item, index) in dashboardItems"
        :key="index"
        class="flex-grow "
      >
        <div class="flex items-center px-2 py-4 bg-white rounded-3xl shadow-sm">
          <div class="p-2 bg-opacity-75 rounded-full">
            <div v-html="item.SVG" />
          </div>
          <div>
            <div class="text-gray-500 md:text-sm mt-2">
              {{ item.secondaryText }}
            </div>
            <span class="sm:text-2xl text-base font-semibold text-gray-700">
              {{ item.mainText }}
            </span>
            <div class="text-xs">
              <span class="mr-1 font-semibold text-[#05CD99]">
                {{ item.infoAmount }}
              </span>
              {{ item.info }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8" />

    <div class="flex sm:flex-row flex-col gap-8 mt-8">
      <LineChart />
      <BarChart />
    </div>
    <div class="flex  sm:flex-row flex-col mt-12 gap-8">
      <div class="sm:w-1/2 w-full relative overflow-auto rounded-xl bg-white">
        <div class="flex justify-between p-2">
          <h3 class="  text-2xl font-bold text-[#2b3674]">
            Complex Table
          </h3>
          <svg
            width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="w-[37px] h-[37px]" preserveAspectRatio="none"
          >
            <rect width="37" height="37" rx="10" fill="#F4F7FE" />
            <g clip-path="url(#clip0_20_326)">
              <path
                d="M12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM24 17C22.9 17 22 17.9 22 19C22 20.1 22.9 21 24 21C25.1 21 26 20.1 26 19C26 17.9 25.1 17 24 17ZM18 17C16.9 17 16 17.9 16 19C16 20.1 16.9 21 18 21C19.1 21 20 20.1 20 19C20 17.9 19.1 17 18 17Z"
                fill="#4318FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_20_326">
                <rect width="24" height="24" fill="white" transform="translate(6 7)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="h-[200px]">
          <div class=" h-6">
            <div class="flex justify-start items-center absolute left-[31px] top-[82px] gap-[7px]">
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#a3aed0]">
                NAME
              </p>
            </div>
            <div class="flex justify-start items-center absolute left-[265px] top-[82px] gap-[7px]">
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#a3aed0]">
                STATUS
              </p>
            </div>
            <div class="flex justify-start items-center absolute left-[435px] top-[82px] gap-[7px]">
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#a3aed0]">
                DATE
              </p>
            </div>
            <div class="flex justify-start items-center absolute left-[607px] top-[82px] gap-[7px]">
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#a3aed0]">
                PROGRESS
              </p>
            </div>
          </div>
        </div>

        <div class="">
          <p class="absolute left-[435px] top-[129px] text-sm font-bold text-left text-[#2b3674]">
            18 Apr 2021
          </p>
          <p class="absolute left-[31px] top-[129px] text-sm font-bold text-left text-[#2b3674]">
            Horizon UI PRO
          </p>
          <div class="w-[94px] h-6">
            <p class="absolute left-[294px] top-[129px] text-sm font-bold text-left text-[#2b3674]">
              Approved
            </p>
            <svg
              width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 absolute left-[265px] top-[129px]" preserveAspectRatio="xMidYMid meet"
            >
              <g clip-path="url(#clip0_20_336)">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                  fill="#05CD99"
                />
              </g>
              <defs>
                <clipPath id="clip0_20_336">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="w-[108px] h-2">
            <div class="w-[108px] h-2 absolute left-[606.5px] top-[136.56px] rounded-[21px] bg-[#eff4fb]" />
            <div class="w-[78px] h-2 absolute left-[606.5px] top-[136.56px] rounded-[21px] bg-[#4318ff]" />
          </div>
        </div>
        <div class="w-[684px] h-6">
          <div class="w-[684px] h-6">
            <p class="absolute left-[435px] top-[276px] text-sm font-bold text-left text-[#2b3674]">
              12 Jul 2021
            </p>
            <p class="absolute left-[31px] top-[276px] text-sm font-bold text-left text-[#2b3674]">
              Weekly Updates
            </p>
            <div class="w-[94px] h-6">
              <p class="absolute left-[294px] top-[276px] text-sm font-bold text-left text-[#2b3674]">
                Approved
              </p>
              <svg
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 absolute left-[265px] top-[276px]" preserveAspectRatio="xMidYMid meet"
              >
                <g clip-path="url(#clip0_20_348)">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                    fill="#05CD99"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_20_348">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="w-[108px] h-[8.06px]">
              <div class="w-[108px] h-2 absolute left-[606.5px] top-[283.56px] rounded-[21px] bg-[#eff4fb]" />
              <div class="w-[59px] h-2 absolute left-[606.5px] top-[283.5px] rounded-[21px] bg-[#4318ff]" />
            </div>
          </div>
        </div>
        <div class="w-[684px] h-6">
          <p class="absolute left-[435px] top-[178px] text-sm font-bold text-left text-[#2b3674]">
            18 Apr 2021
          </p>
          <p class="absolute left-[31px] top-[178px] text-sm font-bold text-left text-[#2b3674]">
            Horizon UI Free
          </p>
          <div class="w-[108px] h-[8.06px]">
            <div class="w-[108px] h-2 absolute left-[606.5px] top-[185.56px] rounded-[21px] bg-[#eff4fb]" />
            <div class="w-[42px] h-2 absolute left-[606.5px] top-[185.5px] rounded-[21px] bg-[#4318ff]" />
          </div>
          <div class="w-[78px] h-6">
            <p class="absolute left-[294px] top-[178px] text-sm font-bold text-left text-[#2b3674]">
              Disable
            </p>
            <svg
              width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 absolute left-[265px] top-[178px]" preserveAspectRatio="xMidYMid meet"
            >
              <g clip-path="url(#clip0_20_362)">
                <path
                  d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.3 16.3C15.91 16.69 15.28 16.69 14.89 16.3L12 13.41L9.11 16.3C8.72 16.69 8.09 16.69 7.7 16.3C7.31 15.91 7.31 15.28 7.7 14.89L10.59 12L7.7 9.11C7.31 8.72 7.31 8.09 7.7 7.7C8.09 7.31 8.72 7.31 9.11 7.7L12 10.59L14.89 7.7C15.28 7.31 15.91 7.31 16.3 7.7C16.69 8.09 16.69 8.72 16.3 9.11L13.41 12L16.3 14.89C16.68 15.27 16.68 15.91 16.3 16.3Z"
                  fill="#EE5D50"
                />
              </g>
              <defs>
                <clipPath id="clip0_20_362">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div class="w-[684px] h-6">
          <p class="absolute left-[435px] top-[227px] text-sm font-bold text-left text-[#2b3674]">
            20 May 2021
          </p>
          <p class="absolute left-[31px] top-[227px] text-sm font-bold text-left text-[#2b3674]">
            Marketplace
          </p>
          <div class="w-[108px] h-[8.06px]">
            <div class="w-[108px] h-2 absolute left-[606.5px] top-[234.56px] rounded-[21px] bg-[#eff4fb]" />
            <div class="w-[92px] h-2 absolute left-[606.5px] top-[234.5px] rounded-[21px] bg-[#4318ff]" />
          </div>
          <div class="w-[61px] h-6">
            <p class="absolute left-[294px] top-[227px] text-sm font-bold text-left text-[#2b3674]">
              Error
            </p>
            <svg
              width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 absolute left-[265px] top-[227px]" preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                fill="#FFCE20"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="sm:w-1/2 w-full flex  sm:flex-row flex-col gap-2 px-4">
        <div
          class="flex-grow-0 p-2 flex-shrink-0 sm:w-1/2 w-full  h-[370px]  relative overflow-hidden rounded-[20px] bg-white"
        >
          <div class="mb-8 mt-6 flex justify-between">
            <span>
              <input type="checkbox" id="tasks"  checked class="pointer-events-none border-gray-300 rounded  w-6 h-6 absolute left-7 ">
              <label for="tasks" class="absolute ml-[74px] text-lg font-bold text-left text-[#2b3674]">
                Tasks
              </label>
            </span>

            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[37px] h-[37px] mr-4 -mt-2 cursor-pointer"
              preserveAspectRatio="none"
            >
              <rect width="37" height="37" rx="10" fill="#F4F7FE" />
              <g clip-path="url(#clip0_20_383)">
                <path
                  d="M12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM24 17C22.9 17 22 17.9 22 19C22 20.1 22.9 21 24 21C25.1 21 26 20.1 26 19C26 17.9 25.1 17 24 17ZM18 17C16.9 17 16 17.9 16 19C16 20.1 16.9 21 18 21C19.1 21 20 20.1 20 19C20 17.9 19.1 17 18 17Z"
                  fill="#4318FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_20_383">
                  <rect width="24" height="24" fill="white" transform="translate(6 7)" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div class="flex h-7 my-4">
            <label for="landing" class="absolute  text-base font-medium text-left ml-16 text-[#a3aed0]">
              Landing Page Design
            </label>
            <input id="landing" type="checkbox" class="border-gray-300 rounded  w-6 h-6 absolute left-7 ">
          </div>
          <div class="flex h-7 my-4">
            <label for="dashboard-builder"  class="absolute  text-base font-medium text-left ml-16 text-[#a3aed0]">
              Dashboard Builder
            </label>
            <input id="dashboard-builder" type="checkbox" checked class="border-gray-300 rounded  w-6 h-6 absolute left-7 ">
          </div>
          <div class="flex h-7 my-4">
            <label for="mobile" class="absolute  text-base font-medium text-left ml-16 text-[#a3aed0]">
              Mobile App Design
            </label>
            <input id="mobile" type="checkbox" checked class="border-gray-300 rounded  w-6 h-6 absolute left-7 ">
          </div>
          <div class="flex h-7 my-4">
            <label for="illustration" class="absolute  text-base font-medium text-left ml-16 text-[#a3aed0]">
              Illustrations
            </label>
            <input  id="illustration"  type="checkbox" class="border-gray-300 rounded  w-6 h-6 absolute left-7 ">
          </div>
          <div class="flex h-7 my-4">
            <label for="promotional" class="absolute  text-base font-medium text-left ml-16 text-[#a3aed0]">
              Promotional Lp
            </label>
            <input id="promotional" type="checkbox" checked class="border-gray-300 rounded  w-6 h-6 absolute left-7 ">
          </div>
        </div>
        <div
          class="flex-grow-0 flex-shrink-0 sm:w-1/2 w-full h-[370px]   relative overflow-hidden rounded-[20px] bg-white"
        >
          <div class="flex justify-between h-8 p-2">
            <p class=" text-lg font-bold text-left mt-1 text-[#2b3674]">
              Team members
            </p>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg">
              <rect width="37" height="37" rx="10" fill="#F4F7FE" />
              <g clip-path="url(#clip0_12_688)">
                <path d="M18 9C12.48 9 8 13.48 8 19C8 24.52 12.48 29 18 29C23.52 29 28 24.52 28 19C28 13.48 23.52 9 18 9ZM23 20H19V24H17V20H13V18H17V14H19V18H23V20Z" fill="#4318FF" />
              </g>
              <defs>
                <clipPath id="clip0_12_688">
                  <rect width="24" height="24" fill="white" transform="translate(6 7)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="">
            <div
              class="w-[336px] h-[70px] absolute left-[23px] top-[75px] overflow-hidden rounded-2xl bg-white"
              style="box-shadow: 0px 18px 40px 0 rgba(112,144,176,0.12);"
            >
              <img class="absolute left-[15px] top-[11px] rounded-full w-12 h-12" alt="avatar-one" src="https://i.pravatar.cc/150?img=3">
              <p class="absolute left-20 top-3 text-base font-bold text-left text-[#2b3674]">
                Adela Parkson
              </p>
              <p class="absolute left-20 top-[37px] text-xs font-medium text-left text-[#a3aed0]">
                Creative Director
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 absolute left-[296px] top-[23px] cursor-pointer"
                preserveAspectRatio="xMidYMid meet"
              >
                <g clip-path="url(#clip0_12_669)">
                  <path
                    d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                    fill="#A3AED0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_669"><rect width="24" height="24" fill="white" /></clipPath>
                </defs>
              </svg>
            </div>
            <div
              class="w-[336px] h-[70px] absolute left-[23px] top-[162px] overflow-hidden rounded-2xl bg-white"
              style="box-shadow: 0px 18px 40px 0 rgba(112,144,176,0.12);"
            >
              <img class="absolute left-[15px] top-[11px] rounded-full w-12 h-12"  alt="avatar-two" src="https://i.pravatar.cc/150?img=1">
              <p class="absolute left-20 top-3 text-base font-bold text-left text-[#2b3674]">
                Christian Mad
              </p>
              <p class="absolute left-20 top-[37px] text-xs font-medium text-left text-[#a3aed0]">
                Product Designer
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 absolute left-[296px] top-[23px] cursor-pointer"
                preserveAspectRatio="xMidYMid meet"
              >
                <g clip-path="url(#clip0_12_676)">
                  <path
                    d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                    fill="#A3AED0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_676"><rect width="24" height="24" fill="white" /></clipPath>
                </defs>
              </svg>
            </div>
            <div
              class="w-[336px] h-[70px] absolute left-[23px] top-[249px] overflow-hidden rounded-2xl bg-white"
              style="box-shadow: 0px 18px 40px 0 rgba(112,144,176,0.12);"
            >
              <img class="absolute left-[15px] top-[11px] rounded-full w-12 h-12"  alt="avatar-three" src="https://i.pravatar.cc/150?img=2">
              <p class="absolute left-20 top-3 text-base font-bold text-left text-[#2b3674]">
                Jason Statham
              </p>
              <p class="absolute left-20 top-[37px] text-xs font-medium text-left text-[#a3aed0]">
                Junior Graphic Designer
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 absolute left-[296px] top-[23px] cursor-pointer"
                preserveAspectRatio="xMidYMid meet"
              >
                <g clip-path="url(#clip0_12_683)">
                  <path
                    d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                    fill="#A3AED0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_683"><rect width="24" height="24" fill="white" /></clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
