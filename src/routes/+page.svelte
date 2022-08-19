<script>
	import Navbar from '../lib/Navbar.svelte';
</script>

<main>
	<Navbar />
	<div class="main-body-element">
		<h1>Hi I'm Patryk, nice to meet you!</h1>
		<section class="about-me">
			<div class="about-me-div">
				<h2>About me</h2>
				<p>
					But I must explain to you how all this mistaken idea of denouncing pleasure and praising
					pain was born and I will give you a complete account of the system, and expound the actual
					teachings of the great explorer of the truth, the master-builder of human happiness. No
					one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because
					those who do not know how to pursue pleasure rationally encounter consequences that are
					extremely painful.
				</p>
			</div>
			<img
				class="main-photo"
				alt="Patryk kielsa sitting on a chair"
				src="/IMG_20220524_181536_107.png"
			/>
		</section>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap');
	:root {
		--primary: #003459;
		--secondary: #a37b73;
		--supporting-1: #489fb5;
		--supporting-2: #e09f3e;
		--background: #fafafa;
	}
	/* :root {
		--primary: #324376;
		--secondary: #586ba4;
		--supporting-1: #f5dd90;
		--supporting-2: #f68e5f;
		--supporting-3: #f76c5e;
	} */

	* {
		margin: 0;
		padding: 0;
		background-color: var(--background);
		font-family: 'Reem Kufi', sans-serif;
	}

	.main-body-element {
		height: 292vh;
		position: absolute;
		top: 8vh;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.main-body-element h1 {
		font-size: 400%;
		margin-top: 3vh;
	}
	.about-me {
		display: flex;
		width: 100%;
	}

	.about-me-div {
		width: 50vw;
	}
</style>
