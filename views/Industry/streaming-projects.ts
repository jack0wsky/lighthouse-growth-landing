import { Sap, Roku, ReactIcon, IOSIcon} from "@/shared/icons/technologies";
import { Project } from "@/views/Industry/types";

export const streamingProjects: Project[] = [
  {
    title:
      "Swedish telecom – lead development of e-commerce solution based on SAP Commerce platform",
    aboutClient:
      "Swedish telecom provides a range of telecommunications services, including mobile and fixed-line services, broadband internet, and television. The company operates in several countries, including Sweden, Norway, Finland, Denmark, Estonia, Latvia and Lithuania. The company has invested in new technologies, such as 5G, and has partnered with other companies to develop digital services and solutions to stay ahead of competitors",
    scope:
      "The scope of the project is to implement an online store along with the integrations to SAP CRM and SAP ERP. The online store is based on SAP Commerce (enterprise-level e-commerce platform) and customized user interface developed using React framework. \n",
    result: `The e-commerce team is divided into two sub-teams: frontend and backend. 
              The backend team is responsible for designing and developing new features, integrating SAP Commerce with other systems 
              and providing APIs for the frontend. Experience with Java, Spring and SAP Commerce is required in the backend team. 
              The frontend team is responsible for developing the user interface and collaborating with the backend team to ensure 
              seamless integration. Front is based on React framework, JavaScript and CSS is required in the frontend team. 
              Both sub-teams are working in the agile methodology, using Git for version control and Jenkins for continuous integration.
              
              Lighthouse successfully lead the digital transformation and contribute to overall client's system sustainability.`,
    technologies: [Sap],
  },
  {
    title:
      "Supported implementation of partner's streaming platform for leading German broadcaster.",
    aboutClient:
      "German broadcaster to start European video on demand streaming service. Service available in multiple countries with some major modifications across regions.",
    scope: "",
    technologies: [],
    result:
      "Supported Swedish streaming platform in implementation and customization of their product to match required UX and CI. Ensured quality by rigorous app testing on different devices, CTVs. ",
  },
  {
    title: "Support Swedish streaming platform in their product development",
    aboutClient:
      "Swedish streaming platform powers leading  broadcasters and enables them to provide world-class video services to their customers. Client works with global industry leaders - such as Deutsche Telekom, NBC Universal, ITV, Globo, Hallmark, Bloomberg.",
    scope:
      "Leading front end architecture development R&D project, done  predominantly in React and Javascript. Support testing initiatives, including display on multiple devices. Technologies used: React, Javascript, Roku, iOS.",
    result:
      "Playing a key role in development of client product's front-end architecture and further drive user experience. ",
    technologies: [ReactIcon, Roku, IOSIcon],
  },
];
