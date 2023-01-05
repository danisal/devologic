<script lang="ts">
	const year = new Date().getFullYear();

	const classes = [
		'max-w-5xl h-screen flex items-center justify-center snap-start mx-auto prose prose-zinc flex flex-col prose prose-lg px-6 max-w-prose prose-fuchsia',
		'md:prose-xl md:px-0',
		'xl:prose-2xl',
	].join(' ');
</script>

<svelte:head>
	<title>Devologic | Digital Studio</title>
	<meta name="description" content="Devologic Studio" />
</svelte:head>

<div class="overflow-auto snap-y snap-mandatory h-screen">
	<section class={classes}>Bem vindo</section>
	<section class={classes}>Devologic é uma agência digital especializada em desenvolvimento e aplicações web.</section>
	<section class={classes}>
		Criamos websites e aplicações web que são fáceis de utilizar, fiáveis, robustas e seguras.
	</section>
	<section class={classes}>
		Gostamos de construir produtos digitais que coloquem os nossos clientes no topo dos seus mercados.
	</section>
	<section class={classes}>
		Prestamos um serviço profissional e amigável. Trabalhamos arduamente para manter os nossos clientes satisfeitos
		enquanto utilizamos a mais recente tecnologia para os ajudar a ter sucesso.
	</section>
	<section class={classes}>
		Desenvolvemos produtos digitais divertidos e de impacto que encantam os nossos clientes e os seus clientes.
	</section>
	<section class={classes}>
		O nosso objectivo é concentrarmo-nos na qualidade do produto e na excelência técnica como a nossa especialidade.
	</section>
	<section class={classes}>
		Ao combinar um grande design com tecnologias inovadoras, estamos aqui para o ajudar a aumentar o crescimento do seu
		negócio.
	</section>
	<section class={classes}>
		A nossa missão é estar em sintonia com as necessidades dos nossos clientes para entregar os seus projectos a tempo,
		dentro do orçamento, e com a melhor qualidade.
	</section>
	<footer class={classes}>
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
