<script lang="ts">
	import { enhance } from '$app/forms';

	export let name: string;
	export let namePlaceholder: string;
	export let subject: string;
	export let subjectPlaceholder: string;
	export let message: string;
	export let messagePlaceholder: string;
	export let button: string;
	export let errors:
		| {
				name: string[];
				email: string[];
				subject: string[];
				message: string[];
		  }
		| undefined;
	export let data:
		| {
				name: string;
				email: string;
				subject: string;
				message: string;
		  }
		| undefined;
</script>

<form
	id="contact-form"
	class="mx-auto mt-4 flex w-screen max-w-xs flex-col gap-3 text-xl accent-green-300 md:max-w-xl"
	method="POST"
	use:enhance
	action="?/contact"
>
	<label>
		{name}
		<input
			class="placeholder:text-md block w-full rounded bg-slate-700 p-3 text-sm font-normal text-slate-200 placeholder:italic placeholder:text-slate-500"
			name="name"
			placeholder={namePlaceholder}
			required
			type="text"
			value={data?.name || ''}
		/>
		{#if errors?.name}
			<span class="rounded bg-red-50 p-1 text-xs font-normal text-red-700">{errors.name[0]}</span>
		{/if}
	</label>
	<label>
		Email
		<input
			class="placeholder:text-md block w-full rounded bg-slate-700 p-3 text-sm font-normal text-slate-200 placeholder:italic placeholder:text-slate-500"
			name="email"
			placeholder="jane@doe.com"
			required
			type="email"
			value={data?.email || ''}
		/>
		{#if errors?.email}
			<span class="rounded bg-red-50 p-1 text-xs font-normal text-red-700">{errors.email[0]}</span>
		{/if}
	</label>
	<label>
		{subject}
		<input
			class="placeholder:text-md block w-full rounded bg-slate-700 p-3 text-sm font-normal text-slate-200 placeholder:italic placeholder:text-slate-500"
			name="subject"
			placeholder={subjectPlaceholder}
			required
			type="text"
			value={data?.subject || ''}
		/>
		{#if errors?.subject}
			<span class="rounded bg-red-50 p-1 text-xs font-normal text-red-700">{errors.subject[0]}</span>
		{/if}
	</label>
	<label>
		{message}
		<textarea
			class="placeholder:text-md w-full rounded bg-slate-700 p-3 text-sm font-normal text-slate-200 placeholder:italic placeholder:text-slate-500"
			id="message"
			name="message"
			placeholder={messagePlaceholder}
			required
			rows="6"
			value={data?.message || ''}
		/>
		{#if errors?.message}
			<span class="rounded bg-red-50 p-1 text-xs font-normal text-red-700">{errors.message[0]}</span>
		{/if}
	</label>
	<button
		class="group rounded bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 py-2 transition-colors delay-300 ease-in  hover:from-purple-600 hover:to-green-300  hover:shadow focus:from-purple-600 focus:to-green-300 focus-visible:shadow"
		type="submit"
		><span class="text-lg font-normal text-fuchsia-900 group-hover:text-green-300 group-focus:text-green-300"
			>{button}</span
		></button
	>
</form>
