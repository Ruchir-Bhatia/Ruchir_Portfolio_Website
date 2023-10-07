import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "iOS Developer",
    icon: backend,
  },
  {
    title: "Data Structures & Algorithm",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Member of Technical And Management Team",
    company_name: "GDSC BVP Pune",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2020 - June 2023",
    points: [
      "Topic Selection: Played a crucial role in identifying and selecting relevant and emerging technologies that engineering students can pursue, such as Flutter and Dart.",
      "ebinar Organization: Took the initiative to organize webinars to educate and engage engineering students on these chosen technologies.",
      "Helped arrange and manage the working of the webinar and connections and coordinate with the speakers",
      "Quality Assurance: Ensured that the content and material presented in the webinars met high standards of accuracy, clarity, and relevance to provide valuable learning experiences",
    ],
  },
  {
    title: "Summer Intern",
    company_name: "Redis",
    icon: meta,
    iconBg: "#383E56",
    date: "June 2023 - September 2023",
    points: [
      "Completed the required assessments and Learned about the basics and advanced skills related to the Redis Database through courses provided on Redis Uniersity.",
      "Teamwork: Helped work in a project in a team through my skill of Accessing Redis Database using JavaScript and performing as required by the team.",
      "Skill Development: Developing skills necessary to perform and deliver in a corporate work environment and work under pressure as per the expectations and requirements.",
    ],
  },
  {
    title: "Seeking Job Opportunities",
    company_name: "Company needing Web Development interns",
    icon: shopify,
    iconBg: "#ffffff",
    date: "Currently",
    points: [
      "Seeking Internship and Job opportunities and chance to work on front-end web development technologies and some backend technologies.",
      "I am skilled at C++, C, Swift, HTML5, CSS3, Bootstrap, JavaScript, Front-end Frameworks (like React.js), jQuery, Node.js, Express.js, MongoDB, NoSQL, SQL, Github etc.",
      "I have built Full stack project using the MERN stack. (MongoDB, Express.js, React, Node.js)",
      "I look forward to speaking with you regarding my skills and attributes which I believe will serve as an asset to support your company’s goals.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Social Media Website Full Stack",
    description:
      "Web-based Social Media platform that allows users to make an account and log in to it using email id and password protected by the encryption. It also allows user to see other people's post and like those posts. User can make their own posts as well with pictures and add other people in their friends list.",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient"
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Ruchir-Bhatia/MERN-Stack-Social-Media-Website.git",
  },
  {
    name: "Blog Website With Complete Database",
    description:
      "Web application is a platform that allows users to create, read, update, and delete blog posts. It utilizes MongoDB as the database to store the blog post data locally on the server. The website consists of a backend developed with Node.js and Express.js, which handles the server-side logic and API endpoints for interacting with the database.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ruchir-Bhatia/Blog_With_Database.git",
  },
  {
    name: "Newsletter-Signup Website",
    description:
      "Newsletter Sign-up Website: Website-based platform that is a user-friendly website to collect Name and Email ID information. Mailchimp Integration: Utilized Mailchimp API to securely store user data on a server. Using the mailchimp platform we can monitor and send emails to all the people signed up with the newsletter.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Mailchimp API",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Ruchir-Bhatia/Newsletter-App.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
