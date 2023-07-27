import { Component } from '@angular/core';
import { Experience } from '../../models/experience.interface';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  myExperiences: Experience[] = [
    {
      title: '2022 - DevP — Full-Stack Developer',
      description:
        'Currently working on assist Bw Events client in effectively managing swoogo events, facilitating quick event handling, listings, and' +
        'streamlined notifications across all client websites. Benefited over 400 users worldwide, ensuring their informed' +
        'participation in events',
    },
    {
      title: '2021 - Epidata — Java Developer',
      description: 'Improved user experience for Mulesoft clients by integrating new technologies and developing connectors for Azure' +
        'EventHub, Stripe, Netsuite, and Shopify. Collaborated with ForgeRock on connectors like GoTo and Dropbox, achieving' +
        'seamless integration into their systems without the need for programming expertise. Significantly reduced costs for clients' +
        'by eliminating the requirement for an IT team. Successfully dealt with messaging concurrency and Software as a Service' +
        '(SaaS) challenges.'
    },
    {
      title: '2020 - ArtDeCode SRL — Java Developer',
      description:
        'Successfully migrated a legacy system for a prominent Argentinean bank (Banco Francés), transforming it into a scalable' +
        'system with updated technologies. Led the migration from Sybase, Java 7, SOAP architecture, and Angular JS front-end' +
        'to API RESTful web services, Java 8 in the Spring Framework with JPA Hibernate, and Angular 8. Demonstrated growth' +
        'in Java and Angular expertise through this experience.',
    },
    {
      title: '2019 - Spark Solutions — Full-Stack Developer',
      description:
        'Created and implemented the RentonPark page, facilitating seamless online reservations for lodging, pub services, and' +
        'wakeboard activities. Resulted in heightened customer satisfaction and a significant increase in online bookings.' +
        'Effectively managed reservations, payments, and maintained comprehensive control over wakeboard, hotel, and bar' +
        'operations within a unified system'
    },
    {
      title: '2018 - Freelancer Full-Stack Developer',
      description:
        'Collaborated in a group setting (with two partners) for a third-party project, involving the sale of products from a local' +
        'business. Contributed value to the market by providing real-time stock visibility, profit tracking, and efficient invoice' +
        'management. Utilized React JS, Redux, and Axios for development, while employing Semantic-UI for stylish presentation'
    },
  ];

  technicalKnowledge: string[] = [
    'Java',
    'Spring-Boot',
    'Hibernate',
    'SQL',
    'JavaScript',
    'React',
    'Angular',
    'AWS',
    'Python',
    'Docker',
    'Jenkins',
  ]

  aboutMe: string = 'I am a software developer with a strong expertise in frontend and backend technologies. With 5 years of' +
  'professional experience as a programmer, I have worked on applications with monolithic architectures and connectors. My' +
  'primary focus is consistently delivering excellent results in a timely manner. I have a genuine enthusiasm for learning' +
  'and exploring new technologies, and I actively contribute to my team by providing assistance and support to my colleagues.'
}
