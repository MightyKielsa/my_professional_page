<script>
	import Navbar from '../lib/Navbar.svelte';
	import Skill from '../lib/Skill.svelte';
	import SkillCard from '../lib/SkillCard.svelte';
	import ProjectCard from '../lib/ProjectCard.svelte';
	import SocialMedia from '../lib/SocialMedia.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import projectsArr from '../data/projectsArr';
	import skillsArr from '../data/skillsArr.js';
	import hobbiesArr from '../data/hobbiesArr';
	import booksArr from '../data/booksArr';
	import socialArr from '../data/socialArr.js';

	const skillStore = writable({
		skillName: 'Loading',
		skillImg: '/typescript.png',
		skillAlt: 'loading',
		skillId: 2,
		info: '...loading',
		projectsArr: [{ projectName: 'Loading', projectUrl: 'www.google.com' }]
	});
	setContext('skillContext', skillStore);

	function onSkillClick(newSkillObj) {
		skillStore.set(newSkillObj);
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
					<b>"How did you end up as a software engineer?"</b> - you're most likely not asking, but I'll
					answer it anyway. I started my adventure with programming when I was still in secondary school
					back in Poland, however the spark that lighted my interest in technology came somewhat later.
					I was im my second year of Business and Events Management at the University of the West of
					England, when I realised it wasn't for me.
				</p>
				<p>
					So I started leaning <b>Python and the basics of electronic circuits</b> in my free time.
					Unfortunately, by the end of my third year things got manic and I had to put my new hobby
					on the back burner. I received my degree and worked as a <b>trade show manager</b> for 2
					years. While I learned many invaluable lessons during that time, I still felt unfulfilled.
					The pandemic helped me with the decision to quit by taking it out of my hand. So I picked
					up a temporary job as a delivery driver and not-so-soon after I made a decision
					<b>to change my career path and attend an intensive bootcamp</b> at School of Code.
				</p>
				<p>And so I learned...</p>
			</div>
		</section>
		<section class="skills-section-main-div">
			<div class="skills-list-div">
				<div id="skills-header-div">
					<h2>TECH STACK</h2>
				</div>
				{#each skillsArr as skill}
					<Skill skillObj={skill} skillFunc={onSkillClick} />
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
					<ProjectCard projectObj={project} />
				{/each}
			</div>
		</section>
		<section class="personal-corner-main-div">
			<h2>Personal corner</h2>
			<div class="personal-corner-content-div">
				<ul aria-label="Hobbies" class="main-page-list">
					{#each hobbiesArr as hobby}
						<li class="hobby-list-item">
							<p>{hobby.hobbyName}</p>
							<img src={hobby.img} class="hobby-img" alt="hobby icon" />
						</li>
					{/each}
				</ul>
				<ul aria-label="Favourite Books" class="main-page-list">
					{#each booksArr as book}
						<li class="book-list-item">
							<div>
								<p class="book-name-p">{book.bookName}</p>
								<p class="author-p">{book.author}</p>
							</div>
							<img src={book.img} class="book-img" alt="book cover" />
						</li>
					{/each}
				</ul>
			</div>
		</section>
		<footer>
			<h2>Get in touch</h2>
			<div>
				{#each socialArr as social}
					<SocialMedia socialObj={social} />
				{/each}
			</div>
		</footer>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap');
	:root {
		--primary: #003459;
		--primary-tint1: #18527a;
		--primary-tint2: #719dbd;
		--primary-font-light: #e5f8fe;
		--primary-font-dark: #001524;
		--secondary: #83635d;
		--secondary-tint1: #a37b73;
		--secondary-tint2: #b6928b;
		--supporting-1: #489fb5;
		--supporting-2: #e09f3e;
		--background: #fafafa;
		--font-fam: 'Reem Kufi', sans-serif;
		color: var(--primary-font-dark);
		font-size: 22px;
		line-height: 1.7;
	}

	* {
		margin: 0;
		padding: 0;
		font-family: var(--font-fam);
	}
	.main-body-element {
		background-color: var(--background);
		height: 400vh;
		max-width: 100%;
		position: absolute;
		top: 8vh;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: hidden;
	}

	h1 {
		margin-top: 1vh;
		font-size: 50px;
		font-weight: 600;
	}

	h2 {
		font-size: 50px;
		font-weight: 600;
	}
	/*____________________________ABOUT ME SECTION___________________________*/

	.top-horizontal-img {
		width: 100%;
		height: 45vh;
		object-fit: cover;
		background-position: center, center;
	}

	.about-me {
		display: flex;
		width: 74%;
		text-align: center;
		height: 47vh;
	}

	.about-me p {
		margin-top: 20px;
	}

	/*____________________________SKILLS SECTION___________________________*/
	.skills-section-main-div {
		display: flex;
		width: 100%;
		height: 92vh;
	}

	.skills-list-div {
		width: 55%;
		background-color: var(--secondary-tint1);
		position: relative;
	}
	.main-vertical-img {
		width: 45%;
		object-fit: cover;
		background-position: center, center;
	}

	#skills-header-div {
		width: 18vw;
		min-width: 330px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 120px;
		background-color: var(--primary-tint1);
		color: var(--primary-font-light);
		border-radius: 24px;
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
		margin-top: 2rem;
	}

	.project-cards-row {
		margin-top: 2rem;
		display: flex;
		justify-content: space-evenly;
	}

	/*____________________________PERSONAL CORNER___________________________*/

	.personal-corner-main-div {
		height: 94vh;
		background-color: var(--secondary-tint1);
		width: 100%;
	}
	.personal-corner-main-div h2 {
		margin-top: 2rem;
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
		font-size: 120%;
		font-weight: bold;
		margin-left: -15px;
	}

	.personal-corner-content-div ul {
		background-color: var(--background);
		font-size: 24px;
		width: 300px;
		height: 600px;
		padding: 2rem;
		border-radius: 2rem;
		list-style: none;
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
	}
	.personal-corner-content-div li {
		margin-top: 6px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: all 0.5s;
		border-radius: 1rem;
		padding: 8px;
	}

	.personal-corner-content-div li:hover {
		transform: scale(1.05);
		cursor: pointer;
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
	}

	.author-p {
		font-size: 80%;
		font-style: italic;
		line-height: 1;
	}

	.book-img {
		width: auto;
		height: 60px;
	}

	.hobby-img {
		width: auto;
		height: 60px;
	}
</style>
