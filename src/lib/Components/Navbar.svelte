<script lang="ts">
    import { page } from '$app/stores';
    let burger: boolean = false;
</script>
<nav class="z-[10] text-right w-full min-h-fit fixed">
    <div class="flex justify-between items-center rounded-xl bg-[#262626] p-4">
        <button class="relative" on:click={()=>{ burger = !burger }} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
            <h1 class="text-5xl font-bold border-b border-gray-600">
                <a href="/" class="absolute left-20 top-9 max-sm:top-5 text-orange-500 hover:text-orange-400">KittenHub</a>
            </h1>      
        <div class="flex justify-end">
            <a href="#" class="cool_button ml-2 hover:bg-primary-100 hover:text-secondary-100 hover:scale-110 transition ease-out duration-450">Log in <img src="animal-shelter.png" alt="black cat sitting" class="w-full h-12 max-sm:h-6 object-cover"></a>
            <a href="#" class="cool_button ml-2 hover:bg-primary-100 hover:text-secondary-100 hover:scale-110 transition ease-out duration-450">Sign up <img src="black-cat.png" alt="black cat walking" class="w-full h-12 max-sm:h-6 object-cover"></a>
        </div>    </div>
    <div class="{burger === true ? "block" : "hidden"} flex justify-center md:w-1/4 sm:w-1/2 bg-[#262626] text-white opacity-70 rounded-full">
        <ul>
            <li class="py-1 hover:text-orange-400">
                <a href="/" class:active={$page.url.pathname == '/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 inline-block">
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                <span>Home</span>  
             </a>
            </li>
            <li class="py-1 hover:text-orange-400">
                <a href="/about" class:active={$page.url.pathname == '/about'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 inline-block">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                    </svg>            
            <span>About</span>
                </a>
            </li>
        <li class="py-1 hover:text-orange-400">
          <a href="/contact" class:active={$page.url.pathname == '/contact'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 inline-block">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>                  
            <span>Contact</span>
          </a>
        </li>
        <li class="py-1 hover:text-orange-400">
            <a href="/player" class:active={$page.url.pathname == '/player'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
              </svg>
              <span>Player</span>
            </a>
          </li>
      </ul>
    </div>
</nav>