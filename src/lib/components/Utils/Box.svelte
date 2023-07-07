<script>

const sizes = {
	sm: "p-1",
	md: "p-2",
	lg: "p-4",
	xl: "p-8",
	"2xl": "p-16",
}

export let size = "md";

</script>

<div class={`${sizes[size]} border rounded-md`} >
	<slot name=""></slot>
</div>