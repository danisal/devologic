<script lang="ts">
	import type { ActionData, PageData } from './$houdini';
	import toast, { Toaster } from 'svelte-french-toast';
	import Error from '$lib/components/Error.svelte';

	export let data: PageData;
	export let form: ActionData;
	$: ({ ContactPage, lang } = data);
	$: ({ heading, paragraph, firstName, lastName, email, message, phoneNumber, submitButton } =
		$ContactPage.data?.contact ?? {});
	const enSuccessMessage =
		'Thank you for submitting your contact form. We have received your inquiry and will respond to you as soon as possible';
	const ptSuccessMessage =
		'Obrigado por enviar o seu formulário de contacto. Recebemos o seu pedido e responder-lhe-emos o mais rapidamente possível';

	$: if (form?.success) {
		console.log('submitted');
		toast.success(lang === 'en' ? enSuccessMessage : ptSuccessMessage, {
			position: 'top-center',
			duration: 15_000,
			style: 'background-color: #111827;color:#f9fafb;',
		});
	}
</script>

<svelte:head>
	<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<Toaster />

{#if heading}
	<div class="relative isolate bg-white">
		<div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
			<div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
				<div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
					<div
						class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"
					>
						<svg
							class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
							aria-hidden="true"
						>
							<defs>
								<pattern
									id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
									width="200"
									height="200"
									x="100%"
									y="-1"
									patternUnits="userSpaceOnUse"
								>
									<path d="M130 200V.5M.5 .5H200" fill="none" />
								</pattern>
							</defs>
							<rect width="100%" height="100%" stroke-width="0" fill="white" />
							<svg x="100%" y="-1" class="overflow-visible fill-gray-50">
								<path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
							</svg>
							<rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
						</svg>
					</div>
					<h2 class="text-3xl font-bold tracking-tight text-gray-900">{heading}</h2>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						{paragraph}
					</p>
				</div>
			</div>
			<form method="POST" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
				<div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
					<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">{firstName}</label>
							<div class="mt-2.5">
								<input
									required
									type="text"
									name="firstName"
									id="firstName"
									autocomplete="given-name"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-east-bay-600 sm:text-sm sm:leading-6"
									value="Daniel"
								/>
							</div>
							<Error error={form?.errors?.firstName?.[0]} />
						</div>
						<div>
							<label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">{lastName}</label>
							<div class="mt-2.5">
								<input
									required
									type="text"
									name="lastName"
									id="lastName"
									autocomplete="family-name"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-east-bay-600 sm:text-sm sm:leading-6"
									value="Salvado"
								/>
							</div>
							<Error error={form?.errors?.lastName?.[0]} />
						</div>
						<div class="sm:col-span-2">
							<label for="email" class="block text-sm font-semibold leading-6 text-gray-900">{email}</label>
							<div class="mt-2.5">
								<input
									required
									type="email"
									name="email"
									id="email"
									autocomplete="email"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-east-bay-600 sm:text-sm sm:leading-6"
									value="daniel.salvado@gmail.com"
								/>
							</div>
							<Error error={form?.errors?.email?.[0]} />
						</div>
						<div class="sm:col-span-2">
							<label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">{phoneNumber}</label
							>
							<div class="mt-2.5">
								<input
									required
									type="tel"
									name="phoneNumber"
									id="phoneNumber"
									autocomplete="tel"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-east-bay-600 sm:text-sm sm:leading-6"
									value="964268468"
								/>
							</div>
							<Error error={form?.errors?.phoneNumber?.[0]} />
						</div>
						<div class="sm:col-span-2">
							<label for="message" class="block text-sm font-semibold leading-6 text-gray-900">{message}</label>
							<div class="mt-2.5">
								<textarea
									required
									name="message"
									id="message"
									rows="4"
									class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-east-bay-600 sm:text-sm sm:leading-6"
								></textarea>
							</div>
							<Error error={form?.errors?.message?.[0]} />
						</div>
					</div>
					<div class="mt-8 flex justify-end">
						<button
							type="submit"
							class="rounded-md bg-east-bay-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-east-bay-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-east-bay-600"
							>{submitButton}</button
						>
					</div>
				</div>
			</form>
		</div>
	</div>
{/if}
