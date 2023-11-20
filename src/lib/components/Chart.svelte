<script>
  import { Chart } from 'chart.js/auto'
  import { onMount } from 'svelte'

  import { colorTheme } from '$lib/stores'

  export let config

  let chart
  let chartCanvas

  $: if (chart && $colorTheme) {
    chart.options.color = $colorTheme === 'dark' ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)'

    // Fonts
    chart.options.scales.x.ticks.color =
      $colorTheme === 'dark' ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)'

    chart.options.scales.y.ticks.color =
      $colorTheme === 'dark' ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)'

    // Border
    chart.options.scales.x.grid.color =
      $colorTheme === 'dark' ? 'rgb(229, 231, 235, 0.1)' : 'rgba(0,0,0,0.1)'

    chart.options.scales.y.grid.color =
      $colorTheme === 'dark' ? 'rgb(229, 231, 235, 0.1)' : 'rgba(0,0,0,0.1)'

    chart.update()
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
    chart = new Chart(chartCanvas, config)
  })
</script>

<canvas bind:this={chartCanvas}></canvas>
