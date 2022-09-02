<script>
	export let projectObj;
	let techArr = ['/atom.png', '/js.png', '/node-js.png'];
</script>

<a href={projectObj.projectUrl} target="_blank">
	<main class="main-project-card-div">
		<img src={projectObj.projectImg} class="project-card-img" alt="application in a browser" />
		<h3>{projectObj.projectName}</h3>
		<div class="project-card-description">
			<p>{projectObj.projectDescription}</p>
		</div>
		<div class="project-card-tech-row">
			<p>Tech stack:</p>
			<div class="tech-row-flex">
				{#each projectObj.techArr as tech}
					<img src={tech.techImg} class="project-card-tech-image" alt="tech logo" />
				{/each}
			</div>
		</div>
	</main></a
>

<style>
	a {
		text-decoration: none;
	}

	h3 {
		margin-top: 6px;
		margin-bottom: 0;
	}
	.main-project-card-div {
		height: 520px;
		width: 300px;
		color: var(--primary-font-dark);
		background-color: var(--background);
		border-radius: 1rem;
		box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		transition: all 0.5s;
		line-height: 1.5;
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
		height: 120px;
		gap: 50px;
		background-color: var(--primary);
		color: white;
		width: 100%;
		border-radius: 0rem 0rem 1rem 1rem;
		box-shadow: 0px -6px 10px rgba(0, 0, 0, 0.5);
	}

	.project-card-description {
		height: 200px;
		width: 90%;
		align-self: center;
	}
	.project-card-description p {
		margin: 5px;
	}
	.tech-row-flex {
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: 30px;
	}

	@media screen and (max-width: 1070px) and (max-height: 600px) {
		.main-project-card-div {
			width: 500px;
			height: 300px;
		}
		.project-card-img {
			height: 100px;
		}
		.project-card-description {
			height: 100px;
		}
	}

	@media screen and (max-height: 800px) {
		.main-project-card-div {
			width: 500px;
			height: 350px;
		}
	}
	@media screen and (max-width: 550px) and (max-height: 800px) {
		.project-card-img {
			height: 150px;
		}
	}

	@media screen and (max-width: 550px) and (max-height: 800px) {
		.main-project-card-div {
			width: 80vw;
			height: 60vh;
		}
	}
</style>
