import pencrafted from "../assets/pencrafted.png";
import meetme from "../assets/meetme.png";
import tempu from "../assets/temp-u.png";
import meta from "../assets/meta.png";
import programingwithjs from "../assets/meeta.png";
import frontend from "../assets/meeta.png";
import discordbot from "../assets/discordbot.png";
import versioncontrol from "../assets/versioncontrol.png";
import sitelogo from "../assets/Sitelogo.png";
import N from "../assets/N.png";

const Skill_data = [
  {
    skill_name: "Html 5",
    Image: "/html.png",
    width: "29",
    height: "29",
  },
  {
    skill_name: "Css",
    Image: "/css.png",
    width: "38",
    height: "38",
  },
  {
    skill_name: "Tailwind Css",
    Image: "/tailwind.png",
    width: "46",
    height: "46",
  },
  {
    skill_name: "Bootstrap",
    Image: "/bootstrap.png",
    width: "30",
    height: "30",
  },
  {
    skill_name: "Framer Motion",
    Image: "/framer.png",
    width: "30",
    height: "30",
  },

  {
    skill_name: "React",
    Image: "/react.png",
    width: "33",
    height: "33",
  },
  {
    skill_name: "Vite",
    Image: "/vite.png",
    width: "33",
    height: "33",
  },
  {
    skill_name: "Redux",
    Image: "/redux.png",
    width: "30",
    height: "30",
  },
];

const Skill_data1 = [
  {
    skill_name: "Node js",
    Image: "/nodejs.png",
    width: "29",
    height: "29",
  },
  {
    skill_name: "Express js",
    Image: "/expressjs.png",
    width: "32",
    height: "32",
  },
  {
    skill_name: "MongoDB",
    Image: "/mongodb.png",
    width: "15",
    height: "15",
  },

  // {
  //   skill_name: "Appwrite",
  //   Image: "/appwrite.png",
  //   width: "29",
  //   height: "29",
  // },
  {
    skill_name: "Python",
    Image: "/python.png",
    width: "29",
    height: "29",
  },
  {
    skill_name: "PHP",
    Image: "/php.png",
    width: "38",
    height: "38",
  },
  {
    skill_name: "MySql",
    Image: "/mysql.png",
    width: "50",
    height: "50",
  },
];

const Skill_data2 = [
  // {
  //   skill_name: "Discord.js",
  //   Image: "/discordjs.png",
  //   width: "29",
  //   height: "29",
  // },
  // {
  //   skill_name: "Socket.io",
  //   Image: "/socketio.png",
  //   width: "38",
  //   height: "38",
  // },
  // {
  //   skill_name: "WebRTC",
  //   Image: "/webrtc.png",
  //   width: "29",
  //   height: "29",
  // },
  // {
  //   skill_name: "ReactQuery",
  //   Image: "/reactquery.png",
  //   width: "38",
  //   height: "38",
  // },
  
];
const Skill_data4 = [
  {
    skill_name: "Git",
    Image: "/git.png",
    width: "29",
    height: "29",
  },
  {
    skill_name: "Vscode",
    Image: "/vs.png",
    width: "29",
    height: "29",
  },
  {
    skill_name: "GitHub",
    Image: "/github (3).png",
    width: "38",
    height: "38",
  },
  {
    skill_name: "Postman",
    Image: "/postman.png",
    width: "29",
    height: "29",
  },
];
const Skill_data5 = [
  {
    skill_name: "Java Script",
    Image: "/js.png",
    width: "29",
    height: "29",
  },
];

