// import type { PageLoad } from "./$types"

// export type Cats = {
//     url: string,
//     id: string,
//     breeds: {
//       name:string
//     }
// }
// export const load = (async ({ fetch }) => {
// const response = await fetch('https://api.thecatapi.com/v1/images/search?api_key=live_5fWQFvYEMqMIIzGbzWeyMJEakhxCc7KbI8890SrN8oNzoRLBMpuynmjycEyB2nfQ')
// const json = await response.json()
// const monsters = json.results.map((monster: Cats) => {
// const splitUrl = monster.url.split('/')
// const id = splitUrl[splitUrl.length - 2]
// return {
//   url: monster.url,
//   id,
// }
// })
//   return {
//     monsters
//   }
// }) satisfies PageLoad


export type Cats = {
    id: string,
    width:number, height:number,
    url: string,
    breeds: { weight: { imperial: string; metric: string; }; id: string; name: string; temperament: string; origin: string; country_codes: string; country_code: string; life_span: string; wikipedia_url: string; }[];
    }
export let Cats: Cats[] = [
    {
    "id":"0XYvRd7oD",
    "width":1204,height:1445,
    "url":"https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
    "breeds":[{
        "weight":{"imperial":"7  -  10","metric":"3 - 5"},
        "id":"abys","name":"Abyssinian",
        "temperament":"Active, Energetic, Independent, Intelligent, Gentle",
        "origin":"Egypt",
        "country_codes":"EG",
        "country_code":"EG",
        "life_span":"14 - 15",
        "wikipedia_url":"https://en.wikipedia.org/wiki/Abyssinian_(cat)"
    }]}]
