<script>

import { _app } from "$lib/store/store.js";
import ListItem from "./ListItem.svelte";

let app = {}

_app.subscribe((value)=>{
	app = value;
})

function update() {
	_app.update(()=>{ return app })
}

function handleSubmit() {
	app.items.push({
		name: inp.value,
		date_added: Date.now(),
		date_updated: Date.now(),
		date_deleted: null,
		checked: true
	})
	inp.value = "";
	setTimeout(()=> inp.focus(),4)
	update();
}

let inp = null;

</script>

<div>
	<div>
		{#each app.items as item}
			<ListItem 
				bind:editMode={app.editMode}
				checked={item.checked} 
				name={item.name} 
				action={()=>{item.checked = !item.checked; update();}}
				deleteAction={()=>{
					let idx = app.items.indexOf(item);
					app.items[idx].date_deleted = Date.now();
					app.trash.push(app.items[idx])
					app.items.splice(idx,1);
					update();
				}}
			/> 
		{/each }
	</div>
	<div>
		{#if app.editMode}
			<form class="" on:submit={handleSubmit}>
				<input bind:this={inp} type="text" name="" placeholder="Add an item" class="p-2 outline-none focus:border-b w-full" >
			</form>
		{/if}
	</div>
</div>