const Projectinfo = [
  {
    project_icon: sitelogo,
    project_name: "My Portfolio",
    github_link: "https://github.com/AjaySharma78/Myportfolio",
    project_link: "https://ajaysharma07.vercel.app/",
    created_date: "2024/09/28",
    project_desc: [
      "Personal Portfolio: Showcase your skills, projects, and certifications.",
      "Responsive Design: Mobile-friendly UI for seamless user experience.",
      "SEO Optimized: Meta tags and Open Graph for better search engine visibility.",
      "Future Enhancements: Blog section, contact form, and more projects.",
    ],
    skills: [
      "Html",
      "Css",
      "React",
      "Tailwind Css",
      "Framer Motion",
      "Vite",
      "React-router-dom",
    ],
  },
  {
    project_icon: pencrafted,
    project_name: "Pencrafted(Blog Project)",
    github_link: "https://github.com/AjaySharma78/Blog_project",
    project_link: "https://pencrafted.vercel.app/",
    created_date: "2024/07/24",
    project_desc: [
      "Authentication: Login/signup with email verification and OAuth via Appwrite.",
      "CRUD Operations: Manage blog posts with full control.",
      "Content Creation: Rich text editing via TinyMCE.",
      "User Interaction: Non-authors can read and create new blogs.",
      "Responsive Design: Tailwind CSS for modern, responsive UI.",
    ],
    skills: [
      "React",
      "Tailwind Css",
      "Appwrite",
      "Redux",
      "Framer Motion",
      "Vite",
      "TinyMCE",
      "React-hook-form",
      "React-router-dom",
    ],
  },
  
  {
    project_icon: tempu,
    project_name: "TempU(Weather App)",
    github_link: "https://github.com/AjaySharma78/Weather_app",
    project_link: "https://temp-u.vercel.app/",
    created_date: "2024/03/14",
    project_desc: [
      "Real-Time Location Forecast: Auto-displays current weather via user’s location.",
      "Custom Location Search: Search and view weather for any location.",
      "Detailed Hourly Forecast: Hourly updates with temperature and icons.",
      "Extended 15-Day Forecast: 15-day outlook with highs, lows, and icons.",
      "Temperature Notifications: Alerts for significant temperature changes.",
      "Adaptive Themes: Adjusts app themes based on time of day.",
    ],
    skills: [
      "Html",
      "Css",
      "Javascript",
      "Openweathermap API",
      "Geolocation API",
    ],
  },
  {
    project_icon: discordbot,
    project_name: "Discord Bot",
    github_link: "https://github.com/AjaySharma78/discord_bot",
    project_link: "xyz....................",
    created_date: "2024/09/11",
    project_desc: [
      "Short URL Generator: Easily create, manage, and delete short links. View detailed statistics for each link.",
      "Weather Forecast: Provides real-time weather updates and a 16-day forecast using the OpenWeather API.",
    ],
    skills: [
      "Html",
      "Css",
      "Discord.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Javascript",
      "Openweathermap API",
      "Geolocation API",
    ],
  },
  {
    project_icon: meetme,
    project_name: "MeetME(Video Chat)",
    github_link: "https://github.com/AjaySharma78/meetME",
    project_link: "https://meetme-mlno.onrender.com",
    created_date: "2023/11/12",
    project_desc: [
      "Real-Time Video & Audio: WebRTC for smooth, low-latency communication.",
      "Room Creation & Joining: Create or join rooms with unique IDs.",
      "Collaborative Whiteboard: Real-time shared canvas for participant interaction.",
      "Chat Functionality: Integrated chat for seamless communication during calls.",
      "Future Enhancements: UI/UX improvements, mobile support, and latency fixes.",
    ],
    skills: [
      "Html",
      "Css",
      "Javascript",
      "WebRTC",
      "Socket.io",
      "Express.js",
      "Node.js",
    ],
  },
 
];

