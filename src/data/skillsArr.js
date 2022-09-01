const skillsArr = [
	{
		skillName: 'Javascript',
		skillImg: '/js.png',
		skillAlt: 'JS icon',
		skillId: 1,
		info: 'I learned JS during an intensive bootcamp at School of Code. Most of my projecs are currently written in this language',
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
		info: 'I was introduced to Typesctipt by School of Code, one of my projects is written in this JS superset.',
		projectsArr: [{ projectName: 'Weather App', projectUrl: '#' }]
	},
	{
		skillName: 'HTML/CSS',
		skillImg: '/html.png',
		skillAlt: 'HTML and CSS icon',
		skillId: 3,
		info: 'I got introduced to the basics of HTML and CSS in secondary school. I decided re-learn it as part of my career change plan.',
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
		info: 'School of Code provided me not only with fundamentals of JS, but also allowed me to explore React and concepts necessary for learning other frameworks.',
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
		info: "I heard about Svelte from a person close to me and I decided to explore it as part of my learning journey. I fell in love with it's simplicity and efficiency",
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
		info: 'Since front-end is only half the story, I learned node.js and the magic of the back end at School of Code. I used this framework in all of my full-stack projects',
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
		info: 'More specifically PostgreSQL! It was taugth to me as a tool for managing relational databases and me and my teams used it in most of our projects.',
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
		info: 'Me and my team used AWS Amplify and Cognito in our project TurnUp to handle deployment and authentication, despite a steep learning curve it is a great tool to work with.',
		projectsArr: [
			{ projectName: 'turnUp', projectUrl: 'https://github.com/MightyKielsa/turnUp_front-end' }
		]
	}
];

export default skillsArr;
