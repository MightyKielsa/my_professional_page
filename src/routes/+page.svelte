<script>
	import Navbar from '../lib/Navbar.svelte';
	import ProjectCard from '../lib/ProjectCard.svelte';
	import Skill from '../lib/Skill.svelte';
	import SkillCard from '../lib/SkillCard.svelte';

	const skillsArr = [
		{
			skillName: 'Javascript',
			skillImg: '/js.png',
			skillAlt: 'JS icon',
			skillId: 1,
			info: 'blah blah blah'
		},
		{
			skillName: 'Typescript',
			skillImg: '/typescript.png',
			skillAlt: 'Typescript icon',
			skillId: 2,
			info: 'blah blah blah'
		},
		{
			skillName: 'HTML/CSS',
			skillImg: '/html.png',
			skillAlt: 'HTML and CSS icon',
			skillId: 3,
			info: 'blah blah blah'
		},
		{
			skillName: 'React',
			skillImg: '/atom.png',
			skillAlt: 'React icon',
			skillId: 4,
			info: 'blah blah blah'
		},
		{
			skillName: 'Svelte',
			skillImg: '/svelte.png',
			skillAlt: 'Svelte icon',
			skillId: 5,
			info: 'blah blah blah'
		},
		{
			skillName: 'Node.js',
			skillImg: '/node-js.png',
			skillAlt: 'Node icon',
			skillId: 6,
			info: 'blah blah blah'
		},
		{
			skillName: 'SQL',
			skillImg: '/sql-server.png',
			skillAlt: 'SQL icon',
			skillId: 7,
			info: 'blah blah blah'
		},
		{
			skillName: 'AWS',
			skillImg: '/amazon-aws.png',
			skillAlt: 'AWS icon',
			skillId: 8,
			info: 'blah blah blah'
		}
	];

	function handleSkillClick(skillObj) {
		var skillCard = document.getElementById('navigation-bar');
		var responsive_class_name = 'responsive';
		skillCard.classList.toggle(responsive_class_name);
		console.log(skillCard.classList);
	}
</script>

<main>
	<Navbar />
	<div class="main-body-element">
		<img
			class="top-horizontal-img"
			alt="a man standing in the mountains on the left and a work des on the right"
			src="/combined.png"
		/>

		<section class="about-me">
			<div class="about-me-div">
				<h1>Hi I'm Patryk Kielsa, nice to meet you!</h1>
				<p>
					But I must explain to you how all this mistaken idea of denouncing pleasure and praising
					pain was born and I will give you a complete account of the system, and expound the actual
					teachings of the great explorer of the truth, the master-builder of human happiness. No
					one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because
					those who do not know how to pursue pleasure rationally encounter consequences that are
					extremely painful.
				</p>
			</div>
			<!-- <img
				class="main-photo"
				alt="Patryk kielsa sitting on a chair"
				src="/IMG_20220524_181536_107.png"
			/> -->
		</section>
		<section class="skills-section-main-div">
			<div class="skills-list-div">
				<div id="skills-header-div">
					<h2>TECH STACK</h2>
				</div>
				{#each skillsArr as skill}
					<Skill skillObj={skill} />
				{/each}
			</div>
			<img
				class="main-vertical-img"
				alt="A man standing by a fence with Trafalgar Square in the background"
				src="/signal-2022-08-19-10-52-11-053.png"
			/>
			<SkillCard />
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
		--font-fam: 'Reem Kufi', sans-serif;
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
		font-family: var(--font-fam);
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

	.top-horizontal-img {
		width: 100%;
		height: 45vh;
		object-fit: cover;
		background-position: center, center;
	}

	.about-me {
		display: flex;
		width: 80%;
		font-size: large;
		text-align: center;
		height: 47vh;
	}

	.about-me p {
		margin-top: 2rem;
		font-size: xx-large;
	}

	.skills-section-main-div {
		display: flex;
		width: 100%;
		height: 92vh;
	}

	.skills-list-div {
		width: 55%;
		background-color: var(--secondary);
		position: relative;
	}
	.main-vertical-img {
		width: 45%;
		object-fit: cover;
		background-position: center, center;
	}

	#skills-header-div {
		font-size: xx-large;
		width: 18vw;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 10rem;
		background-color: var(--supporting-1);
		border-radius: 1rem;
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto auto;
	}
	#skills-header-div h2 {
		background-color: var(--supporting-1);
	}
</style>
