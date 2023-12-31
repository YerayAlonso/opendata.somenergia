/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  const currentMembersUrl = 'https://opendata.somenergia.coop/v0.2/members?format=json'
  const yearlyMembersUrl = 'https://opendata.somenergia.coop/v0.2/members/yearly?format=json'

  const currentContractsUrl = 'https://opendata.somenergia.coop/v0.2/contracts?format=json'
  const yearlyContractsUrl = 'https://opendata.somenergia.coop/v0.2/contracts/yearly?format=json'

  let resp = await fetch(currentMembersUrl)
  const currentMembers = (await resp.json()).values[0]

  resp = await fetch(yearlyMembersUrl)
  const yearlyMembers = await resp.json()

  yearlyMembers.dates = yearlyMembers.dates.map((date) => {
    return new Date(date).getFullYear()
  })

  resp = await fetch(currentContractsUrl)
  const currentContracts = (await resp.json()).values[0]

  resp = await fetch(yearlyContractsUrl)
  const yearlyContracts = await resp.json()

  yearlyContracts.dates = yearlyContracts.dates.map((date) => {
    return new Date(date).getFullYear()
  })

  return {
    currentMembers,
    yearlyMembers,
    currentContracts,
    yearlyContracts
  }
}
