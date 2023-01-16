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
			class={[
				'block w-full rounded border border-slate-700 bg-slate-700 p-3 text-sm font-normal text-slate-200',
				'focus:border-slate-300 focus:outline-none',
				'placeholder:text-md placeholder:italic placeholder:text-slate-500',
				'valid:[&:not(:placeholder-shown)]:border-green-300 [&:not(:placeholder-shown):not(:focus):invalid~span]:inline-block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500',
			].join(' ')}
			name="name"
			minlength="2"
			maxlength="64"
			placeholder={namePlaceholder}
			required
			type="text"
			value={data?.name || ''}
		/>
		<span class="hidden rounded bg-red-50 p-1 text-xs font-normal text-red-700" class:inline-block={errors?.name}>
			{errors?.name[0] ?? 'Name should have between 2 and 64 characters'}
		</span>
	</label>
	<label>
		Email
		<input
			class={[
				'block w-full rounded border border-slate-700 bg-slate-700 p-3 text-sm font-normal text-slate-200',
				'focus:border-slate-300 focus:outline-none',
				'placeholder:text-md placeholder:italic placeholder:text-slate-500',
				'valid:[&:not(:placeholder-shown)]:border-green-300 [&:not(:placeholder-shown):not(:focus):invalid~span]:inline-block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500',
			].join(' ')}
			name="email"
			pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]&#123;2,}$"
			placeholder="jane@doe.com"
			required
			type="email"
			value={data?.email || ''}
		/>
		<span class="hidden rounded bg-red-50 p-1 text-xs font-normal text-red-700" class:inline-block={errors?.email}>
			{errors?.email[0] ?? 'Please enter a valid email address'}
		</span>
	</label>
	<label>
		{subject}
		<input
			class={[
				'block w-full rounded border border-slate-700 bg-slate-700 p-3 text-sm font-normal text-slate-200',
				'focus:border-slate-300 focus:outline-none',
				'placeholder:text-md placeholder:italic placeholder:text-slate-500',
				'valid:[&:not(:placeholder-shown)]:border-green-300 [&:not(:placeholder-shown):not(:focus):invalid~span]:inline-block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500',
			].join(' ')}
			name="subject"
			minlength="2"
			maxlength="64"
			placeholder={subjectPlaceholder}
			required
			type="text"
			value={data?.subject || ''}
		/>
		<span class="hidden rounded bg-red-50 p-1 text-xs font-normal text-red-700" class:inline-block={errors?.subject}>
			{errors?.subject[0] ?? 'Subject should have between 2 and 64 characters'}
		</span>
	</label>
	<label>
		{message}
		<textarea
			class={[
				'block w-full rounded border border-slate-700 bg-slate-700 p-3 text-sm font-normal text-slate-200',
				'focus:border-slate-300 focus:outline-none',
				'placeholder:text-md placeholder:italic placeholder:text-slate-500',
				'valid:[&:not(:placeholder-shown)]:border-green-300 [&:not(:placeholder-shown):not(:focus):invalid~span]:inline-block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500',
			].join(' ')}
			id="message"
			name="message"
			placeholder={messagePlaceholder}
			required
			rows="6"
			maxlength="500"
			minlength="10"
			value={data?.message || ''}
		/>
		<span class="hidden rounded bg-red-50 p-1 text-xs font-normal text-red-700" class:inline-block={errors?.message}>
			{errors?.message[0] ?? 'Message should have between 10 and 500 characters'}
		</span>
	</label>
	<button
		class="group rounded bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 py-2 transition-colors delay-300 ease-in  hover:from-purple-600 hover:to-green-300  hover:shadow focus:from-purple-600 focus:to-green-300 focus-visible:shadow"
		type="submit"
		><span class="text-lg font-normal text-fuchsia-900 group-hover:text-green-300 group-focus:text-green-300"
			>{button}</span
		></button
	>
</form>
