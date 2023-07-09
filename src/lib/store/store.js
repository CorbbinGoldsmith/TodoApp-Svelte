import {writable,get} from "svelte/store"
import { browser } from "$app/environment"

const app_name = "todo_app-202306"
const _default = {
			date_created : Date.now(),
			date_updated : Date.now(),
			editMode : false,
			items : [{
				name: "test item",
				checked: false,
				date_added : 1688740700672,
				date_updated : 1688740700672,
				date_deleted : null,
			}],
			trash : [] // doesn't really delete items
		}

export function load() {
	if (!browser) {
		return _default
	}
	if (!(app_name in localStorage)) {
		return _default
	}
	return JSON.parse(localStorage[app_name])
}

export let _app = writable(load());


export function save() {
	_app.update(()=>{
		let app = get(_app);
		app.date_updated = Date.now();
		localStorage[app_name] = JSON.stringify(app);
		return app;
	})
}



