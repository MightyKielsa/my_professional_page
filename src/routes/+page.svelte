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

	const hobbyStore = writable('hobby-list');
	const bookStore = writable('none');

	function onSkillClick(newSkillObj) {
		skillStore.set(newSkillObj);
	}

	function onBookClick() {
		hobbyStore.set('none');
		bookStore.set('hobby-list');
	}

	function onHobbyClick() {
		hobbyStore.set('hobby-list');
		bookStore.set('none');
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
		<img
			class="top-horizontal-img-mobile"
			alt="a man standing in the mountains on the left and a work des on the right"
			src="/mobile-main.png"
		/>
		<section class="about-me">
			<div class="about-me-div">
				<h1>Hi I'm Patryk Kielsa, nice to meet you!</h1>
				<p>
					<b>"How did you end up as a software engineer?"</b> - you're probably not asking, but I'll
					answer anyway. I started my adventure with programming when I was still in the secondary
					school back in Poland, however the spark that lighted my interest in technology came
					somewhat later. Disilusioned with my Business and Events degree I started learning
					<b>Python and the basics of electronic circuits</b> while I was still studying at UWE.
				</p>
				<p>
					Unfortunately, by the end of my third year things got manic and I had to put my new hobby
					on the back burner. I finished uni and went on to work as a <b>trade show manager</b>. The
					pandemic wrecked the events industry so I became a delivery driver and not-so-soon after
					that I decided to commit to my passion and attend an
					<b>intensive fullstack programming bootcamp</b>. But my journey didn't stop there, I'm
					currently learning <b>C++</b> and looking for a company that will allow me to hone my problem
					solving skills while allowing me to explore my passion for technology.
				</p>
			</div>
		</section>
		<section class="skills-section-main-div" id="skills-section">
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
		<section class="projects-section-main-div" id="projects-section">
			<h2>Projects:</h2>
			<div class="project-cards-row">
				{#each projectsArr as project}
					<ProjectCard projectObj={project} />
				{/each}
			</div>
		</section>
		<section class="personal-corner-main-div" id="personal-corner-section">
			<h2>Personal corner</h2>
			<div class="personal-button-mobile-div">
				<button on:click={onHobbyClick}>Hobbies</button><button on:click={onBookClick}>Books</button
				>
			</div>
			<div class="personal-corner-content-div">
				<ul aria-label="Hobbies" class="main-page-list" id={$hobbyStore}>
					{#each hobbiesArr as hobby}
						<li class="hobby-list-item">
							<p>{hobby.hobbyName}</p>
							<img src={hobby.img} class="hobby-img" alt="hobby icon" />
						</li>
					{/each}
				</ul>
				<ul aria-label="Favourite Books" class="main-page-list" id={$bookStore}>
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
		<footer class="footer-main-div" id="contact-section">
			<h2>Get in touch!</h2>
			<div class="social-media-row">
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
	main {
		overflow-x: hidden;
		width: 100%;
	}
	.main-body-element {
		background-color: var(--background);
		height: auto;
		min-height: 392vh;
		width: 100%;
		position: absolute;
		top: 8vh;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-x: hidden;
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

	.top-horizontal-img-mobile {
		display: none;
		width: 100%;
		height: 40vh;
		object-fit: cover;
		background-position: center, center;
	}
	.top-horizontal-img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
		background-position: center, center;
	}

	.about-me {
		display: flex;
		width: 74%;
		text-align: center;
		min-height: 52vh;
		height: auto;
		padding-bottom: 10px;
	}

	.about-me p {
		margin-top: 30px;
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
		min-height: auto;
		height: 92vh;
		width: 100%;
		background-color: var(--background);
		text-align: center;
	}

	.projects-section-main-div h2 {
		margin-top: 2rem;
	}

	.project-cards-row {
		margin-top: 70px;
		display: flex;
		justify-content: space-around;
	}

	/*____________________________PERSONAL CORNER___________________________*/

	.personal-corner-main-div {
		height: auto;
		background-color: var(--secondary-tint1);
		width: 100%;
		padding-bottom: 30px;
		overflow-x: auto;
	}
	.personal-corner-main-div h2 {
		margin-top: 2rem;
		text-align: center;
	}

	.personal-button-mobile-div {
		display: none;
	}
	.personal-corner-content-div {
		width: 100%;
		height: auto;
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

	/*____________________________GET IN TOUCH___________________________*/

	.footer-main-div {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.footer-main-div h2 {
		margin-top: 1.5rem;
	}
	.social-media-row {
		width: 50%;
		display: flex;
		justify-content: space-evenly;
	}

	/*____________________________MEDIA QUERIES___________________________*/
	@media screen and (max-width: 1650px) {
		.main-body-element {
			height: auto;
		}

		/*____________________________ABOUT ME SECTION___________________________*/
		.top-horizontal-img {
			background-position: left, center;
		}
		.about-me {
			margin-top: 30px;
			height: 62vh;
			width: 70%;
		}
		/*____________________________SKILLS SECTION___________________________*/
		.skills-list-div {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 40px;
		}
		#skills-header-div {
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			background-color: var(--primary-tint1);
			color: var(--primary-font-light);
			box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
			position: relative;
			left: auto;
			right: auto;
			top: auto;
			bottom: auto;
			margin: 0;
		}
		/*____________________________PROJECTS___________________________*/
		.projects-section-main-div {
			min-height: 80vh;
			height: auto;
		}

		.project-cards-row {
			margin-top: 50px;
			overflow-x: scroll;
			gap: 40px;
			height: 600px;
			align-items: center;
			justify-content: flex-start;
			padding-left: 20px;
			padding-right: 20px;
		}
		/*____________________________PERSONAL CORNER___________________________*/
		.personal-corner-content-div ul {
			margin-top: 40px;
		}
		/*____________________________GET IN TOUCH___________________________*/
		.social-media-row {
			width: 80%;
		}
	}
	@media screen and (max-width: 1650px) and (max-height: 900px) {
		.project-cards-row {
			height: 400px;
			padding-top: 20px;
			padding-bottom: 20px;
			margin-top: 0;
		}
		.about-me {
			width: 90%;
			font-size: 18px;
		}
	}
	@media screen and (max-width: 1400px) {
		.main-body-element {
			font-size: 20px;
		}
		h1 {
			font-size: 40px;
		}
	}

	@media screen and (max-width: 1280px) and (max-height: 900px) {
		h1 {
			font-size: 30px;
		}
		.about-me {
			font-size: 20px;
			width: 80%;
			line-height: 1.7;
			margin-top: 10px;
		}
		.about-me p {
			margin-top: 20px;
		}
		.project-cards-row {
			margin-top: 0;
			overflow-x: scroll;
			gap: 40px;
			height: 500px;
			align-items: center;
			justify-content: flex-start;
			padding-left: 20px;
			padding-right: 20px;
		}
		.personal-corner-main-div {
			height: 112vh;
		}
		.personal-corner-main-div h2 {
			margin-top: 1rem;
		}
		.social-media-row {
			height: 300px;
		}
	}

	@media screen and (max-width: 1070px) {
		h1 {
			font-size: 30px;
		}
		.about-me {
			font-size: 20px;
			width: 80%;
			line-height: 1.8;
		}

		.about-me p {
			margin-top: 10px;
		}
		.projects-section-main-div {
			height: 92vh;
		}
		.project-cards-row {
			margin-top: 0;
			height: auto;
			overflow-x: scroll;
			gap: 40px;
			height: 600px;
			align-items: center;
			justify-content: flex-start;
		}
		.top-horizontal-img {
			display: none;
		}

		.top-horizontal-img-mobile {
			display: block;
		}
	}

	@media screen and (max-width: 1070px) and (max-height: 800px) {
		h1 {
			font-size: 30px;
		}
		.about-me {
			font-size: 18px;
			width: 80%;
			line-height: 1.6;
		}
		.about-me p {
			margin-top: 20px;
		}
	}

	@media screen and (max-width: 1070px) and (max-height: 600px) {
		h1 {
			font-size: 28px;
		}
		.about-me {
			font-size: 18px;
			width: 80%;
			line-height: 1.5;
		}
		.about-me p {
			margin-top: 20px;
		}
		.project-cards-row {
			margin-top: 0;
			overflow-x: scroll;
			gap: 40px;
			height: 400px;
			align-items: center;
			justify-content: flex-start;
		}
		.projects-section-main-div h2 {
			margin-top: 1rem;
		}
		.personal-corner-main-div {
			height: 142vh;
		}
		.personal-corner-main-div h2 {
			margin-top: 1rem;
		}
		.footer-main-div {
			height: 50vh;
		}
	}
	@media screen and (max-width: 950px) and (max-height: 1400px) {
		.about-me {
			text-align: center;
			height: 50vh;
		}
		.projects-section-main-div h2 {
			margin-top: 2rem;
		}
		.project-cards-row {
			margin-top: 50px;
			overflow-x: scroll;
			gap: 40px;
			height: 900px;
			align-items: center;
			justify-content: flex-start;
		}
		.personal-corner-main-div {
			height: 67vh;
		}
	}
	@media screen and (max-width: 850px) and (max-height: 1200px) {
		.about-me {
			margin-top: 0;
			height: 52vh;
			font-size: 18px;
		}
		.projects-section-main-div h2 {
			margin-top: 2rem;
		}

		.project-cards-row {
			margin-top: 50px;
			overflow-x: scroll;
			gap: 40px;
			align-items: center;
			justify-content: flex-start;
			height: auto;
			padding-left: 20px;
			padding-right: 20px;
		}
		.personal-corner-main-div {
			height: 92vh;
		}
	}

	@media screen and (max-width: 800px) {
		h1 {
			font-size: 30px;
		}
		h2 {
			font-size: 30px;
		}
		.top-horizontal-img {
			height: 30vh;
		}
		.about-me {
			font-size: 18px;
			width: 90%;
			line-height: 1.9;
			height: 53vh;
		}

		#skills-header-div {
			min-width: 200px;
		}
		/*____________________________PERSONAL CORNER___________________________*/
		.personal-corner-content-div ul {
			padding: 25px;
		}
	}
	@media screen and (max-width: 800px) and (max-height: 550px) {
		.about-me {
			height: auto;
			font-size: 16px;
		}
		#personal-corner-section {
			height: auto;
			padding-bottom: 50px;
		}
		.project-cards-row {
			height: 380px;
			margin-top: 0;
		}
	}

	@media screen and (max-width: 550px) and (max-height: 800px) {
		h1 {
			font-size: 26px;
		}
		h2 {
			font-size: 26px;
		}
		p {
			font-size: 14px;
		}
		.about-me {
			font-size: 18px;
			height: 67vh;
			margin-top: 0;
			width: 94%;
			line-height: 1.5;
		}
		.top-horizontal-img-mobile {
			height: 30vh;
		}

		.project-cards-row {
			height: auto;
			padding-left: 20px;
			padding-right: 20px;
		}
		.personal-corner-main-div {
			height: 112vh;
		}
		.personal-corner-main-div {
			overflow-x: scroll;
		}
		.personal-corner-main-div ul {
			width: 90vw;
		}

		.social-media-row {
			height: 200px;
			width: 100%;
		}
	}

	@media screen and (max-width: 450px) and (max-height: 920px) {
		h1 {
			font-size: 26px;
		}
		h2 {
			font-size: 24px;
		}
		p {
			font-size: 16px;
			line-height: 1.9;
		}

		.top-horizontal-img-mobile {
			height: 25vh;
		}

		.about-me {
			font-size: 18px;
			height: auto;
			padding: 1vh;
			margin-top: 20px;
			width: 94%;
		}
		.skills-list-div {
			width: 100%;
		}
		.main-vertical-img {
			display: none;
		}
		.project-cards-row {
			height: 80%;
			margin-top: 0;
		}
		.personal-corner-content-div {
			height: auto;
		}
		.personal-button-mobile-div {
			margin-top: 20px;
			display: flex;
			width: 100%;
			justify-content: space-around;
		}
		.personal-button-mobile-div button {
			width: 120px;
			height: 40px;
			border-radius: 1rem;
			border: none;
			box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
			background-color: var(--primary-tint2);
			font-weight: 600;
			font-size: 16px;
		}
		#hobby-list {
			display: block;
		}
		#none {
			display: none;
		}

		.author-p {
			font-size: 14px;
		}
	}

	@media screen and (max-width: 420px) {
		h1 {
			margin-top: 0;
			font-size: 22px;
		}
		.about-me {
			font-size: 12px;
		}
		.social-media-row {
			display: grid;
			grid-template-columns: repeat(2, auto);
			gap: 10px;
			grid-auto-rows: minmax(50px, auto);
		}
		.personal-corner-content-div ul:before {
			font-size: 100%;
		}
		.personal-corner-content-div ul {
			height: auto;
		}
		.hobby-img {
			height: 40px;
		}
	}
	@media screen and (max-width: 550px) {
		.main-page-list {
			width: auto;
			margin-left: 10px;
			margin-right: 10px;
		}
	}
</style>
