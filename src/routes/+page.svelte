<script>
  import { Chart } from 'chart.js/auto'

  import { onMount } from 'svelte'
  export let data

  let myChart

  const config = {
    type: 'line',
    data: {
      labels: data.yearlyMembers.dates,
      datasets: [
        {
          label: 'Socies anuals',
          data: data.yearlyMembers.values
        }
      ]
    }
  }
  onMount(() => {
    Chart.defaults.font.size = 12
    Chart.defaults.font.family = 'Roboto'

    // Initialize chart using default config set
    new Chart(myChart, config)
  })
</script>

<svelte:head>
  <title>Som Energia | Open Data</title>
</svelte:head>

<h1 class="text-3xl text-[#4d4d4d] py-4">Som Energia</h1>
<div class="grid grid-cols-2 gap-4">
  <div class="h-96">
    <canvas bind:this={myChart}></canvas>
  </div>
  <div class="text-xl text-[#4d4d4d] font-bold self-center text-center">
    Actualment som
    <div class="text-7xl text-emerald-600">
      {data.currentMembers.toLocaleString()}
    </div>
    Socies!
  </div>
</div>
