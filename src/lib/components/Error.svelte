<script lang="ts">
	export let error: string | undefined;
	export let message: string;
</script>

<span class={`rounded bg-red-50 p-1 text-xs font-normal text-red-700 ${error ? 'inline-block' : 'hidden'}`}>
	{error ?? message}
</span>
