<script lang="ts">
  import type { PageData } from "./$types";
  import {page} from "$app/stores";
	import Kitten from "./Kitten.svelte";
  export let data: PageData;
  let form = {
    searchString: ''
  };
  let searchString = ''
  $: selectedKittens = data.kittens.filter((kitten) => {
    return kitten.id.toLowerCase().includes(searchString.toLowerCase());
  })
  $: CatID = $page.url.searchParams.get("CatID");
  $: kitten = data.kittens.find((kitten) => kitten.id === CatID);
  $: CatID2 = $page.url.searchParams.get("CatID2");
  $: kitten2 = data.kittens.find((kitten) => kitten.id === CatID2);
  const submitSearch = (e: Event) => {
    searchString = form.searchString
  }
</script>
<section class="text-orange-500 bg-gray-950 font-body">
  <div class="grid md:grid-cols-4 pt-32">
    {#if kitten}
      <Kitten 
      kitten={kitten}/>
    {/if}
    {#if kitten2}
      <Kitten
      kitten={kitten2}/>
    {/if}
    <main class="px-15 py-5 md:col-span-4">
      <header class="flex justify-center items-baseline text-6xl px-10 font-bold py-2">
          <h2>Kittens</h2>
          <h3 class="text-3xl text-primary-100 font-bold"><p>For Waytishniks...</p></h3>
        </header>
        <form on:submit={submitSearch} class="mb-3">
          <div class="flex flex-wrap items-stretch relative ml-[10%] my-4 w-[80%]">
            <input type="search" bind:value={form.searchString}
              class="relative m-0 -mr-0.5 block w-full min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-primary-100 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary-200 focus:text-primary-100 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary-100 scale-120"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1" />
            <button
              class="absolute z-[3] flex items-center scale-110 rounded-full bg-primary-100 right-0.5 top-0 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-200 hover:shadow-lg focus:bg-primary-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-100 active:shadow-lg hover:scale-125"
              type="submit"
              id="search_button"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </form>
        <div class="mx-[45%] max-lg:mx-[40%]">
          <button class="cool_button bg-primary-100 hover:bg-primary-200 hover:text-secondary-100 hover:scale-110 transition ease-out duration-450"><img src="cat_paw_dice.png" alt="RANDOM BREED"></button>
        </div>
        <div class="kitties ">
          {#each selectedKittens as kitten (kitten.id)}
            <Kitten kitten = {kitten}
            isInteractive = {true}
            />
          {/each}
        </div>
        <div>
          <h4 class="font-bold mt-12 pb-2 border-b border-gray-600">Latest Kittens</h4>
            <div class="mt-8 mx-3 grid lg:grid-cols-4 gap-5">
            <!-- cards go here -->
            <div class="card hover:scale-110 transition ease-out duration-450"> 
              <img src="img/deranged_cat.jpg" alt="Deranged Cat" class="w-full object-cover">
              <div class="m-2">
                <span class="font-bold">Deranged Cat</span>
                <span class="block text-grey-500 text-sm">by Silly Billy</span>
              </div>
              <div class="badge">
                <span>6/10 ★</span>
            </div>
        </div>
              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="img/harald_cat.jpg" alt="Harald le Cat" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Harald le Cat</span>
                  <span class="block text-grey-500 text-sm">by Stock Image Memer</span>
                </div>
                <div class="badge">
                  <span>8/10 ★</span>
                </div>
              </div>
              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="img/toothbrush_cat.jpg" alt="Toothbrushing Kitty" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Kitty doesn't like tooth brushing</span>
                  <span class="block text-grey-500 text-sm">by 1/10 dentist</span>
                </div>
                <div class="badge">
                  <span>9/10 ★</span>
                </div>
              </div>
              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="img/smiling_cat.jpg" alt="Smiling Cat" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Smiling Cat</span>
                  <span class="block text-grey-500 text-sm">by Happy Inc</span>
                </div>
                <div class="badge">
                  <span>4/10 ★</span>
                </div>
              </div>
              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="img/screaming_cat.jpg" alt="Screaming Cat" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Screaming Cat</span>
                  <span class="block text-grey-500 text-sm">by LiterallyMe prod.</span>
                </div>
                <div class="badge">
                  <span>7/10 ★</span>
                </div>
              </div>
              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="img/crying_cat.jpg" alt="Crying Cat" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Crying Cat</span>
                  <span class="block text-grey-500 text-sm">by Sad Inc</span>
                </div>
                <div class="badge">
                  <span>1/10 ★</span>
                </div>
              </div>
              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="img/cats_webcam.jpg" alt="Webcam Cat" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Cat accidentally turned on his webcam</span>
                  <span class="block text-grey-500 text-sm">by Zoom meeting enthusiasts</span>
                </div>
                <div class="badge">
                  <span>5/10 ★</span>
                </div>
              </div>
              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="img/phone_cat.jpg" alt="Cat On Le Phone" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Kitty checking global news</span>
                  <span class="block text-grey-500 text-sm">by Channel 5 News</span>
                </div>
                <div class="badge">
                  <span>6/10 ★</span>
                </div>
              </div>
          </div> 
          <h4 class="font-bold mt-12 pb-2 border-b border-gray-600">Most Popular</h4>
          <div class="mt-8 ml-3 mr-3 grid lg:grid-cols-3 gap-5">
            <!-- cards go here -->
            <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="img/sneaky_puss.jpg" alt="Sneaky Puss" class="w-full h-32 sm:h-48 object-cover">
              <div class="m-2">
                  <span class="font-bold">Sneaky Puss</span>
                  <span class="block text-grey-500 text-sm">by Bolgrad Mafia LTD</span>
                </div>
                <div class="badge">
                  <span>11/10 ★</span>
                </div>
              </div>
              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="img/yelled_on_cat.jpg" alt="Yelled On Cat" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Yelled On Cat</span>
                  <span class="block text-grey-500 text-sm">by Wholesome_100_Big_Chungus420</span>
                </div>
                <div class="badge">
                  <span>2/10 ★</span>
                </div>
              </div>
              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="img/sleepy_cat.png" alt="Sleepy Cat" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Sleepy Cat</span>
                  <span class="block text-grey-500 text-sm">by Snoozer Gang</span>
                </div>
                <div class="badge">
                  <span>9/10 ★</span>
                </div>
              </div>
          </div>
        </div>
      <div>
          <div class="button mt-4 bg-secondary-200 text-secondary-100 w-50 flex justify-center hover:scale-110 hover:bg-opacity-50 transition ease-out duration-450">Load more</div>
      </div>    
    </main>
  </div>
</section>