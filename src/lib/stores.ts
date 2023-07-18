import {writable, type Writable} from "svelte/store";
import type { KittenAPI } from "../routes/+page";
export const likedCats: Writable<KittenAPI[]> = writable([]);