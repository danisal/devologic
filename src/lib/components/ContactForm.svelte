<script lang="ts">
	export let name: string;
	export let namePlaceholder: string;
	export let subject: string;
	export let subjectPlaceholder: string;
	export let message: string;
	export let messagePlaceholder: string;
	export let button: string;
</script>

<form class="mx-auto mt-4 flex w-screen max-w-xs flex-col gap-3 text-xl accent-green-300" method="POST">
	<label>
		{name}
		<input
			class="placeholder:text-md block w-full rounded bg-slate-700 p-3 text-sm font-normal text-slate-200 placeholder:italic placeholder:text-slate-500"
			name="name"
			placeholder={namePlaceholder}
			required
			type="text"
		/>
	</label>
	<label>
		Email
		<input
			class="placeholder:text-md block w-full rounded bg-slate-700 p-3 text-sm font-normal text-slate-200 placeholder:italic placeholder:text-slate-500"
			name="email"
			placeholder="jane@doe.com"
			required
			type="email"
		/>
	</label>
	<label>
		{subject}
		<input
			class="placeholder:text-md block w-full rounded bg-slate-700 p-3 text-sm font-normal text-slate-200 placeholder:italic placeholder:text-slate-500"
			name="subject"
			placeholder={subjectPlaceholder}
			required
			type="text"
		/>
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
		/>
	</label>
	<button
		class="group rounded bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 py-2 transition-colors delay-300 ease-in  hover:from-purple-600 hover:to-green-300  hover:shadow focus:from-purple-600 focus:to-green-300 focus-visible:shadow"
		type="submit"
		><span class="text-lg font-normal text-fuchsia-900 group-hover:text-green-300 group-focus:text-green-300"
			>{button}</span
		></button
	>
</form>
