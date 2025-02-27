import { v4 as uuidv4 } from "uuid";
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from "react-icons/fi";

export const projectsData = [
	{
		id: 1,
		title: "Flip Academy",
		url: "https://flipacademy.ca",
		category: "Web Application",
		img: "/images/flip_1.jpg",
		ProjectHeader: {
			title: "Flip Academy",
			publishDate: "Jul 26, 2023",
			tags: ["Fullstack Development", "Django", "React.JS"],
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: "Flip Academy",
				img: "/images/self_login.jpg",
			},
			{
				id: uuidv4(),
				title: "Flip Academy",
				img: "/images/flip_2.jpg",
			},
			{
				id: uuidv4(),
				title: "Flip Academy",
				img: "/images/flip_3.jpg",
			},
		],
		ProjectInfo: {
			ClientHeading: "About Client",
			CompanyInfo: [
				{
					id: uuidv4(),
					title: "Name",
					details: "Flip and Floss Inc.",
				},
				// {
				// 	id: uuidv4(),
				// 	title: "Description",
				// 	details:
				// 		"A Revolutionary Money App for Families. Designed to help kids learn, save, invest, and break generational cycles.",
				// },
				{
					id: uuidv4(),
					title: "Website",
					details: "https://www.flipacademy.ca/",
				},
				// {
				// 	id: uuidv4(),
				// 	title: "Phone",
				// 	details: "555 8888 888",
				// },
			],
			ObjectivesHeading: "Description",
			ObjectivesDetails:
				"A Revolutionary Money App for Families. Designed to help kids learn, save, invest, and break generational cycles.",
			Technologies: [
				{
					title: "Tools & Technologies",
					techs: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS"],
				},
			],
			ProjectDetailsHeading: "Challenge",
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						"Flip & Floss is an innovative financial literacy platform designed to empower families by teaching children essential money management skills. Through its engaging mobile app, the platform offers a simulated banking experience complemented by animated courses and gamified learning tools. Children can personalize their learning journey by selecting avatars and customizing their dashboards, making financial education both fun and effective.",
				},
				{
					id: uuidv4(),
					details:
						'A standout feature of Flip & Floss is its real debit card, which allows children to make actual purchases under parental supervision. Parents can assign chores, set savings goals, and reward achievements with "Flip Dollars," the platform\'s virtual currency. This hands-on approach helps children grasp the value of earning, saving, and spending responsibly, thereby fostering financial independence from an early age.',
				},
				{
					id: uuidv4(),
					details:
						"For educational institutions, Flip & Floss offers the Flip Academy program tailored for middle and high school students. This program aligns with educational standards and provides teachers with tools to create immersive, real-life financial simulations in the classroom. By integrating Flip & Floss into their curriculum, schools can equip students with the knowledge and skills necessary to navigate the evolving financial landscape confidently.",
				},
			],
			// SocialSharingHeading: "Share This",
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 2,
		title: "Selfe",
		url: "selfe",
		category: "Mobile Application",
		img: "/images/selfe_login.jpg",
		ProjectHeader: {
			title: "Selfe",
			publishDate: "N/A",
			tags: ["Mobile Application", "Flutter", "Firebase", "Nuxt.JS"],
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: "Selfe",
				img: "/images/selfe_login.jpg",
			},
			// {
			// 	id: uuidv4(),
			// 	title: "Selfe",
			// 	img: "/images/selfe_home.jpg",
			// },
			{
				id: uuidv4(),
				title: "Selfe",
				img: "/images/selfe_events.jpg",
			},
			{
				id: uuidv4(),
				title: "Selfe",
				img: "/images/selfe_event_details.jpg",
			},
		],
		ProjectInfo: {
			ClientHeading: "About Client",
			CompanyInfo: [
				{
					id: uuidv4(),
					title: "Name",
					details: "KBK Tech",
				},
				{
					id: uuidv4(),
					title: "Services",
					details: "Software Development",
				},
				{
					id: uuidv4(),
					title: "Instagram",
					details: "https://www.instagram.com/kbktech/?hl=en",
				},
			],
			ObjectivesHeading: "Description",
			ObjectivesDetails: "",
			Technologies: [
				{
					title: "Tools & Technologies",
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"Nuxt.js",
						"TailwindCSS",
						"Flutter",
						"Firebase Auth",
						"Firestore",
					],
				},
			],
			ProjectDetailsHeading: "Challenge",
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						"Selfe is a ticketing and event management platform that allows users to create, share, and discover events in their area. The platform offers a range of features, including event creation, ticket sales, and event discovery. Users can create events, set ticket prices, and share their events with friends and followers. The platform also includes a social feed where users can discover events happening in their area and follow other users.",
				},
				// {
				// 	id: uuidv4(),
				// 	details:
				// 		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
				// },
				// {
				// 	id: uuidv4(),
				// 	details:
				// 		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
				// },
				// {
				// 	id: uuidv4(),
				// 	details:
				// 		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
				// },
			],
			// SocialSharingHeading: "Share This",
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 3,
		title: "Lovelocal",
		url: "https://www.lovelocal.in/",
		category: "Web Application",
		img: "/images/selfe_login.jpg",
		ProjectHeader: {
			title: "Selfe",
			publishDate: "N/A",
			tags: ["Web Application", "TailwindCSS", "Next.JS"],
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: "Selfe",
				img: "/images/selfe_login.jpg",
			},
			// {
			// 	id: uuidv4(),
			// 	title: "Selfe",
			// 	img: "/images/selfe_home.jpg",
			// },
			{
				id: uuidv4(),
				title: "Selfe",
				img: "/images/selfe_events.jpg",
			},
			{
				id: uuidv4(),
				title: "Selfe",
				img: "/images/selfe_event_details.jpg",
			},
		],
		ProjectInfo: {
			ClientHeading: "About Client",
			CompanyInfo: [
				{
					id: uuidv4(),
					title: "Name",
					details: "KBK Tech",
				},
				{
					id: uuidv4(),
					title: "Services",
					details: "Software Development",
				},
				{
					id: uuidv4(),
					title: "Instagram",
					details: "https://www.instagram.com/kbktech/?hl=en",
				},
			],
			ObjectivesHeading: "Description",
			ObjectivesDetails: "",
			Technologies: [
				{
					title: "Tools & Technologies",
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"Nuxt.js",
						"TailwindCSS",
						"Flutter",
						"Firebase Auth",
						"Firestore",
					],
				},
			],
			ProjectDetailsHeading: "Challenge",
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						"Selfe is a ticketing and event management platform that allows users to create, share, and discover events in their area. The platform offers a range of features, including event creation, ticket sales, and event discovery. Users can create events, set ticket prices, and share their events with friends and followers. The platform also includes a social feed where users can discover events happening in their area and follow other users.",
				},
				// {
				// 	id: uuidv4(),
				// 	details:
				// 		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
				// },
				// {
				// 	id: uuidv4(),
				// 	details:
				// 		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
				// },
				// {
				// 	id: uuidv4(),
				// 	details:
				// 		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
				// },
			],
			// SocialSharingHeading: "Share This",
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
];
