<script lang="ts">
	export let name: string;
	export let namePlaceholder: string;
	export let subject: string;
	export let subjectPlaceholder: string;
	export let message: string;
	export let messagePlaceholder: string;
</script>

<form class="flex flex-col gap-3 max-w-xs w-screen accent-purple-600 text-xl mx-auto" method="POST">
	<label>
		{name}
		<input
			class="block placeholder:italic placeholder:text-slate-300 placeholder:text-md px-2 py-2 w-full rounded text-sm"
			name="name"
			placeholder={namePlaceholder}
			required
			type="text"
		/>
	</label>
	<label>
		Email
		<input
			class="block placeholder:italic placeholder:text-slate-300 placeholder:text-md px-2 py-2 w-full rounded text-sm"
			name="email"
			placeholder="jane@doe.com"
			required
			type="email"
		/>
	</label>
	<label>
		{subject}
		<input
			class="block placeholder:italic placeholder:text-slate-300 placeholder:text-md px-2 py-2 w-full rounded text-sm"
			name="subject"
			placeholder={subjectPlaceholder}
			required
			type="text"
		/>
	</label>
	<label>
		{message}
		<textarea
			class="placeholder:italic placeholder:text-slate-300 placeholder:text-md px-2 py-2 w-full rounded text-sm"
			id="message"
			name="message"
			placeholder={messagePlaceholder}
			required
			rows="6"
		/>
	</label>
	<button
		class="rounded hover:shadow focus-visible:shadow py-2 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600"
		type="submit"><span class="text-fuchsia-900 text-lg">Send</span></button
	>
</form>
