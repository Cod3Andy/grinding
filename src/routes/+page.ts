export const load = async ( { fetch } ) => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=15&breed_ids=abys&api_key=live_5fWQFvYEMqMIIzGbzWeyMJEakhxCc7KbI8890SrN8oNzoRLBMpuynmjycEyB2nfQ`)
  const json = await response.json()
  return {
  kittens: json
  }
} 