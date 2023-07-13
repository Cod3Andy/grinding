<script lang="ts">
    let burger: boolean = false;
</script>
<nav class="z-[10] text-right w-full min-h-fit fixed">
    <div class="bg-[#262626] flex justify-between items-center rounded-xl p-4">
        <button class="" on:click={()=>{ burger = !burger }} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
            <h1 class="text-5xl font-bold border-b border-gray-600">
                <a href="/" class="text-orange-500 hover:text-orange-400">KittenHub</a>
            </h1>      
        <div class="mb-3">
            <div class="relative my-4 flex w-full flex-wrap items-stretch">
              <input type="search"
                class="relative m-0 -mr-0.5 block w-full min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-primary outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-primary focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary scale-120"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1" />
              <button
                class="absolute z-[3] flex items-center rounded-full bg-primary right-0 top-0 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg hover:scale-110"
                type="button"
                id="button-addon1"
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
          </div>
        <div class="flex justify-end">
            <a href="#" class="button ml-2 text-primary border-primary md:border-2 hover:bg-primary hover:text-secondary-100 hover:scale-110 transition ease-out duration-450">Log in <img src="animal-shelter.png" alt="black cat sitting" class="w-full h-12 max-sm:h-6 object-cover"></a>
            <a href="#" class="button ml-2 text-primary border-primary md:border-2 hover:bg-primary hover:text-secondary-100 hover:scale-110 transition ease-out duration-450">Sign up <img src="black-cat.png" alt="black cat walking" class="w-full h-12 max-sm:h-6 object-cover"></a>
        </div>    </div>
    <div class="{burger === true ? "block" : "hidden"} flex justify-center md:w-1/4 sm:w-1/2 bg-[#262626] text-white opacity-70 rounded-full">
        <ul>
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
    </div>
</nav>