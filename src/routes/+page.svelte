<script>
	import Navbar from '../lib/Navbar.svelte';
	import Skill from '../lib/Skill.svelte';
	import SkillCard from '../lib/SkillCard.svelte';
	import ProjectCard from '../lib/ProjectCard.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

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

	const projectsArr = [
		{
			projectImg: '/turnup_1.PNG',
			projectName: 'turnUp',
			projectDescription:
				'Free Local Event App. Allows the user to create and find free events in their area.',
			techArr: [
				{ techImg: '/html.png', techName: 'HTML & CSS' },
				{ techImg: '/js.png', techName: 'Javascript' },
				{ techImg: '/atom.png', techName: 'React' },
				{ techImg: '/node-js.png', techName: 'Node.js' },
				{ techImg: '/sql-server.png', techName: 'SQL' }
			]
		},
		{
			projectImg: '/bc_helper.PNG',
			projectName: 'Bootcamper Adiutor',
			projectDescription:
				'An app helping bootcampers to keep track of their notes, resources and problems.',
			techArr: [
				{ techImg: '/html.png', techName: 'HTML & CSS' },
				{ techImg: '/js.png', techName: 'Javascript' },
				{ techImg: '/atom.png', techName: 'React' },
				{ techImg: '/node-js.png', techName: 'Node.js' },
				{ techImg: '/amazon-aws.png', techName: 'AWS' }
			]
		},
		{
			projectImg: '/weather_app.PNG',
			projectName: 'Weather App',
			projectDescription:
				'A weather app allowing you to check the weather conditions in large cities',
			techArr: [
				{ techImg: '/html.png', techName: 'HTML & CSS' },
				{ techImg: '/typescript.png', techName: 'Typescript' },
				{ techImg: '/atom.png', techName: 'React' },
				{ techImg: '/google_api.png', techName: 'Google Maps API' }
			]
		}
	];

	const skillsArr = [
		{
			skillName: 'Javascript',
			skillImg: '/js.png',
			skillAlt: 'JS icon',
			skillId: 1,
			info: 'blah blah blah',
			projectsArr: [
				{
					projectName: 'Bootcam Adiutor',
					projectUrl: 'https://github.com/MightyKielsa/bootcamp_helper_app_project'
				},
				{ projectName: 'Weather App', projectUrl: '#' },
				{ projectName: 'turnUp', projectUrl: 'https://github.com/MightyKielsa/turnUp_front-end' }
			]
		},
		{
			skillName: 'Typescript',
			skillImg: '/typescript.png',
			skillAlt: 'Typescript icon',
			skillId: 2,
			info: 'blah blah blah',
			projectsArr: [{ projectName: 'Weather App', projectUrl: '#' }]
		},
		{
			skillName: 'HTML/CSS',
			skillImg: '/html.png',
			skillAlt: 'HTML and CSS icon',
			skillId: 3,
			info: 'blah blah blah',
			projectsArr: [
				{
					projectName: 'Bootcam Adiutor',
					projectUrl: 'https://github.com/MightyKielsa/bootcamp_helper_app_project'
				},
				{ projectName: 'Weather App', projectUrl: '#' },
				{ projectName: 'turnUp', projectUrl: 'https://github.com/MightyKielsa/turnUp_front-end' },
				{
					projectName: 'This page!',
					projectUrl: 'https://github.com/MightyKielsa/my_professional_page'
				}
			]
		},
		{
			skillName: 'React',
			skillImg: '/atom.png',
			skillAlt: 'React icon',
			skillId: 4,
			info: 'blah blah blah',
			projectsArr: [
				{
					projectName: 'Bootcam Adiutor',
					projectUrl: 'https://github.com/MightyKielsa/bootcamp_helper_app_project'
				},
				{ projectName: 'Weather App', projectUrl: '#' },
				{ projectName: 'turnUp', projectUrl: 'https://github.com/MightyKielsa/turnUp_front-end' }
			]
		},
		{
			skillName: 'Svelte',
			skillImg: '/svelte.png',
			skillAlt: 'Svelte icon',
			skillId: 5,
			info: 'blah blah blah',
			projectsArr: [
				{
					projectName: 'This page!',
					projectUrl: 'https://github.com/MightyKielsa/my_professional_page'
				}
			]
		},
		{
			skillName: 'Node.js',
			skillImg: '/node-js.png',
			skillAlt: 'Node icon',
			skillId: 6,
			info: 'blah blah blah',
			projectsArr: [
				{
					projectName: 'Bootcam Adiutor',
					projectUrl: 'https://github.com/MightyKielsa/bootcamp_helper_app_project'
				},
				{ projectName: 'turnUp', projectUrl: 'https://github.com/MightyKielsa/turnUp_front-end' }
			]
		},
		{
			skillName: 'SQL',
			skillImg: '/sql-server.png',
			skillAlt: 'SQL icon',
			skillId: 7,
			info: 'blah blah blah',
			projectsArr: [
				{
					projectName: 'Bootcam Adiutor',
					projectUrl: 'https://github.com/MightyKielsa/bootcamp_helper_app_project'
				},
				{ projectName: 'turnUp', projectUrl: 'https://github.com/MightyKielsa/turnUp_front-end' }
			]
		},
		{
			skillName: 'AWS',
			skillImg: '/amazon-aws.png',
			skillAlt: 'AWS icon',
			skillId: 8,
			info: 'blah blah blah',
			projectsArr: [
				{ projectName: 'turnUp', projectUrl: 'https://github.com/MightyKielsa/turnUp_front-end' }
			]
		}
	];
	let hobbiesArr = [
		{ hobbyName: 'Technology', img: 'https://cdn-icons-png.flaticon.com/512/901/901002.png' },
		{ hobbyName: 'Boxing', img: 'https://cdn-icons-png.flaticon.com/512/2112/2112110.png' },
		{ hobbyName: 'Reading', img: 'https://cdn-icons-png.flaticon.com/512/3389/3389081.png' },
		{ hobbyName: 'Gaming', img: 'https://cdn-icons-png.flaticon.com/512/3097/3097980.png' },
		{ hobbyName: 'Warhammer 40k', img: 'https://cdn-icons-png.flaticon.com/512/2917/2917780.png' },
		{ hobbyName: 'Darts', img: 'https://cdn-icons-png.flaticon.com/512/3292/3292137.png' },
		{ hobbyName: 'Ancient History', img: 'https://cdn-icons-png.flaticon.com/512/2234/2234770.png' }
	];
	let booksArr = [
		{
			bookName: 'Zero to One',
			author: 'Peter Thiel',
			img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630663027i/18050143.jpg'
		},
		{
			bookName: 'Thus Spoke Zarathustra',
			author: 'Friedrich Nietzsche',
			img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650680683i/51893.jpg'
		},
		{
			bookName: 'Elon Musk',
			author: 'Ashlee Vance',
			img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1518291452i/25541028.jpg'
		},
		{
			bookName: 'The Republic',
			author: 'Plato',
			img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925655i/30289.jpg'
		},
		{
			bookName: 'The Innovators',
			author: 'Isaacson Walter',
			img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1410191571i/21856367.jpg'
		},
		{
			bookName: 'Creativity, Inc.',
			author: 'Ed Catmull',
			img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1400863577i/18077903.jpg'
		}
	];
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
		font-size: 24px;
	}

	* {
		margin: 0;
		padding: 0;
		font-family: var(--font-fam);
	}
	.main-body-element {
		background-color: var(--background);
		height: 392vh;
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
		margin-top: 3vh;
		font-size: 60px;
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
		width: 80%;
		text-align: center;
		height: 47vh;
	}

	.about-me p {
		margin-top: 48px;
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
		font-size: 18px;
		width: 300px;
		height: 600px;
		padding: 2rem;
		border-radius: 2rem;
		font-size: 130%;
		list-style: none;
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.personal-corner-content-div li {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: all 0.5s;
		border-radius: 1rem;
		padding: 6px;
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
