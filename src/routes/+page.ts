export type KittenAPI = {
  id: string
  url:string
  breeds: [{
    name:string
  }]
}
export const load = async ( { fetch } ) => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=15&breed_ids=nebe&api_key=live_5fWQFvYEMqMIIzGbzWeyMJEakhxCc7KbI8890SrN8oNzoRLBMpuynmjycEyB2nfQ`)
  const json = await response.json()
  const kittens: KittenAPI[] = json.map((kitten: KittenAPI) =>{
  return {
    id: kitten.id,
    url: kitten.url,
    breeds_name: kitten.breeds[0].name
  }
  })
  return {
  kittens
  }
} 