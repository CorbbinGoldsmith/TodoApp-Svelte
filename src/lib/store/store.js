import {writable,get} from "svelte/store"

export let _app = writable({
	editMode : false,
	items : [{
		name: "test item",
		checked: false,
		date_added : 1688740700672,
		date_updated : 1688740700672,
		date_deleted : null,
	}],
	trash : [] // doesn't really delete items
})