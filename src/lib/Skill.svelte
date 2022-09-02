<script>
	export let skillObj;
	export let skillFunc;

	function handleSkillClick(object) {
		skillFunc(object);
		var skillCard = document.getElementById('skill-card-main');
		skillCard.style.right = 0;
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
		width: 200px;
		height: 120px;
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
		height: 60px;
		width: 60px;
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
		left: 500px;
		right: 0;
		top: 210px;
		margin: 0 auto;
	}
	#skill-3 {
		position: absolute;
		left: 0px;
		right: 500px;
		top: 210px;
		margin: 0 auto;
	}
	#skill-4 {
		position: absolute;
		left: 0;
		right: 700px;
		top: 0;
		bottom: 0;
		margin: auto auto;
	}
	#skill-5 {
		position: absolute;
		left: 700px;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto auto;
	}
	#skill-6 {
		position: absolute;
		left: 0;
		right: 500px;
		bottom: 210px;
		margin: 0 auto;
	}
	#skill-7 {
		position: absolute;
		left: 500px;
		right: 0;
		bottom: 210px;
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

	/*____________________________MEDIA QUERIES___________________________*/
	@media screen and (max-width: 1650px) {
		#skill-1,
		#skill-2,
		#skill-3,
		#skill-4,
		#skill-5,
		#skill-6,
		#skill-7,
		#skill-8 {
			position: relative;
			top: auto;
			bottom: auto;
			left: auto;
			right: auto;
			margin: 0;
		}
		.main-skill-div {
			width: 80%;
			max-width: 500px;
			height: 50px;
			flex-direction: row;
			justify-content: center;
			gap: 20px;
			font-size: 24px;
		}

		.skill-img {
			height: 40px;
			width: 40px;
		}
	}

	@media screen (max-width: 1650) and (max-height: 900px) {
		.main-skill-div {
			width: min-content;
			height: min-content;
			padding: 10px;
			flex-direction: row;
			justify-content: center;
			gap: 20px;
			font-size: 24px;
		}
	}
</style>
