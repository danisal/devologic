<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import { cx } from 'class-variance-authority';
	import toast from 'svelte-french-toast';
	import Error from './Error.svelte';

	export let button: string;
	export let message: string;
	export let messagePlaceholder: string;
	export let name: string;
	export let namePlaceholder: string;
	export let subject: string;
	export let subjectPlaceholder: string;
	export let successToast: string;
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

	let loading: boolean = false;

	function handleSubmit() {
		loading = true;
		return async ({ result, update }: { result: ActionResult }) => {
			switch (result.type) {
				case 'success':
					toast.success(successToast, {
						position: 'top-right',
						duration: 7000,
					});
					await update();
					break;

				case 'error':
					toast.error(result.error.message);
					break;

				default:
					await update();
					break;
			}
			loading = false;
		};
	}
</script>

<form
	action="?/contact"
	class="mx-auto mt-4 flex w-screen max-w-xs flex-col gap-3 text-xl accent-green-300 md:max-w-xl"
	id="contact-form"
	method="POST"
	use:enhance={handleSubmit}
>
	<fieldset class="flex flex-col gap-3 text-xl" disabled={loading}>
		<label>
			{name}
			<input
				class={cx(
					'block w-full rounded border border-slate-700 bg-slate-700 p-3 text-sm font-normal text-slate-200',
					'focus:border-slate-300 focus:outline-none',
					'placeholder:text-md placeholder:italic placeholder:text-slate-500',
					'disabled:cursor-not-allowed',
					'valid:[&:not(:placeholder-shown)]:border-green-300 [&:not(:placeholder-shown):not(:focus):invalid~span]:inline-block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'
				)}
				name="name"
				minlength="2"
				maxlength="64"
				placeholder={namePlaceholder}
				required
				type="text"
				value={data?.name || ''}
			/>
		</label>
		<Error error={errors?.name?.[0]} message={errors?.name?.[0]} />
		<label>
			Email
			<input
				class={cx(
					'block w-full rounded border border-slate-700 bg-slate-700 p-3 text-sm font-normal text-slate-200',
					'focus:border-slate-300 focus:outline-none',
					'placeholder:text-md placeholder:italic placeholder:text-slate-500',
					'disabled:cursor-not-allowed',
					'valid:[&:not(:placeholder-shown)]:border-green-300 [&:not(:placeholder-shown):not(:focus):invalid~span]:inline-block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'
				)}
				name="email"
				pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]&#123;2,}$"
				placeholder="jane@doe.com"
				required
				type="email"
				value={data?.email || ''}
			/>
		</label>
		<Error error={errors?.email?.[0]} message={errors?.email?.[0]} />
		<label>
			{subject}
			<input
				class={cx(
					'block w-full rounded border border-slate-700 bg-slate-700 p-3 text-sm font-normal text-slate-200',
					'focus:border-slate-300 focus:outline-none',
					'placeholder:text-md placeholder:italic placeholder:text-slate-500',
					'disabled:cursor-not-allowed',
					'valid:[&:not(:placeholder-shown)]:border-green-300 [&:not(:placeholder-shown):not(:focus):invalid~span]:inline-block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'
				)}
				name="subject"
				minlength="2"
				maxlength="64"
				placeholder={subjectPlaceholder}
				required
				type="text"
				value={data?.subject || ''}
			/>
		</label>
		<Error error={errors?.subject?.[0]} message={errors?.subject?.[0]} />
		<label>
			{message}
			<textarea
				class={cx(
					'block w-full rounded border border-slate-700 bg-slate-700 p-3 text-sm font-normal text-slate-200',
					'focus:border-slate-300 focus:outline-none',
					'placeholder:text-md placeholder:italic placeholder:text-slate-500',
					'disabled:cursor-not-allowed',
					'valid:[&:not(:placeholder-shown)]:border-green-300 [&:not(:placeholder-shown):not(:focus):invalid~span]:inline-block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'
				)}
				id="message"
				name="message"
				placeholder={messagePlaceholder}
				required
				rows="6"
				maxlength="500"
				minlength="10"
				value={data?.message || ''}
			/>
		</label>
		<Error error={errors?.message?.[0]} message={errors?.message?.[0]} />
		<div class="cf-turnstile" data-sitekey="0x4AAAAAAACLeJAuRkOu75JG" data-callback="javascriptCallback" />
		<button
			class={cx(
				'group rounded bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 py-2 transition-colors delay-300 ease-in',
				'enabled:hover:from-purple-600 enabled:hover:to-green-300  enabled:hover:shadow',
				'focus:from-purple-600 focus:to-green-300 focus-visible:shadow',
				'disabled:cursor-not-allowed'
			)}
			type="submit"
			><span
				class={cx(
					'text-lg font-normal text-fuchsia-900',
					'enabled:group-hover:text-green-300',
					'enabled:group-focus:text-green-300'
				)}>{button}</span
			></button
		>
	</fieldset>
</form>
