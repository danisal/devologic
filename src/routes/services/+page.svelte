<script>
	import CtaSection from '$lib/components/CTASection.svelte';
</script>

<div class="bg-gray-900">
	<div class="relative isolate overflow-hidden pt-14">
		<img
			src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
			alt=""
			class="absolute inset-0 -z-10 h-full w-full object-cover"
		/>
		<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
			<div
				class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div>
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<!-- <div class="hidden sm:mb-8 sm:flex sm:justify-center">
				<div
					class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
				>
					Announcing our next round of funding. <a href="#" class="font-semibold text-white"
						><span class="absolute inset-0" aria-hidden="true"></span>Read more
						<span aria-hidden="true">&rarr;</span></a
					>
				</div>
			</div> -->
			<div class="text-center">
				<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
					Unleashing the Power of Our Expert Services
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					Elevate Your Online Presence with Our Tailored Solutions in Web Design, E-commerce, SEO, and Social Media
					Management
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="#"
						class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
						>Get started</a
					>
					<a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
		</div>
		<div
			class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div>
	</div>
</div>

<!-- Marketing -->
<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base font-semibold leading-7 text-indigo-600">Marketing</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				A website is more than just an online presence
			</p>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Transforming visions into compelling digital experiences, our digital agency specializes in crafting dynamic
				marketing websites that captivate your audience and drive results. We understand that a website is more than
				just an online presence; it's a powerful tool for brand storytelling, lead generation, and customer engagement.
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
						<svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
								clip-rule="evenodd"
							/>
						</svg>
						Strategic Design
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
						<p class="flex-auto">
							Our team combines aesthetics with functionality, ensuring your website not only looks stunning but also
							delivers a seamless user experience.
						</p>
						<p class="mt-6">
							<a href="/blog/strategic-design" class="text-sm font-semibold leading-6 text-indigo-600"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
						<svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
								clip-rule="evenodd"
							/>
						</svg>
						Responsive Development
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
						<p class="flex-auto">
							We build websites that adapt to various devices, providing a consistent and engaging experience across
							desktops, tablets, and smartphones.
						</p>
						<p class="mt-6">
							<a href="/blog/responsive-development" class="text-sm font-semibold leading-6 text-indigo-600"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
						<svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
								clip-rule="evenodd"
							/>
						</svg>
						Content Optimization
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
						<p class="flex-auto">
							From compelling copy to visually striking multimedia elements, we optimize every aspect of your content
							for maximum impact and audience retention.
						</p>
						<p class="mt-6">
							<a href="/blog/content-optimization" class="text-sm font-semibold leading-6 text-indigo-600"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
						<svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
								clip-rule="evenodd"
							/>
						</svg>
						Conversion Focus
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
						<p class="flex-auto">
							Our approach is centered around conversion optimization, turning website visitors into loyal customers
							through strategically placed calls-to-action and user-friendly interfaces.
						</p>
						<p class="mt-6">
							<a href="/blog/conversion-focus" class="text-sm font-semibold leading-6 text-indigo-600"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
						<svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
								clip-rule="evenodd"
							/>
						</svg>
						Analytics Integration
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
						<p class="flex-auto">
							Leverage data-driven insights with integrated analytics tools to track performance, measure success, and
							refine your digital strategy.
						</p>
						<p class="mt-6">
							<a href="/blog/analytics-integration" class="text-sm font-semibold leading-6 text-indigo-600"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
			</dl>
		</div>
	</div>
</div>

<!-- E-Commerce -->
<div class="bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base font-semibold leading-7 text-indigo-400">E-Commerce</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Seamless and secure shopping experience
			</p>
			<p class="mt-6 text-lg leading-8 text-gray-300">
				Empower your business to thrive in the digital marketplace with our expertly crafted e-commerce solutions. We
				specialize in building online stores that not only showcase your products but also deliver a seamless and secure
				shopping experience.
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
						<svg class="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
								clip-rule="evenodd"
							/>
						</svg>
						Customized Solutions
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
						<p class="flex-auto">
							Tailored to your unique business needs, our e-commerce development ensures a user-friendly interface,
							intuitive navigation, and a secure checkout process.
						</p>
						<p class="mt-6">
							<a href="/blog/customized-solutions" class="text-sm font-semibold leading-6 text-indigo-400"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
						<svg class="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
								clip-rule="evenodd"
							/>
						</svg>
						Product Showcase
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
						<p class="flex-auto">
							We highlight your products with high-quality visuals and engaging descriptions, creating an immersive
							shopping experience for your customers.
						</p>
						<p class="mt-6">
							<a href="/blog/product-showcase" class="text-sm font-semibold leading-6 text-indigo-400"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
						<svg class="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
								clip-rule="evenodd"
							/>
						</svg>
						Payment Integration
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
						<p class="flex-auto">
							Seamlessly integrate secure payment gateways to facilitate smooth transactions, build customer trust, and
							encourage repeat business.
						</p>
						<p class="mt-6">
							<a href="/blog/payment-integration" class="text-sm font-semibold leading-6 text-indigo-400"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
						<svg class="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
								clip-rule="evenodd"
							/>
						</svg>
						Inventory Management
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
						<p class="flex-auto">
							Efficiently manage your product inventory with advanced tools that streamline the process and prevent
							over-selling or stockouts.
						</p>
						<p class="mt-6">
							<a href="/blog/inventory-management" class="text-sm font-semibold leading-6 text-indigo-400"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
						<svg class="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
								clip-rule="evenodd"
							/>
						</svg>
						Mobile Optimization
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
						<p class="flex-auto">
							Capture mobile shoppers with responsive design, ensuring a consistent and enjoyable shopping experience
							across all devices.
						</p>
						<p class="mt-6">
							<a href="/blog/mobile-optimization" class="text-sm font-semibold leading-6 text-indigo-400"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
			</dl>
		</div>
	</div>
