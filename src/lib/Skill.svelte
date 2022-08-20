<script>
	export let skillObj;
	export let skillFunction;
	import { skillDrawer } from '../routes/+page.svelte';

	function handleSkillClick(object) {
		var skillCard = document.getElementById('skill-card-main');
		var responsive_class_name = 'responsive';
		skillCard.classList.toggle(responsive_class_name);
		console.log(skillCard.classList);
		console.log(skillDrawer);
	}
</script>

<main
	class="main-skill-div"
	id={'skill-' + skillObj.skillId.toString()}
	on:click={function () {
		handleSkillClick(skillObj);
	}}
>
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
		top: 80px;
		margin: 0 auto;
	}
	#skill-2 {
		position: absolute;
		left: 600px;
		right: 0;
		top: 280px;
		margin: 0 auto;
	}
	#skill-3 {
		position: absolute;
		left: 0px;
		right: 600px;
		top: 280px;
		margin: 0 auto;
	}
	#skill-4 {
		position: absolute;
		left: 0;
		right: 900px;
		top: 0;
		bottom: 0;
		margin: auto auto;
	}
	#skill-5 {
		position: absolute;
		left: 900px;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto auto;
	}
	#skill-6 {
		position: absolute;
		left: 0;
		right: 600px;
		bottom: 280px;
		margin: 0 auto;
	}
	#skill-7 {
		position: absolute;
		left: 600px;
		right: 0;
		bottom: 280px;
		margin: 0 auto;
	}
	#skill-8 {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 80px;
		margin: 0 auto;
	}

	.main-skill-div:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
</style>
