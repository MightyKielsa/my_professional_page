<script>
	import { getContext } from 'svelte';

	const skillContext = getContext('skillContext');

	function onXClick() {
		var skillCard = document.getElementById('skill-card-main');
		skillCard.style.right = '-1000px';
	}
</script>

<main id="skill-card-main">
	<div class="skill-card-container">
		<img src="/x-icon.png" alt="close button" class="close-button" on:click={onXClick} />
		<div class="skill-card-header">
			<img src={$skillContext.skillImg} alt="logo" class="skill-card-img" />
			<h3>{$skillContext.skillName}</h3>
		</div>
		<p>{$skillContext.info}</p>
		<b>Projects: </b>
		<ul>
			{#each $skillContext.projectsArr as project}
				<li><a target="_blank" href={project.projectUrl}>{project.projectName}</a></li>
			{/each}
		</ul>
	</div>
</main>

<style>
	ul {
		list-style: none;
		margin-top: 0;
	}

	p {
		width: 90%;
		margin-top: 0;
		margin-bottom: 10px;
	}

	#skill-card-main {
		height: 92vh;
		width: 45%;
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		right: -1000px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		transition: all 0.5s;
	}
	.skill-card-container {
		width: 500px;
		height: 500px;
		background-color: var(--background);
		border-radius: 24px;
		border: solid;
		border-color: var(--primary-tint2);
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
		position: relative;
	}

	.skill-card-container h3 {
		font-size: 40px;
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

	.close-button {
		height: 40px;
		position: absolute;
		top: 10px;
		right: 10px;
		color: var(--primary-font-dark);
	}
	.close-button:hover {
		cursor: pointer;
	}

	@media screen and (max-width: 1650px) {
		.skill-card-container {
			height: auto;
		}
	}
</style>
