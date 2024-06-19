<script lang="ts">
	export let error: string | undefined;
	export let message: string = '';
</script>

<span
	class={`mt-2.5 rounded bg-red-50 p-1 text-xs font-normal text-red-700 ${Boolean(error) ? 'inline-block' : 'hidden'}`}
>
	{error ?? message}
</span>
