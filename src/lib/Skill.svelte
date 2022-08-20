<script>
	export let skillObj;
</script>

<main class="main-skill-div" id={'skill-' + skillObj.skillId.toString()}>
	<img src={skillObj.skillImg} alt={skillObj.skillAlt} class="skill-img" />
	{skillObj.skillName}
</main>

<style>
	.main-skill-div {
		width: 14rem;
		height: 8rem;
		font-size: xx-large;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: var(--background);
		border-radius: 1rem;
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
		transition: all 0.5s;
	}
	.skill-img {
		height: 4rem;
		width: 4rem;
	}
	#skill-1 {
		position: absolute;
		left: 0;
		right: 0;
		top: 8rem;
		margin: 0 auto;
	}
	#skill-2 {
		position: absolute;
		left: 45rem;
		right: 5rem;
		top: 18rem;
		margin: 0 auto;
	}
	#skill-3 {
		position: absolute;
		left: 5rem;
		right: 45rem;
		top: 18rem;
		margin: 0 auto;
	}
	#skill-4 {
		position: absolute;
		left: 0;
		right: 60rem;
		top: 0;
		bottom: 0;
		margin: auto auto;
	}
	#skill-5 {
		position: absolute;
		left: 60rem;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto auto;
	}
	#skill-6 {
		position: absolute;
		left: 5rem;
		right: 45rem;
		bottom: 18rem;
		margin: 0 auto;
	}
	#skill-7 {
		position: absolute;
		left: 45rem;
		right: 5rem;
		bottom: 18rem;
		margin: 0 auto;
	}
	#skill-8 {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 8rem;
		margin: 0 auto;
	}

	.main-skill-div:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
</style>
