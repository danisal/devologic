<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';

	const year = new Date().getFullYear();

	const copy = [
		'Bem vindo',
		'Devologic é uma agência digital especializada em desenvolvimento e aplicações web.',
		'Criamos websites e aplicações web que são fáceis de utilizar, fiáveis, robustas e seguras.',
		'Gostamos de construir produtos digitais que coloquem os nossos clientes no topo dos seus mercados.',
		'Prestamos um serviço profissional e amigável. Trabalhamos arduamente para manter os nossos clientes satisfeitos enquanto utilizamos a mais recente tecnologia para os ajudar a ter sucesso.',
		'Desenvolvemos produtos digitais divertidos e de impacto que encantam os nossos clientes e os seus clientes.',
		'O nosso objectivo é concentrarmo-nos na qualidade do produto e na excelência técnica como a nossa especialidade.',
		'Ao combinar um grande design com tecnologias inovadoras, estamos aqui para o ajudar a aumentar o crescimento do seu negócio.',
		'A nossa missão é estar em sintonia com as necessidades dos nossos clientes para entregar os seus projectos a tempo, dentro do orçamento, e com a melhor qualidade.',
	];
</script>

<svelte:head>
	<title>Devologic | Digital Studio</title>
	<meta name="description" content="Devologic Studio" />
</svelte:head>

<div class="overflow-auto snap-y snap-mandatory h-screen">
	{#each copy as sentence}
		<section
			class="h-screen items-center justify-center snap-start mx-auto prose prose-zinc flex flex-col prose-lg px-6 max-w-prose prose-fuchsia md:prose-xl md:px-0 xl:prose-2xl"
		>
			{sentence}
		</section>
	{/each}
	<section
		class="h-screen items-center justify-center snap-start mx-auto prose prose-zinc flex flex-col prose-lg px-6 max-w-prose prose-fuchsia md:prose-xl md:px-0 xl:prose-2xl"
	>
		Vamos trabalhar em conjunto para trazer a sua presença online para o próximo nível.

		<ContactForm
			message="Mensagem"
			messagePlaceholder="Olá, estou interessado em criar um novo website para o meu negócio e gostaria de solicitar um orçamento para os vossos serviços de design e desenvolvimento web. Poderia por favor fornecer mais informações sobre o seu processo e preços?"
			name="Nome"
			namePlaceholder="Jane Doe"
			subject="Assunto"
			subjectPlaceholder="Pedido de orçamento para um novo website"
		/>
	</section>
	<footer
		class="h-screen items-center justify-center snap-start mx-auto prose prose-zinc flex flex-col prose-lg px-6 max-w-prose prose-fuchsia md:prose-xl md:px-0 xl:prose-2xl"
	>
		<div class="">
			<img src="/devologic-logo.svg" alt="Devologic logotype" class="mx-auto w-40" loading="lazy" />
			<p class="mt-5 text-center text-sm leading-6 text-slate-500">
				© {year} Devologic Unipessoal Lda. Todos os direitos reservados.
			</p>
			<div class="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
				<a href="/privacy-policy">Politica de Privacidade</a>
			</div>
		</div>
	</footer>
</div>
