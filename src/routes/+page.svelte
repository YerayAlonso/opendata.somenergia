<script>
  import { Chart } from 'chart.js/auto'
  import { onMount } from 'svelte'

  import { colorTheme } from '$lib/stores'

  export let data

  export let myChart
  let myChartEl

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

  $: if (myChart && $colorTheme) {
    myChart.options.color = $colorTheme === 'dark' ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)'

    // Fonts
    myChart.options.scales.x.ticks.color =
      $colorTheme === 'dark' ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)'

    myChart.options.scales.y.ticks.color =
      $colorTheme === 'dark' ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)'

    // Border
    myChart.options.scales.x.grid.color =
      $colorTheme === 'dark' ? 'rgb(229, 231, 235, 0.1)' : 'rgba(0,0,0,0.1)'

    myChart.options.scales.y.grid.color =
      $colorTheme === 'dark' ? 'rgb(229, 231, 235, 0.1)' : 'rgba(0,0,0,0.1)'

    myChart.update()
  }

  onMount(() => {
    Chart.defaults.font.size = 12
    Chart.defaults.font.family = 'Roboto'

    // Fonts
    Chart.defaults.color =
      localStorage.getItem('color-theme') === 'dark' ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)'

    // Border
    Chart.defaults.borderColor =
      localStorage.getItem('color-theme') === 'dark' ? 'rgb(229, 231, 235, 0.1)' : 'rgba(0,0,0,0.1)'

    // Initialize chart using default config set
    myChart = new Chart(myChartEl, config)
  })
</script>

<svelte:head>
  <title>Som Energia | Open Data</title>
</svelte:head>

<div class="lg:grid lg:grid-cols-2 gap-4 mt-4">
  <div class="max-h-96">
    <canvas bind:this={myChartEl}></canvas>
  </div>
  <div class="text-xl font-bold self-center text-center mt-6 lg:mt-0">
    Actualment som
    <div class="text-7xl text-emerald-600">
      {data.currentMembers.toLocaleString()}
    </div>
    Socies!
  </div>
</div>
