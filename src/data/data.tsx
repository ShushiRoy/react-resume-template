import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Shushital Roy',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Shushital Roy`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Toronto based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Levio Inc.</strong> I specializing in consulting to drive clients' business objectives.
        I'm open and eager to connect with new individuals to explore collaborative opportunities in the tech realm.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a seasoned consultant with over three years of experience, I bring a robust skill set encompassing 
  Python, Java, C#, ASP.Net, and Angular. Backed by an Azure Fundamentals Certification and 
  proficient in SQL, I specialize in delivering tailored solutions that seamlessly integrate technology to meet diverse business needs.`,
  aboutItems: [
    { label: 'Location', text: 'Toronto, ON', Icon: MapIcon },
    { label: 'Age', text: '25', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Canadian', Icon: FlagIcon },
    { label: 'Study', text: 'University of Ottawa', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Levio Inc.', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2021',
    location: 'University of Ottawa',
    title: 'BASc. in Computer Engineering',
    content: <p>Built fundamental engineering skills and delves into various facets of computer software and hardware.
      Specialized in  areas like microprocessor-based systems, computer architecture, programming, real-time operating systems, software engineering, and robotics.
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2021 - Present',
    location: 'Levio Inc.',
    title: 'Software Developer',
    content: (
      <ul>
        <li>
          Led successful migration of healthcare data from GoldCare to AlayaCare,
          employing Python Jupyter Notebooks on AWS Sagemaker to preprocess and transform
          data formats into AlayaCare specifications, enhancing compatibility and integrity of transferred datasets
        </li><br></br>
        <li>
          Developed automated PDF generation system for client records, utilizing XML parsing techniques to extract and
          segment relevant data, culminating in the creation of standardized PDF documents tailored to individual
          patient needs, streamlining documentation processes and improving efficiency
        </li><br></br>
        <li>
          Spearheaded successful migration of data from WordPress to BigCommerce, leveraging C# and BigCommerce API integration to
          seamlessly transfer customer records, product information, and past order history, ensuring continuity and accuracy in the new Ecommerce environment
        </li><br></br>
        <li>
          Conducted comprehensive quality assurance testing on the BigCommerce website, meticulously validating feature functionalities and assessing user experience
          to identify and rectify any potential issues, ensuring optimal performance and smooth navigation for end‑users
        </li><br></br>
        <li>
          Built a comprehensive Child‑Spousal Divorce calculator using Angular which calculated values based on various factors such as the customer's province, current earnings,
          ownership of businesses, and assets like jewelry
        </li><br></br>
        <li>
          Developed a custom Outlook 365 plug‑in using C# to address client concerns regarding the confidentiality of emails using POST requests that allowed emails to be filed into the IBM Lotus Notes Database
        </li><br></br>
        <li>
          Engineered new and customized features for client projects, while leveraging C# to improve the versatility of the user experience
        </li><br />
        <li>
          Contributed to the enhancement and bug resolution of a payment banking system built with ASP.Net
        </li><br />
        <li>
          Utilized AWS S3 buckets to store registration files and utilized CloudWatch for detailed log analysis, ensuring timely issue resolution and improving overall client satisfaction
        </li>
      </ul>
    ),
  },
  {
    date: 'June 2020 - September 2020',
    location: 'Real Decoy',
    title: 'Web Developer',
    content: (
      <p>
        <ul>
          <li>
            Customized and implemented new features for client projects using PHP and JavaScript
          </li><br />
          <li>
            Addressed issues such as improving search functionality to include special characters and developing SQL queries to generate comprehensive reports for customers
          </li><br />
          <li>
            Utilized project tracking tools, including JIRA, to effectively manage and prioritize ongoing bugs and issues reported by clients
          </li><br />
          <li>
            Developed numerous test cases, including verifying the correct parameter passing when adding new products to the inventory system
          </li><br />
        </ul>
      </p>
    ),
  },
  {
    date: 'September 2019 - December 2019',
    location: 'Blackberry Ltd.',
    title: 'Software Tester',
    content: (
      <p>
        <ul>
          <li>
            Conducted extensive testing on a custom Blackberry application, utilizing various techniques such as
            desyncing the application from the database and introducing changes to assess the resilience and identify potential errors
          </li><br />
          <li>
            Provided detailed step‑by‑step descriptions of actions leading to critical errors, including capturing and forwarding error logs for prompt resolution,
            which helped prevent the release of bugs to clients
          </li><br />
          <li>
            Shared comprehensive reports on bug completion status to team members, clients, and higher management, which enabled stakeholders to make informed decisions
            on project timelines and extensions
          </li>
        </ul>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you have an interesting project, or just want to say hi, feel free to reach out.',
  items: [
    {
      type: ContactType.Email,
      text: 'info@shushitalroy.ca',
      href: 'mailto: info@shushitalroy.ca',
    },
    {
      type: ContactType.Location,
      text: 'Toronto ON, Canada',
      href: 'https://maps.app.goo.gl/Tik8dEXtno8JQf7P7',
    },
    {
      type: ContactType.Github,
      text: 'ShushiRoy',
      href: 'https://github.com/ShushiRoy',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/ShushiRoy' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/shushitalroy/' }
];