const Certificationinfo = [
  {
    certification_icon: meta,
    certification_name: "Programming with JavaScript",
    certification_link:
      "https://coursera.org/share/9301c8db00eda6e489e077fd12e4b587",
    certification_image: programingwithjs,
    completed_date: "Oct 9, 2023",
    certification_desc:
      "Learned the basics of JavaScript, the most popular programming language for web development.",

    Certification_hashtags: [
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "meta",
        color: "text-blue-500",
      },
      {
        name: "coursera",
        color: "text-gray-500",
      },
      {
        name: "programming",
        color: "text-green-500",
      },
    ],
  },
  // {
  //   certification_icon: meta,
  //   certification_name: "Introduction to Front-End Development",
  //   certification_link:
  //     "#",
  //   certification_image: frontend,
  //   completed_date: "#",
  //   certification_desc:
  //     "Learned the basics of Front-End Development, the most popular programming language for web development.",

  //   Certification_hashtags: [
  //     {
  //       name: "Front-End",
  //       color: "text-orange-500",
  //     },
  //     {
  //       name: "meta",
  //       color: "text-blue-500",
  //     },
  //     {
  //       name: "Html",
  //       color: "text-yellow-500",
  //     },
  //     {
  //       name: "Css",
  //       color: "text-purple-500",
  //     },
  //     {
  //       name: "coursera",
  //       color: "text-indigo-300",
  //     },
  //     {
  //       name: "programming",
  //       color: "text-green-500",
  //     },
  //   ],
  // },
  // {
  //   certification_icon: meta,
  //   certification_name: "Version Control",
  //   certification_link:
  //     "#",
  //   certification_image: versioncontrol,
  //   completed_date: "#",
  //   certification_desc:
  //     "Learned the basics of Version Control, the most popular programming language for web development.",

  //   Certification_hashtags: [
  //     {
  //       name: "Version Control",
  //       color: "text-red-500",
  //     },
  //     {
  //       name: "Git",
  //       color: "text-yellow-500",
  //     },
  //     {
  //       name: "Github",
  //       color: "text-purple-500",
  //     },
  //     {
  //       name: "meta",
  //       color: "text-blue-500",
  //     },
  //     {
  //       name: "coursera",
  //       color: "text-blue-500",
  //     },
  //     {
  //       name: "programming",
  //       color: "text-green-500",
  //     },
  //   ],
  // },
];

const Educationinfo = [
  {
    Education_icon: "https://www.puexam.edu.np/assets/img/college-logo.png",
    Education_name: "Purbanchal University",
    Education_deg: "BE Computer - Computer Engineering",
    Education_loc: "Birtanagar, Nepal",
    Education_link: "https://puse.edu.np/",
    Joined_date: "11/2019-2023",
    Education_desc:
      "Completed my Bachelor's degree in Computer Engineering from Purbanchal University, Nepal.During my time here, I have learned various programming languages, algorithms, and data structures. I have also worked on several projects and assignments that have helped me gain practical experience in the field of computer science.",
  },
  {
    Education_icon:
      "https://plustwo.arnikofoundation.edu.np/assets/front/images/icons/features/ara.jpg",
    Education_name: "Arniko Awasiya Higher Secondary School",
    Education_deg: "+2 Science",
    Education_loc: "Birtanagar, Nepal",
    Education_link: "https://plustwo.arnikofoundation.edu.np",
    Joined_date: "2017-2019",
    Education_desc:
      "Completed my +2 Science degree from Arniko College, Nepal. During my time here, I learned about various subjects such as Physics, Chemistry, Mathematics, and Computer Science. I also participated in various extracurricular activities that helped me develop my leadership and communication",
  },
  {
    Education_icon: N,
    Education_name: "Namuna Vidya Mandir",
    Education_deg: "S.E.E",
    Education_loc: "Birtanagar, Nepal",
    Education_link: "https://www.facebook.com/hamroschoolnvm/ ",
    Joined_date: "03/2017  ",
    Education_desc:
      "Completed my School Leaving Certificate (S.E.E) from Namuna Vidya Mandir, Nepal. During my time here, I learned about various subjects such as English, Mathematics, Science, and Social Studies. I also participated in various extracurricular activities that helped me develop my leadership and communication",
  },
];
export {
  Skill_data,
  Skill_data1,
  Skill_data2,
  Skill_data4,
  Skill_data5,
  Projectinfo,
  Certificationinfo,
  Educationinfo,
};
