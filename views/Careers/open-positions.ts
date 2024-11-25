export interface OpenPosition {
  name: string;
  slug: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const openPositions: OpenPosition[] = [
  {
    name: "Java Fullstack Developer",
    slug: "java-fullstack-developer",
    description:
      "We are looking for a Senior Java Developer with knowledge of Angular, Spring, and Typescript.",
    responsibilities: [
      "Design and develop software solutions for logistics operations using Java technologies",
      "Collaborate with cross-functional teams to identify and prioritize software requirements",
      "Write high-quality code that is scalable, maintainable and easy to understand",
      "Perform code review, testing and debugging to ensure software quality and stability",
      "Optimize software applications for maximum speed and scalability",
      "Stay abreast of emerging trends and technologies in software development",
    ],
    requirements: [
      "5+ years of experience in the Software development industry",
      "Experience with micro-services-based architecture and strong experience with AWS technologies",
      "Experience leading and mentoring other developers (from junior to senior level)",
      "Ability to solve complex technical tasks independently and be responsible for technical solutions and quality",
      "Highly skilled as a developer (experience in Java web development using relational databases and JavaScript frameworks such as Angular, React or Vue)",
      "Proactive, confident, constructive and rational attitude",
    ],
  },
  {
    name: "PHP Developer with Laravel",
    slug: "php-developer-with-laravel",
    description:
      "We are looking for a PHP Developer with knowledge of Laravel and JavaScript / Vue.js. Working on projects from the industry of media streaming. High work culture and extended senior team. Full-time, long-term, remote.",
    responsibilities: [
      "Collaborate with cross-functional teams to gather and analyze requirements, design solutions, and implement new features",
      "Write clean, efficient, and secure code, adhering to coding standards and following established development processes",
      "Utilise the Laravel framework to build scalable and high-performance web applications",
      "Implement responsive and user-friendly front-end interfaces using JavaScript and Vue.js",
      "Apply strong knowledge of object-oriented programming (OOP) principles and design patterns to create efficient and reusable code",
      "Perform thorough testing and debugging of applications to ensure optimal functionality and reliability",
      "Optimize database queries and work with MySQL (or similar RDBMS) to efficiently manage and manipulate data",
      "Stay up-to-date with emerging trends, technologies, and industry best practices in PHP development",
      "Collaborate with team members to troubleshoot and resolve technical issues in a timely manner",
    ],
    requirements: [
      "3+ years of experience in PHP",
      "Solid experience with Laravel Framework",
      "Good Front-end development skills (JavaScript, Vue.js)",
      "Strong OOP and design patterns knowledge",
      "Solid experience with MySQL (or similar RDBMS)",
      "Very good English",
    ],
  },
  {
    name: "Business Developer",
    slug: "business-developer",
    description:
      "We are looking for a Business Development Manager for Swedish market. We expect you to bring in new customers for our SAP tech hub as we are specialized in this industry.",
    responsibilities: [
      "Develop relationships with new prospective clients",
      "Call prospects, book meetings, negotiate and close deals",
      "Surprise us with your own initiatives to help us deliver excellence",
    ],
    requirements: [
      "Experience in IT/ TECH related B2B sales, preferably related with SAP",
      "Strong network of local tech companies",
      "Fluency in Swedish and good English",
      "Previous knowledge of FinTech, Telekom, e-commerce, or the transportation market is a great advantage here!",
    ],
  },
  {
    name: "SAP Hybris Developer",
    slug: "sap-hybris-developer",
    description:
      "We are looking for an experienced SAP Commerce (Hybris) Developer",
    responsibilities: [],
    requirements: [
      "3+ years of experience in development in Hybris.",
      "Strong experience in programming using Java.",
      "Experience developing with Spring MVC, REST services.",
      "Experience in SAP commerce core, backoffice configurations, search configurations.",
      "Experience in SAP commerce integrations, rules engines and promotions.",
      "Familiar with one or more scripting languages such as JavaScript, BeanShell, Groovy etc.",
    ],
  },
];
