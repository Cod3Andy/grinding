<script lang="ts">
	import type { KittenAPI } from "./+page";
    import {page} from "$app/stores";
    import {goto} from "$app/navigation"
    export let kitten : KittenAPI;
    export let isInteractive: boolean = false;
    const updateSearchParams = (key: string, value: string) => {
        const searchParams = new URLSearchParams($page.url.searchParams);
        searchParams.set(key, value);
        goto(`?&${searchParams.toString()}`);
}
</script>
<div class="kitties ">
    <div class="card h-42 w-48 ml-12 my-3 hover:scale-110 transition ease-out duration-450">
      <div on:click={() => isInteractive ? updateSearchParams('CatID',kitten.id) : () => {}}>
        <img src= "{kitten.url}" alt="cat_img" class="h-[80%] w-[100%] object-fit">
        <div class="m-2">
            <span class="block text-grey-500 text-base">Name: {kitten.id}</span>
            <span class="block text-grey-500 text-sm">Breed: {kitten.breeds_name}</span>
          </div>
      </div>
      {#if isInteractive}
        <button class="cool_button" on:click={() => updateSearchParams('CatID2',kitten.id)}>
            Add Kitten 2
        </button>
      {/if}
    </div>
  </div>