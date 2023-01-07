<script lang="ts">
	export let name: string;
	export let namePlaceholder: string;
	export let subject: string;
	export let subjectPlaceholder: string;
	export let message: string;
	export let messagePlaceholder: string;
</script>

<form class="flex flex-col gap-3 max-w-xs w-screen accent-fuchsia-400" method="POST">
	<label>
		{name}
		<input
			class="block placeholder:italic placeholder:text-slate-300 placeholder:text-md px-2 py-1 w-full rounded text-sm"
			name="name"
			placeholder={namePlaceholder}
			required
			type="text"
		/>
	</label>
	<label>
		Email
		<input
			class="block placeholder:italic placeholder:text-slate-300 placeholder:text-md px-2 py-1 w-full rounded text-sm"
			name="email"
			placeholder="jane@doe.com"
			required
			type="email"
		/>
	</label>
	<label>
		{subject}
		<input
			class="block placeholder:italic placeholder:text-slate-300 placeholder:text-md px-2 py-1 w-full rounded text-sm"
			name="subject"
			placeholder={subjectPlaceholder}
			required
			type="text"
		/>
	</label>
	<label>
		{message}
		<textarea
			class="placeholder:italic placeholder:text-slate-300 placeholder:text-md px-2 py-1 w-full rounded text-sm"
			id="message"
			name="message"
			placeholder={messagePlaceholder}
			required
			rows="6"
		/>
	</label>
	<button class="bg-fuchsia-400 text-fuchsia-800 rounded hover:shadow focus-visible:shadow" type="submit">Send</button>
</form>
