<script>
  import Chart from '$lib/components/Chart.svelte'
  export let data

  const yearlyMembersConfig = {
    type: 'line',
    data: {
      labels: data.yearlyMembers.dates,
      datasets: [
        {
          label: 'Socies anuals',
          data: data.yearlyMembers.values,
          borderColor: 'rgb(5,150,105)'
        }
      ]
    }
  }

  const yearlyContractsConfig = {
    type: 'line',
    data: {
      labels: data.yearlyContracts.dates,
      datasets: [
        {
          label: 'Contractes anuals',
          data: data.yearlyContracts.values,
          borderColor: 'rgb(227, 160, 8)'
        }
      ]
    }
  }
</script>

<svelte:head>
  <title>Som Energia | Open Data</title>
</svelte:head>

<div class="lg:grid lg:grid-cols-2 gap-4 mt-4">
  <div class="max-h-96">
    <Chart config={yearlyMembersConfig} />
  </div>
  <div class="text-xl font-bold self-center text-center mt-6 lg:mt-0">
    Actualment som
    <div class="text-7xl text-emerald-600">
      {data.currentMembers.toLocaleString()}
    </div>
    Socies!
  </div>
</div>

<div class="lg:grid lg:grid-cols-2 gap-4 mt-4">
  <div class="text-xl font-bold self-center text-center mt-6 lg:mt-0">
    Actualment tenim
    <div class="text-7xl text-yellow-400">
      {data.currentContracts.toLocaleString()}
    </div>
    Contractes!
  </div>
  <div class="max-h-96">
    <Chart config={yearlyContractsConfig} />
  </div>
</div>
