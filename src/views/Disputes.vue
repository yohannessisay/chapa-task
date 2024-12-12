<script setup lang="ts">
import { computed, ref } from 'vue'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

const form = ref({
  transactionReference: '',
  name: '',
  phoneNumber: '',
  amount: '',
  date: '',
})

const disputes = ref([
  {
    transactionReference: 'TXN123',
    name: 'John Doe',
    phoneNumber: '1234567890',
    amount: '100.00',
    date: '2024-12-01',
  },
  {
    transactionReference: 'TXN124',
    name: 'Jane Smith',
    phoneNumber: '9876543210',
    amount: '200.00',
    date: '2024-12-02',
  },
  {
    transactionReference: 'TXN125',
    name: 'Alice Johnson',
    phoneNumber: '5556667777',
    amount: '150.00',
    date: '2024-12-03',
  },
  {
    transactionReference: 'TXN126',
    name: 'Bob Brown',
    phoneNumber: '4445556666',
    amount: '300.00',
    date: '2024-12-04',
  },
  {
    transactionReference: 'TXN127',
    name: 'Charlie White',
    phoneNumber: '3334445555',
    amount: '250.00',
    date: '2024-12-05',
  },
])

const search = ref('')
const showModal = ref(false)

const filteredDisputes = computed(() => {
  return disputes.value.filter(dispute =>
    dispute.name.toLowerCase().includes(search.value.toLowerCase()),
  )
})

function handleSubmit() {
  disputes.value.push({ ...form.value })
  showModal.value = false
  Object.keys(form).forEach(key => (form[key as keyof typeof form] = '' as any))
}

function settleDispute(index: number) {
  disputes.value.splice(index, 1)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-4 ease-in-out transition-all duration-300 ">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold text-gray-800">
        Dispute Management
      </h1>
      <button
        class="bg-[#0d1c34] ease-in-out transition-all duration-300 text-white py-2 px-4 rounded-lg shadow hover:bg-[#313131] focus:ring "
        @click="showModal = true"
      >
        Add Dispute
      </button>
    </div>

    <div class="mb-4">
      <input
        v-model="search"
        type="text"
        placeholder="Search by name"
        class="w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
    </div>

    <table class="min-w-full border-collapse border border-gray-300 rounded-md">
      <thead class="bg-gray-100 hover:bg-gray-200 ">
        <tr>
          <th class=" border-gray-300 p-2">
            Transaction Reference
          </th>
          <th class=" border-gray-300 p-2">
            Name
          </th>
          <th class=" border-gray-300 p-2">
            Phone Number
          </th>
          <th class=" border-gray-300 p-2">
            Amount
          </th>
          <th class=" border-gray-300 p-2">
            Date
          </th>
          <th class=" border-gray-300 p-2">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dispute, index) in filteredDisputes" :key="index">
          <td class="border-t border-gray-300 p-2">
            {{ dispute.transactionReference }}
          </td>
          <td class="border-t border-gray-300 p-2">
            {{ dispute.name }}
          </td>
          <td class="border-t border-gray-300 p-2">
            {{ dispute.phoneNumber }}
          </td>
          <td class="border-t border-gray-300 p-2">
            {{ dispute.amount }}
          </td>
          <td class="border-t border-gray-300 p-2">
            {{ dispute.date }}
          </td>
          <td class="border-t border-gray-300 p-2 text-center">
            <button
              class="bg-[#7ccd4d] ease-in-out transition-all duration-300 text-white py-1 px-3 rounded-md  hover:bg-[#7ad446d7]"
              @click="settleDispute(index)"
            >
              Settle
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div
      v-if="showModal"
      class="fixed inset-0   bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
    >
      <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold text-gray-800 mb-4">
          Add Dispute
        </h2>
        <form class="space-y-4" @submit.prevent="handleSubmit">
          <div>
            <div>
              <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
              <VueTailwindDatepicker
                v-model="form.date" as-single placeholder="Pick A Date"
                required
                id="date"
                input-classes="block mb-2 w-12 h-10 p-2 text-sm font-medium  text-green-700 dark:text-green-500 rounded-md border-none bg-primary"
              />
            </div>
            <label for="transaction-reference" class="block text-sm font-medium text-gray-700">Transaction Reference</label>
            <input
              id="transaction-reference"
              v-model="form.transactionReference"
              type="text"
              placeholder="Enter transaction reference"
              class="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
          </div>

          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Enter your name"
              class="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
          </div>
          <div>
            <label for="phone-number" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="phone-number"
              v-model="form.phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              class="mt-1 block w-full  p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
          </div>
          <div>
            <label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
            <input
              id="amount"
              v-model="form.amount"
              type="number"
              placeholder="Enter the transaction amount"
              class="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
          </div>

          <div class="flex justify-end space-x-2">
            <button
              type="button"
              class="bg-gray-600 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-700 focus:ring focus:ring-gray-500 focus:outline-none"
              @click="showModal = false"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:ring focus:ring-indigo-500 focus:outline-none"
            >
              Add Dispute
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>
