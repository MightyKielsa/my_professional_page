<script>
	const projectsArr = [
		{ projectName: 'Bootcam Adiutor' },
		{ projectName: 'Weather App' },
		{ projectName: 'turnUp' }
	];
</script>

<main id="skill-card-main">
	<div class="skill-card-container">
		<div class="skill-card-header">
			<img src="/js.png" alt="logo" class="skill-card-img" />
			<h3>Javascript</h3>
		</div>
		<p><b>Desription: </b> info about the skill</p>
		<b>Projects: </b>
		<ul>
			{#each projectsArr as project}
				<li>{project.projectName}</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	#skill-card-main {
		height: 92vh;
		width: 45%;
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px
		;
	}

	.skill-card-container {
		width: 500px;
		height: 400px;
		background-color: var(--background);
		border-radius: 24px;
		border: solid;
		border-color: var(--primary-tint2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
	}

	.skill-card-container h3 {
		font-size: 50px;
	}

	.skill-card-img {
		height: 80px;
	}
	.skill-card-header {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
</style>
