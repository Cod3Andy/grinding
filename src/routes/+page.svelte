<script>
    import "../app.css";
	import Layout from "./+layout.svelte";
	import Burger from "./components/burger.svelte";
    import  burgerCheck from "./components/burger.svelte";
  </script>
  
  <slot />
<body class="text-orange-500 bg-gray-950 font-body">
    <div class="grid md:grid-cols-4">
      <div class="md:col-span-1 md:flex md:justify-end">
        <nav class="text-right md:fixed">
          <div class="flex justify-between items-center">
            <h1 class="text-5xl font-bold p-4 border-b border-gray-600">
              <a href="/" class="hover:text-orange-400">KittenHub</a>
            </h1>
            <div class="px-4 cursor-pointer md:hidden" id="burger">
                <button on:click={burgerCheck}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>                  
            </div>
          </div>
          <ul class="hidden md:block" id="menu">
            <li class="py-1 hover:text-orange-400">
              <a href="#" class="border-r-4 border-primary pr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 inline-block">
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                <span>Home</span>
                  
              </a>
            </li>
            <li class="py-1 hover:text-orange-400">
              <a href="#" class="border-r-4 border-gray-950 pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 inline-block">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                  </svg>
                  
                <span>About</span>
              </a>
            </li>
            <li class="py-1 hover:text-orange-400">
              <a href="#" class="border-r-4 border-gray-950 pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 inline-block">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>                  
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    
      <main class="px-15 py-5 md:col-span-3">
        <div class="flex justify-center md:justify-end">
          <a href="#" class="button text-primary border-primary md:border-2 hover:bg-primary hover:text-secondary-100 hover:scale-110 transition ease-out duration-450">Log in</a>
          <a href="#" class="button text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-secondary-100 hover:scale-110 transition ease-out duration-450">Sign up</a>
        </div>
  
        <header class="text-6xl px-10 font-bold py-2">
          <h2>Kittens</h2>
          <h3 class="text-3xl font-bold"><p>For Waytishniks</p></h3>
        </header>
  
        <div>
          <h4 class="font-bold mt-12 pb-2 border-b border-gray-600">Latest Kittens</h4>
    
          <div class="mt-8 ml-3 mr-3 grid lg:grid-cols-3 gap-5">
            <!-- cards go here -->
            <div class="card hover:scale-110 transition ease-out duration-450"> 
              <img src="src/img/deranged_cat.jpg" alt="Deranged Cat" class="w-full h-32 sm:h-48 object-cover">
              <div class="m-2">
                <span class="font-bold">Deranged Cat</span>
                <span class="block text-grey-500 text-sm">by Silly Billy</span>
              </div>
              <div class="badge">
                <span>6/10 ★</span>
              </div>
            </div>

              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="src/img/harald_cat.jpg" alt="Harald le Cat" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Harald le Cat</span>
                  <span class="block text-grey-500 text-sm">by Stock Image Memer</span>
                </div>
                <div class="badge">
                  <span>8/10 ★</span>
                </div>
              </div>

              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="src/img/toothbrush_cat.jpg" alt="Toothbrushing Kitty" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Kitty doesn't like tooth brushing</span>
                  <span class="block text-grey-500 text-sm">by 1/10 dentist</span>
                </div>
                <div class="badge">
                  <span>9/10 ★</span>
                </div>
              </div>

              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="src/img/smiling_cat.jpg" alt="Smiling Cat" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Smiling Cat</span>
                  <span class="block text-grey-500 text-sm">by Happy Inc</span>
                </div>
                <div class="badge">
                  <span>4/10 ★</span>
                </div>
              </div>

              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="src/img/screaming_cat.jpg" alt="Screaming Cat" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Screaming Cat</span>
                  <span class="block text-grey-500 text-sm">by LiterallyMe prod.</span>
                </div>
                <div class="badge">
                  <span>7/10 ★</span>
                </div>
              </div>

              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="src/img/crying_cat.jpg" alt="Crying Cat" class="w-full h-32 sm:h-48 object-cover">
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
                <img src="src/img/sneaky_puss.jpg" alt="Sneaky Puss" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Sneaky Puss</span>
                  <span class="block text-grey-500 text-sm">by Bolgrad Mafia LTD</span>
                </div>
                <div class="badge">
                  <span>11/10 ★</span>
                </div>
              </div>

              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="src/img/yelled_on_cat.jpg" alt="Yelled On Cat" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-2">
                  <span class="font-bold">Yelled On Cat</span>
                  <span class="block text-grey-500 text-sm">by Wholesome_100_Big_Chungus420</span>
                </div>
                <div class="badge">
                  <span>2/10 ★</span>
                </div>
              </div>

              <div class="card hover:scale-110 transition ease-out duration-450"> 
                <img src="src/img/sleepy_cat.png" alt="Sleepy Cat" class="w-full h-32 sm:h-48 object-cover">
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
  </body>
