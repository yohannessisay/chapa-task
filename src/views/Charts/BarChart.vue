<script setup lang="ts">
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'

use([GridComponent, BarChart, CanvasRenderer])

type DataItem = string | number | { value: string | number; itemStyle: { borderRadius: number[] } }

const series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    stack: 'a',
    name: 'a',
  },
  {
    data: [10, 46, 64, '-', 0, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'b',
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'c',
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'b',
    name: 'd',
  },
  {
    data: [10, 20, 150, 0, '-', 50, 10],
    type: 'bar',
    stack: 'b',
    name: 'e',
  },
]

const stackInfo: Record<string, { stackStart: (number | undefined)[]; stackEnd: (number | undefined)[] }> = {}

for (let i = 0; i < series[0].data.length; ++i) {
  for (let j = 0; j < series.length; ++j) {
    const stackName = series[j].stack
    if (!stackName)
      continue

    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: [],
      }
    }

    const info = stackInfo[stackName]
    const data = series[j].data[i]

    if (data !== '-' && data != null) {
      if (info.stackStart[i] == null)
        info.stackStart[i] = j
      info.stackEnd[i] = j
    }
  }
}

for (let i = 0; i < series.length; ++i) {
  const data = series[i].data as DataItem[]
  const info = stackInfo[series[i].stack]

  for (let j = 0; j < series[i].data.length; ++j) {
    const isEnd = info?.stackEnd[j] === i
    const topBorder = isEnd ? 20 : 0
    const bottomBorder = 0

    data[j] = {
      value: data[j] as string | number,
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder],
      },
    }
  }
}

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  color: ['#785ffd', '#84d9fd', '#e6edf9'],
  yAxis: {
    type: 'value',
  },
  series,
}
</script>

<template>
  <div class="sm:w-1/2 w-full rounded-2xl  bg-white">
    <div class="p-8">
      <span class="text-2xl font-semibold ">Weekly Revenue</span>
    </div>
    <VChart class="h-96" :option="option" autoresize />
  </div>
</template>
