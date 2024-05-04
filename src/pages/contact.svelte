<script lang="ts">
	import { Building2, Mail, Phone } from 'lucide-svelte';

	export let heading: string;
	export let paragraph: string;
	export let firstName: string;
	export let lastName: string;
	export let email: string;
	export let message: string;
	export let phoneNumber: string;
	export let submitButton: string;
</script>

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
				<dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
					<div class="flex gap-x-4">
						<dt class="flex-none">
							<span class="sr-only">Address</span>
							<Building2 strokeWidth="1.5" />
						</dt>
						<dd>545 Mavis Island<br />Chicago, IL 99191</dd>
					</div>
					<div class="flex gap-x-4">
						<dt class="flex-none">
							<span class="sr-only">Telephone</span>
							<Phone strokeWidth="1.5" />
						</dt>
						<dd><a class="hover:text-gray-900" href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a></dd>
					</div>
					<div class="flex gap-x-4">
						<dt class="flex-none">
							<span class="sr-only">Email</span>
							<Mail strokeWidth="1.5" />
						</dt>
						<dd><a class="hover:text-gray-900" href="mailto:hello@example.com">hello@example.com</a></dd>
					</div>
				</dl>
			</div>
		</div>
		<form action="#" method="POST" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
			<div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
				<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					<div>
						<label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">{firstName}</label>
						<div class="mt-2.5">
							<input
								type="text"
								name="first-name"
								id="first-name"
								autocomplete="given-name"
								class="focus:ring-east-bay-600 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">{lastName}</label>
						<div class="mt-2.5">
							<input
								type="text"
								name="last-name"
								id="last-name"
								autocomplete="family-name"
								class="focus:ring-east-bay-600 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="email" class="block text-sm font-semibold leading-6 text-gray-900">{email}</label>
						<div class="mt-2.5">
							<input
								type="email"
								name="email"
								id="email"
								autocomplete="email"
								class="focus:ring-east-bay-600 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">{phoneNumber}</label>
						<div class="mt-2.5">
							<input
								type="tel"
								name="phone-number"
								id="phone-number"
								autocomplete="tel"
								class="focus:ring-east-bay-600 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="message" class="block text-sm font-semibold leading-6 text-gray-900">{message}</label>
						<div class="mt-2.5">
							<textarea
								name="message"
								id="message"
								rows="4"
								class="focus:ring-east-bay-600 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
							></textarea>
						</div>
					</div>
				</div>
				<div class="mt-8 flex justify-end">
					<button
						type="submit"
						class="bg-east-bay-600 hover:bg-east-bay-500 focus-visible:outline-east-bay-600 rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
						>{submitButton}</button
					>
				</div>
			</div>
		</form>
	</div>
</div>