</div>

<!-- SEO -->
<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base font-semibold leading-7 text-indigo-600">Search Engine Optimization</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Website's performance</p>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Maximize your online visibility and climb the search engine rankings with our comprehensive SEO content
				services. We employ a strategic and data-driven approach to enhance your website's performance and increase
				organic traffic.
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
						<svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
								clip-rule="evenodd"
							/>
						</svg>
						Keyword Research
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
						<p class="flex-auto">
							Identify and target the most relevant keywords in your industry to optimize content and improve search
							engine rankings.
						</p>
						<p class="mt-6">
							<a href="/blog/keyword-research" class="text-sm font-semibold leading-6 text-indigo-600"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
						<svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
								clip-rule="evenodd"
							/>
						</svg>
						On-Page SEO
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
						<p class="flex-auto">
							Fine-tune website elements, such as meta tags, headings, and content structure, to enhance visibility and
							improve search engine crawling.
						</p>
						<p class="mt-6">
							<a href="/blog/on-page-seo" class="text-sm font-semibold leading-6 text-indigo-600"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
						<svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
								clip-rule="evenodd"
							/>
						</svg>
						Content Creation
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
						<p class="flex-auto">
							Develop high-quality, SEO-friendly content that resonates with your target audience while adhering to the
							latest search engine algorithms.
						</p>
						<p class="mt-6">
							<a href="/blog/content-creation" class="text-sm font-semibold leading-6 text-indigo-600"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
						<svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
								clip-rule="evenodd"
							/>
						</svg>
						Link Building
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
						<p class="flex-auto">
							Implement a robust link-building strategy to enhance your website's authority and credibility in the eyes
							of search engines.
						</p>
						<p class="mt-6">
							<a href="/blog/link-building" class="text-sm font-semibold leading-6 text-indigo-600"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
						<svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
								clip-rule="evenodd"
							/>
						</svg>
						Performance Analytics
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
						<p class="flex-auto">
							Utilize advanced analytics tools to track SEO performance, identify opportunities for improvement, and
							measure the impact of your SEO strategy over time.
						</p>
						<p class="mt-6">
							<a href="/blog/performance-analytics" class="text-sm font-semibold leading-6 text-indigo-600"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
			</dl>
		</div>
	</div>
</div>

<!-- Social Media -->
<div class="bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base font-semibold leading-7 text-indigo-400">Social Media Management</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Meaningful engagements</p>
			<p class="mt-6 text-lg leading-8 text-gray-300">
				Elevate your brand's online presence and connect with your audience on a deeper level through our strategic
				social media management services. We understand that effective social media presence goes beyond posting
				content; it involves creating meaningful engagements, fostering community, and driving measurable results.
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
						<svg class="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
								clip-rule="evenodd"
							/>
						</svg>
						Content Strategy
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
						<p class="flex-auto">
							Our team develops a tailored content strategy aligned with your brand identity, ensuring a consistent and
							compelling narrative across all social media platforms.
						</p>
						<p class="mt-6">
							<a href="/blog/content-strategy" class="text-sm font-semibold leading-6 text-indigo-400"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
						<svg class="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
								clip-rule="evenodd"
							/>
						</svg>
						Platform Expertise
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
						<p class="flex-auto">
							From Instagram and Facebook to Twitter and LinkedIn, we leverage our expertise across various social media
							channels to maximize your reach and impact.
						</p>
						<p class="mt-6">
							<a href="/blog/platform-expertise" class="text-sm font-semibold leading-6 text-indigo-400"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
						<svg class="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
								clip-rule="evenodd"
							/>
						</svg>
						Community Engagement
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
						<p class="flex-auto">
							Building a community around your brand is essential. We actively engage with your audience through
							comments, messages, and discussions, fostering a sense of connection and loyalty.
						</p>
						<p class="mt-6">
							<a href="/blog/community-engagement" class="text-sm font-semibold leading-6 text-indigo-400"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
						<svg class="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
								clip-rule="evenodd"
							/>
						</svg>
						Data-Driven Insights
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
						<p class="flex-auto">
							Utilize analytics tools to track key performance metrics, understand audience behavior, and refine your
							social media strategy for optimal results.
						</p>
						<p class="mt-6">
							<a href="/blog/data-driven-insights" class="text-sm font-semibold leading-6 text-indigo-400"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
						<svg class="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
								clip-rule="evenodd"
							/>
						</svg>
						Campaign Management
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
						<p class="flex-auto">
							From seasonal campaigns to product launches, we orchestrate and manage social media campaigns that align
							with your broader marketing objectives.
						</p>
						<p class="mt-6">
							<a href="/blog/campaign-management" class="text-sm font-semibold leading-6 text-indigo-400"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
						<svg class="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
								clip-rule="evenodd"
							/>
						</svg>
						Social Listening
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
						<p class="flex-auto">
							Monitor social media conversations to gain valuable insights into customer sentiment, industry trends, and
							opportunities for brand improvement.
						</p>
						<p class="mt-6">
							<a href="/blog/social-listening" class="text-sm font-semibold leading-6 text-indigo-400"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
						<svg class="h-5 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
								clip-rule="evenodd"
							/>
						</svg>
						Influencer Partnerships
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
						<p class="flex-auto">
							Identify and collaborate with influencers and thought leaders in your industry to amplify your brand's
							reach and credibility.
						</p>
						<p class="mt-6">
							<a href="/blog/influencer-partnerships" class="text-sm font-semibold leading-6 text-indigo-400"
								>Learn more <span aria-hidden="true">→</span></a
							>
						</p>
					</dd>
				</div>
			</dl>
		</div>
	</div>
</div>

<CtaSection />
