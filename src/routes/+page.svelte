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

<div class="lg:grid lg:grid-cols-2 gap-4 mt-4">
  <div class="max-h-96">
    <canvas bind:this={myChart}></canvas>
  </div>
  <div class="text-xl text-gray-600 font-bold self-center text-center mt-6 lg:mt-0">
    Actualment som
    <div class="text-7xl text-emerald-600">
      {data.currentMembers.toLocaleString()}
    </div>
    Socies!
  </div>
</div>
