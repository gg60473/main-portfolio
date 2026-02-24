
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hey there! I’m ",
  subTitle: emoji(
    "An enthusiastic Software Developer 🔥 skilled in building web applications with Spring, React.js, Java, MongoDB, and other contemporary tools and frameworks."
  ),
  resumeLink: "",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/gg60473",
 /* linkedin: "https://www.linkedin.com/in/-23a86924b/", */
  gmail: "gg60473@gmail.com",
 /* twitter: "https://x.com/", */
};

// Your Skills Section

const skillsSection = {
  title: "My work involves…",
  subTitle: "A passionate software developer eager to explore every new tech stack.",
  skills: [
    emoji(
      "✨ Build responsive, interactive front-end interfaces for web platforms."
    ),
    // emoji("⚡ Progressive Web Applications using different frameworks"),
    emoji(
      "✨ Develop and maintain web and Windows applications, including design and coding."
    ),
    emoji(
      "✨ Proficient in designing, developing, and deploying applications"
    ),
    emoji("✨Built modern, user-friendly web interfaces with React.js."),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf", // No official FA icon, leaf is commonly used
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
    },
   /* {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
    }, */
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt",
    },
   /* {
      skillName: "REST APIs",
      fontAwesomeClassname: "fas fa-network-wired", // use network icon
    }, */
    {
      skillName: "LeetCode",
      fontAwesomeClassname: "fas fa-terminal",
    },
    {
      skillName: "AI",
      fontAwesomeClassname: "fas fa-brain",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design- NextJS, Javascript, ReactJS",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend, java Script, React",
      progressPercentage: "60%"
    },
   /* {
      Stack: "Database-MS-SQL Server",
      progressPercentage: "70%"
    }, */
    
    {
      Stack: "Coding- LeetCode ",
      progressPercentage: "50%"
    }
  ]
};

// // Your Achievement Section Include Your Certification Talks and More

// const achievementSection = {

//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle: "Achievements, Certifications and Some Cool Stuff that i have done !",
  
//   achivementsCards: [
//     {
//       title: "BootstrapCss",
//       subtitle: "From Codeacademy Bootstrap 4.0",
//       image: "",
//       footerLink: [
//         { name: "Certificate Link", url: "https://www.codecademy.com/profiles/DharaniJuturu/certificates/0595479d03627a8cb816b069000e4d06" }
//       ]
//     },
//     {
//       title: "JavaScript",
//       subtitle: "From Codeacademy Javascript ES6",
//       image: "",
//       footerLink: [
//         { name: "Certificate Link", url: "https://www.codecademy.com/profiles/DharaniJuturu/certificates/705dcb15de0da4dd9d9fc4f3274b430e" }
//       ]
//     },
//     {
//       title: "React JS",
//       subtitle: "From Codeacademy",
//       image: "",
//       footerLink: [
//         { name: "Certificate Link", url: "https://www.codecademy.com/profiles/DharaniJuturu/certificates/af00e5032d0a68cc84879983f5d8333b" }
//       ]
//     },
//     {
//       title: "Automation Specialist Level 1",
//       subtitle: "From Tricentis Tosca 12.x",
//       image: "",
//       footerLink: [
//         { name: "Credential ID: COC0125447", url: "" }
//       ]
//     },
//     {
//       title: "Automation Specialist Level 2",
//       subtitle: "From Tricentis Tosca 12.x",
//       image: "",
//       footerLink: [
//         { name: "Credential ID: COC0126108", url: "" }
//       ]
//     },
//     {
//       title: "Automation Engineer Level-1",
//       subtitle: "From Tricentis Tosca 12.x",
//       image: "",
//       footerLink: [
//         { name: "Credential ID: COC0130720", url: "" }
//       ]
//     },
//     {
//       title: "Python Programming Language",
//       subtitle: "From TAFE NSW",
//       image: "",
//       footerLink: [
//         { name: "ICTPRG301, ICTPRG413", url: "" }
//       ]
//     },
//   ]
// };

// Blogs Section

const blogSection = {
  title: emoji("Standing 🏅 "),
 /* subtitle: "With Love for Coding, I have earned some Rankings.", */

blogs: [
   /* {
      url: "https://atcoder.jp/users/300",
      title: "kyu 11",
      description: "going up every week 📈",
    }, */
  /*  {
      url: "https://codeforces.com/profile/",
      title: "Road to pupil",
      description: "commit +=2 everyday",
    }, */
    {
      url: "https://leetcode.com/u/gg60473/",
       title: "LeetCode ", 
      description: "Day by Day Progress 📈",
    },
   /* {
      url: "https://www.codechef.com/users/300",
      title: "⭐⭐ coder",
      description: "counting",
    }, */
   /* {
      url: "https://takeuforward.org/profile/300",
      title: "Sheet",
      description: "tuf striver A2Z",
    }, */
    {
      url: "https://github.com/gg60473",
      title: "Everyday Commits",
     /* description: "commit +=2 everyday", */
    },
  ],
}; 

// Your project displays Section Include Your worked projects and More

const myprojectDetails = {
  title: emoji("My Projects 📂"),
  subtitle: "Designed 🎨 and developed projects ",

  myprojects: [
    {
      title: "Weather",
      subtitle: "How 's the weather",
      image: "images1/heartfulnessImg.JPG",
      footerLink: [
        {
          name: "☔ visit",
          url: "https://lambent-twilight-f831cb.netlify.app/",
        },
      ],
    },
  /*  {
      title: "E-Commerce",
      subtitle: "Ahop Anywhere",
      footerLink: [{ name: "visit", url: "https://google.com/" }],
    }, */
   /* {
      title: "P T S",
      subtitle: "Productivity Tracker",
      footerLink: [{ name: "visit", url: "https://google.com" }],
    }, */
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

// const openSource = {
//   showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
//   display: true, // Set false to hide this section, defaults to true
// };


const contactInfo = {
  title: emoji("Contact Me 📞"),
  subtitle: "let's Connect...",
  number: "best contact by email",
  email_address: "gg60473@gmail.com",
};

const twitterDetails = {
 /* userName: "300", // put your Twitter username here */
}; 

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  blogSection,
  myprojectDetails,
  contactInfo,
  twitterDetails,
};
// achievementSection,
