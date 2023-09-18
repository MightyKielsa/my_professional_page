const skillsArr = [
	{
		skillName: 'Javascript',
		skillImg: '/js.png',
		skillAlt: 'JS icon',
		skillId: 1,
		info: 'Most of my personal projects are written in this language and I had a chance to work with it professionally at Hippo with gov.uk frameworks and Next.js',
		projectsArr: [
			{
				projectName: 'Bootcamp Adiutor',
				projectUrl: 'https://github.com/MightyKielsa/bootcamp_adiutor_front_end'
			},
			{
				projectName: 'Weather App',
				projectUrl: 'https://github.com/MightyKielsa/weather_app_pk_hm'
			},
			{ projectName: 'turnUp', projectUrl: 'https://github.com/MightyKielsa/turnUp_front-end' }
		]
	},
	{
		skillName: 'Typescript',
		skillImg: '/typescript.png',
		skillAlt: 'Typescript icon',
		skillId: 2,
		info: 'I was introduced to Typescript by School of Code, one of my projects is written in this JS superset.',
		projectsArr: [
			{
				projectName: 'Weather App',
				projectUrl: 'https://github.com/MightyKielsa/weather_app_pk_hm'
			}
		]
	},
	{
		skillName: 'Python',
		skillImg: '/python.png',
		skillAlt: 'Python icon',
		skillId: 3,
		info: "I Python while working on data integration projects during my time at Hippo Digital. During those projects I've been exposed to libraries such as Requests, Pydantic, Boto3, Pytest and more.",
		projectsArr: [
			{
				projectName: 'Chat Statistics Website',
				projectUrl: 'https://github.com/MightyKielsa/bootcamp_helper_app_project'
			},
			{
				projectName: 'Data mapping Python package',
				projectUrl: 'https://github.com/MightyKielsa/json_mapping_project'
			}
		]
	},
	{
		skillName: 'React',
		skillImg: '/atom.png',
		skillAlt: 'React icon',
		skillId: 4,
		info: 'I have many personal projects built with React and I got a chance to work with this framework and with Next.js while working at Hippo',
		projectsArr: [
			{
				projectName: 'Bootcam Adiutor',
				projectUrl: 'https://github.com/MightyKielsa/bootcamp_helper_app_project'
			},
			{
				projectName: 'Weather App',
				projectUrl: 'https://github.com/MightyKielsa/weather_app_pk_hm'
			},
			{ projectName: 'turnUp', projectUrl: 'https://github.com/MightyKielsa/turnUp_front-end' }
		]
	},
	{
		skillName: 'Svelte',
		skillImg: '/svelte.png',
		skillAlt: 'Svelte icon',
		skillId: 5,
		info: "I learned and used Svelte to develop my portfolio page and I fell in love with it's simplicity and efficiency.",
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
		info: 'Since front-end is only half the story, I also know Node.js and used it in many fo my personal and team projects, to maintain the uniformity of the language accross the front and the backend.',
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
		info: 'I have a good grasp of relational databases and working experience with SQL. I used PostgresSQL for most of my personal projects. ',
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
		info: 'During my time at Hippo Digital I worked extensively with tools such as: Lambda, DynamoDB, S3, Eventbridge, Step Functions, Cloudwatch and more.',
		projectsArr: [
			{ projectName: 'turnUp', projectUrl: 'https://github.com/MightyKielsa/turnUp_front-end' },
			{
				projectName: 'Professional Data Integration Project',
				projectUrl: '#'
			}
		]
	},
	{
		skillName: 'Docker',
		skillImg: '/docker.png',
		skillAlt: 'Docker icon',
		skillId: 9,
		info: 'I learned how to set up and use docker for a personal project.',
		projectsArr: [
			{
				projectName: 'Groupchat Stats Website',
				projectUrl: 'https://github.com/MightyKielsa/gala_frontend'
			}
		]
	},
	{
		skillName: 'Unit Testing',
		skillImg: '/testing.png',
		skillAlt: 'testing icon',
		skillId: 10,
		info: "I'm experienced in using unit testing libraries such as Pytest and Jest. I used those technologies working on a data integration project at Hippo.",
		projectsArr: [
			{
				projectName: 'turnUp',
				projectUrl: 'https://github.com/MightyKielsa/turnUp_front-end'
			},
			{
				projectName: 'Bootcamp Adiutor',
				projectUrl: 'https://github.com/MightyKielsa/bootcamp_adiutor_front_end'
			},
			{
				projectName: 'Professional Data Integration Project',
				projectUrl: '#'
			}
		]
	},
	{
		skillName: 'C++',
		skillImg: '/cpp.png',
		skillAlt: 'C plus plus icon',
		skillId: 11,
		info: 'As a way of deepening my programming knowledge I decided to learn a lower level, compiled and statically typed language. ',
		projectsArr: [
			{
				projectName: 'UFO command line game',
				projectUrl: 'https://github.com/MightyKielsa/UFO_game'
			}
		]
	},
	{
		skillName: 'Terraform',
		skillImg: '/terraform.png',
		skillAlt: 'Terraform icon',
		skillId: 12,
		info: 'Through my work at Hippo I was exposed to Terraform and learned to deploy cloud architecture with the use of Terraform.',
		projectsArr: [
			{
				projectName: 'Professional Data Integration Project',
				projectUrl: '#'
			}
		]
	}
];

export default skillsArr;
