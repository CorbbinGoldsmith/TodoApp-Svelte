<script>

import { Container, Section, Box, Flex, Grow, Space, List } from "$lib/components";
import { _app } from "$lib/store/store.js";

let app = {}

_app.subscribe((value)=>{
	app = value;
})

function handleToggleEdit() {
	app.editMode = !app.editMode;
	_app.update(()=>{return app});
}

</script>

<Container>
	<Section>
		<Flex class="gap-2 items-center">
			<Box size="lg">
				<Space>
					<Flex class="w-[450px] items-center gap-4 ">
						<Grow>
							<h1 class="font-bold text-lg">My shopping list{app?.editMode ? "*" : ""}</h1>
						</Grow>
						<div>
							<button on:click={handleToggleEdit} class:text-gray-500={!app.editMode} class:text-blue-600={app.editMode} class="font-bold ">{app?.editMode ? "Save" : "Edit"}</button>

						</div>
					</Flex>
					<Box>
						<List />

					</Box>
				</Space>
			</Box>
		</Flex>
	</Section>
</Container>