<script>
	import Navbar from '../lib/Navbar.svelte';
	import Skill from '../lib/Skill.svelte';
	import SkillCard from '../lib/SkillCard.svelte';
	import { writable } from 'svelte/store';
	import ProjectCard from '../lib/ProjectCard.svelte';

	const projectsArr = [
		{ projectImg: '', projectName: 'Bootcamper Adiutor', projectDescription: '' },
		{ projectImg: '', projectName: 'Bootcamper Adiutor', projectDescription: '' },
		{ projectImg: '', projectName: 'Bootcamper Adiutor', projectDescription: '' }
	];

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
	let hobbiesArr = ['Technology', 'Boxing', 'Reading', 'Gaming', 'Warhammer 40k', 'LotR'];

	export const skillDrawer = writable('hello');
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
		<section class="projects-section-main-div">
			<h2>Projects:</h2>
			<div class="project-cards-row">
				{#each projectsArr as project}
					<ProjectCard skillObj={project} />
				{/each}
			</div>
		</section>
		<section class="personal-corner-main-div">
			<h2>Personal corner</h2>
			<div class="personal-corner-content-div">
				<ul aria-label="Hobbies">
					{#each hobbiesArr as hobby}
						<li>{hobby}</li>
					{/each}
				</ul>
				<ul aria-label="Favourite Books">
					<li>l1</li>
					<li>l2</li>
					<li>l3</li>
				</ul>
			</div>
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

		font-family: var(--font-fam);
	}

	.main-body-element {
		background-color: var(--background);
		height: 392vh;
		position: absolute;
		top: 8vh;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/*____________________________ABOUT ME SECTION___________________________*/
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
		font-size: 100%;
		text-align: center;
		height: 47vh;
	}

	.about-me p {
		margin-top: 2rem;
		font-size: 150%;
	}

	/*____________________________SKILLS SECTION___________________________*/
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

	/*____________________________PROJECTS SECTION___________________________*/

	.projects-section-main-div {
		height: 94vh;
		width: 100%;
		background-color: var(--background);
		text-align: center;
	}

	.projects-section-main-div h2 {
		font-size: 3rem;
		margin-top: 3rem;
	}

	.project-cards-row {
		margin-top: 3rem;
		display: flex;
		justify-content: space-evenly;
	}

	/*____________________________PERSONAL CORNER___________________________*/

	.personal-corner-main-div {
		height: 94vh;
		background-color: var(--secondary);
		width: 100%;
	}
	.personal-corner-main-div h2 {
		font-size: 3rem;
		margin-top: 3rem;
		text-align: center;
	}
	.personal-corner-content-div {
		width: 100%;
		height: 90%;
		display: flex;
		justify-content: space-around;
	}
	.personal-corner-content-div ul:before {
		content: attr(aria-label);
		font-size: 140%;
		font-weight: bold;
		margin-left: -15px;
	}

	.personal-corner-content-div ul {
		background-color: var(--background);
		width: 300px;
		height: 70%;
		padding: 2rem;
		border-radius: 2rem;
		font-size: 130%;
		list-style: none;
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
	}
	.personal-corner-content-div li {
		margin-top: 20px;
	}
</style>
