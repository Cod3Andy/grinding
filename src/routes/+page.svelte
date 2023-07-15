<script lang="ts">
  import type { PageData } from "./$types";
  // import { Cats } from "../lib/cats";
  export let data: PageData;
</script>
<section class="text-orange-500 bg-gray-950 font-body">
  <div class="grid md:grid-cols-4 pt-32">
      <main class="px-15 py-5 md:col-span-4">
        <header class="flex justify-center items-baseline text-6xl px-10 font-bold py-2">
          <h2>Kittens</h2>
          <h3 class="text-3xl text-primary font-bold"><p>For Waytishniks...</p></h3>
        </header>
        <div class="kitties ">
          {#each data.kittens as kitten (kitten.id)}
          <div class="card h-42 w-48 ml-12 my-3 hover:scale-110 transition ease-out duration-450">
            <img src= "{kitten.url}" alt="cat_img" class="h-[80%] w-[100%] object-fit">
            <div class="m-2">
              <span class="block text-grey-500 text-lg">Name: {kitten.id}</span>
              <span class="block text-grey-500 text-sm">{kitten.breeds[0].name}</span>
            </div>
          </div>
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