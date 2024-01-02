<script>
	import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-svelte';
</script>

<footer class="bg-gray-900" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<img class="h-7" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Company name" />
				<p class="text-sm leading-6 text-gray-300">
					Making the world a better place through constructing elegant hierarchies.
				</p>
				<div class="flex space-x-6">
					<a href="#" class="text-gray-500 hover:text-gray-400">
						<span class="sr-only">Facebook</span>
						<Facebook />
					</a>
					<a href="#" class="text-gray-500 hover:text-gray-400">
						<span class="sr-only">Instagram</span>
						<Instagram />
					</a>
					<a href="#" class="text-gray-500 hover:text-gray-400">
						<span class="sr-only">Twitter</span>
						<Twitter />
					</a>
					<a href="#" class="text-gray-500 hover:text-gray-400">
						<span class="sr-only">LinkedIn</span>
						<Linkedin />
					</a>
				</div>
			</div>
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-white">Solutions</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Marketing</a>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">E-Commerce</a>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">SEO</a>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Social Media Management</a>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Pricing</a>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Documentation</a>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Guides</a>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">API Status</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="/about" class="text-sm leading-6 text-gray-300 hover:text-white">About</a>
							</li>
							<li>
								<a href="/blog" class="text-sm leading-6 text-gray-300 hover:text-white">Blog</a>
							</li>
							<li>
								<a href="/jobs" class="text-sm leading-6 text-gray-300 hover:text-white">Jobs</a>
							</li>
							<li>
								<a href="/press" class="text-sm leading-6 text-gray-300 hover:text-white">Press</a>
							</li>
							<li>
								<a href="/partners" class="text-sm leading-6 text-gray-300 hover:text-white">Partners</a>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
						<ul role="list" class="mt-6 space-y-4">
							<!-- <li>
								<a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Claim</a>
							</li> -->
							<li>
								<a href="/privacy-policy" class="text-sm leading-6 text-gray-300 hover:text-white">Privacy</a>
							</li>
							<!-- <li>
								<a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Terms</a>
							</li> -->
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-gray-400">&copy; 2020 Your Company, Inc. All rights reserved.</p>
		</div>
	</div>
</footer>
