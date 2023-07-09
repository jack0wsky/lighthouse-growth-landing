import { Sap, Roku, ReactIcon, IOSIcon } from "@/shared/icons/technologies";
import { LocalizedProject } from "@/views/Industry/types";

export const streamingProjects: LocalizedProject[] = [
  {
    en: {
      title: "Support Swedish streaming platform in their product development",
      aboutClient:
        "Swedish streaming platform powers leading  broadcasters and enables them to provide world-class video services to their customers. Client works with global industry leaders - such as Deutsche Telekom, NBC Universal, ITV, Globo, Hallmark, Bloomberg.",
      scope:
        "Leading front end architecture development R&D project, done  predominantly in React and Javascript. Support testing initiatives, including display on multiple devices. Technologies used: React, Javascript, Roku, iOS.",
      result:
        "Playing a key role in development of client product's front-end architecture and further drive user experience. ",
      technologies: [ReactIcon, Roku, IOSIcon],
    },
    de: {
      title:
        "Unterstützung der schwedischen Streaming-Plattform bei der Produktentwicklung.",
      aboutClient:
        "Die schwedische Streaming-Plattform ermöglicht es führenden Rundfunkanstalten, erstklassige Videodienste für ihre Kunden bereitzustellen. Der Kunde arbeitet mit globalen Branchenführern wie Deutsche Telekom, NBC Universal, ITV, Globo, Hallmark und Bloomberg zusammen.",
      scope:
        "Leitendes Forschungs- und Entwicklungsprojekt für die Entwicklung der Front-End-Architektur, hauptsächlich umgesetzt mit React und Javascript. Unterstützung von Testinitiativen, einschließlich der Anzeige auf verschiedenen Geräten. Verwendete Technologien: React, Javascript, Roku, iOS.",
      result:
        "Eine wesentliche Rolle bei der Entwicklung der Front-End-Architektur des Produkts des Kunden spielen und das Benutzererlebnis weiter vorantreiben.",
      technologies: [ReactIcon, Roku, IOSIcon],
    },
  },
  {
    en: {
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
    de: {
      title:
        "Schwedischer Telekommunikationsanbieter – Leitung der Entwicklung einer E-Commerce-Lösung auf Basis der SAP Commerce-Plattform.",
      aboutClient:
        "Der schwedische Telekommunikationsanbieter bietet eine Vielzahl von Telekommunikationsdiensten an, darunter Mobil- und Festnetzdienste, Breitbandinternet und Fernsehen. Das Unternehmen ist in mehreren Ländern tätig, darunter Schweden, Norwegen, Finnland, Dänemark, Estland, Lettland und Litauen. Das Unternehmen hat in neue Technologien wie 5G investiert und hat Partnerschaften mit anderen Unternehmen geschlossen, um digitale Dienste und Lösungen zu entwickeln, um sich gegenüber Wettbewerbern einen Vorsprung zu verschaffen.",
      scope:
        "Der Umfang des Projekts besteht darin, einen Online-Shop zusammen mit den Integrationen zu SAP CRM und SAP ERP umzusetzen. Der Online-Shop basiert auf SAP Commerce (einer E-Commerce-Plattform auf Unternehmensebene) und verfügt über eine maßgeschneiderte Benutzeroberfläche, die mit dem React-Framework entwickelt wurde.",
      result: `Das E-Commerce-Team ist in zwei Unterteams aufgeteilt: Frontend und Backend.
Das Backend-Team ist für die Gestaltung und Entwicklung neuer Funktionen zuständig, integriert SAP Commerce mit anderen Systemen und stellt APIs für das Frontend bereit. Erfahrung mit Java, Spring und SAP Commerce wird im Backend-Team vorausgesetzt.
Das Frontend-Team ist für die Entwicklung der Benutzeroberfläche verantwortlich und arbeitet eng mit dem Backend-Team zusammen, um eine nahtlose Integration zu gewährleisten. Das Frontend basiert auf dem React-Framework, wobei Kenntnisse in JavaScript und CSS im Frontend-Team erforderlich sind.
Beide Unterteams arbeiten nach der agilen Methodik, verwenden Git zur Versionskontrolle und Jenkins für die kontinuierliche Integration.

Lighthouse hat erfolgreich die digitale Transformation geleitet und zum nachhaltigen Erfolg des gesamten Systems des Kunden beigetragen.`,
      technologies: [Sap],
    },
  },
  {
    en: {
      title:
        "Supported implementation of partner's streaming platform for leading German broadcaster.",
      aboutClient:
        "German broadcaster to start European video on demand streaming service. Service available in multiple countries with some major modifications across regions.",
      scope:
        "Our team ensured the quality of the platform implementation and working according to the specification by rigorous testing processes on different connected devices, CTVs.",
      technologies: [],
      result:
        "Supported Swedish streaming platform in implementation and customization of their product to match required UX and CI. Ensured quality by rigorous app testing on different devices, CTVs. ",
    },
    de: {
      title:
        "Unterstützung bei der Implementierung der Streaming-Plattform eines Partners für einen führenden deutschen Rundfunkanstalt.",
      aboutClient:
        "Deutscher Rundfunkanstalt plant europäischen Video-on-Demand-Streaming-Dienst zu starten. Der Service wird in mehreren Ländern verfügbar sein, wobei einige bedeutende Anpassungen je nach Region vorgenommen werden.",
      scope:
        "Unser Team hat die Qualität der Plattformimplementierung sichergestellt und gemäß den Spezifikationen durch rigorose Testprozesse auf verschiedenen verbundenen Geräten und CTVs überprüft.",
      technologies: [],
      result:
        "Unterstützung der schwedischen Streaming-Plattform bei der Implementierung und Anpassung ihres Produkts, um die erforderliche Benutzererfahrung (UX) und das Corporate Identity (CI) zu erfüllen. Qualitätssicherung durch rigoroses Testen der App auf verschiedenen Geräten und CTVs.",
    },
  },
];
