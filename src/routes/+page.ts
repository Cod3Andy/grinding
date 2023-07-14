

// export const load = async ( { fetch } ) => {
//   const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_5fWQFvYEMqMIIzGbzWeyMJEakhxCc7KbI8890SrN8oNzoRLBMpuynmjycEyB2nfQ')
//   const json = await response.json()
//   return {
//     monsters: json.results
//   }
// }
import type { PageLoad } from "./$types"

type IndexMonster = {
  id: string
  cfa_url: string
}
export const load = (async ({ fetch }) => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_5fWQFvYEMqMIIzGbzWeyMJEakhxCc7KbI8890SrN8oNzoRLBMpuynmjycEyB2nfQ')
  const json = await response.json()
  const monsters = json.results.map((monster: IndexMonster) => {
    const id = monster.id
    return {
      ...monster,
      id,
    }
  })

  return {
    monsters
  }
}) satisfies PageLoad


