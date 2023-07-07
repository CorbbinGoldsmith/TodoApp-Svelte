<script>

import { Flex,Grow } from "$lib/components";

export let checked = false;
export let name = "TEST";
export let action = () => {};
export let deleteAction = () => {};
export let editMode = false;


</script>

<div class="rounded">
	<button on:click={action} class="w-full text-left">
		<Flex class="p-2 items-center gap-2 rounded-md">
			<div class={`w-5 h-5 rounded-full ${ checked ? "bg-yellow-500 border border-2 border-white shadow-[0px_3px_4px_rgba(0,0,0,0.3)]" : "bg-gray-200 border"}`}>
				
			</div>
			<Grow>
				<div class:text-gray-600={!checked}>{name}</div>
			</Grow>
			{#if editMode}
				<button on:click={deleteAction} class="px-4 bg-red-600 hover:bg-red-500 text-white">
					X
				</button>
			{/if}
		</Flex>
	</button>
</div>