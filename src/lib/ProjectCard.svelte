<script>
	let techArr = ['/atom.png', '/js.png', '/node-js.png'];
</script>

<main class="main-project-card-div">
	<img src="/code_img.jpg" class="project-card-img" />
	<h3>Special Project</h3>
	<div>
		<p>Short description of the project to catch readers attention</p>
	</div>
	<div class="project-card-tech-row">
		<p>Tech stack:</p>
		{#each techArr as tech}
			<img src={tech} class="project-card-tech-image" />
		{/each}
	</div>
</main>

<style>
	.main-project-card-div {
		height: 500px;
		width: 300px;
		background-color: var(--background);
		border-radius: 1rem;
		box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		transition: all 0.5s;
	}

	.main-project-card-div:hover {
		transform: scale(1.05);
		cursor: pointer;
	}

	.project-card-img {
		height: 200px;
		width: 100%;
		object-fit: cover;
		background-position: center, center;
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
		border-radius: 1rem 1rem 0rem 0rem;
	}

	.project-card-tech-image {
		height: 20px;
	}

	.project-card-tech-row {
		justify-self: flex-end;
		gap: 5rem;
		background-color: var(--primary);
		color: white;
		width: 100%;
		border-radius: 0rem 0rem 1rem 1rem;
		box-shadow: 0px -6px 10px rgba(0, 0, 0, 0.5);
	}
</style>
