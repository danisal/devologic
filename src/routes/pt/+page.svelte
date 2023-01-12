<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Mail from '$lib/components/Mail.svelte';
	import Section from '$lib/components/Section.svelte';
	import type { ActionData } from '../$types';

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

	export let form: ActionData;
</script>

<svelte:head>
	<title>Devologic | Digital Studio</title>
	<meta name="description" content="Devologic Estúdio Digital" />
</svelte:head>

<div class="h-screen snap-y snap-mandatory overflow-auto">
	{#each copy as sentence}
		<Section>
			{sentence}
		</Section>
	{/each}
	<Section>
		Vamos trabalhar em conjunto para trazer a sua presença online para o próximo nível.

		<ContactForm
			button="Enviar"
			message="Mensagem"
			messagePlaceholder="Olá, estou interessado em criar um novo website para o meu negócio e gostaria de solicitar um orçamento para os vossos serviços de design e desenvolvimento web. Poderia por favor fornecer mais informações sobre o seu processo e preços?"
			name="Nome"
			namePlaceholder="Jane Doe"
			subject="Assunto"
			subjectPlaceholder="Pedido de orçamento para um novo website"
			errors={form?.errors}
			data={form?.data}
		/>
	</Section>

	<Footer privacy="Política de Privacidade" rights="Todos os direitos reservados." />
</div>

<a
	aria-label="Link to contact form"
	href="#contact-form"
	target="_top"
	class="group absolute bottom-2 right-2 flex items-center rounded-full bg-green-50 p-2 text-green-800 shadow transition-all duration-200"
>
	<Mail width={20} height={20} />
	<span
		class="h-auto w-0 overflow-hidden whitespace-nowrap text-sm transition-all duration-200 group-hover:ml-2 group-hover:w-[70px]"
		>Contact us</span
	>
</a>
