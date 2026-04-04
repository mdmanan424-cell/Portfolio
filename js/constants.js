// Project constants with placeholders
const APP_DATA = {
    name: "Mohammed Mannan",
    role: "Full Stack Developer",
    introduction: "I’m a Full Stack Java Developer with a strong foundation in building scalable and user-centric web applications using Spring Boot, REST APIs, and modern frontend technologies. I recently graduated in Electronics & Communication (VTU, 2025) and gained hands-on industry experience during my internship at Eunoia Labs, where I worked on real-world full stack workflows.",
    resumeLink: "Md_Resume.pdf",
    socialLinks: {
        email: "mdmanan424@gmail.com",
        linkedin: "http://linkedin.com/in/md-manan-j053",
        github: "https://github.com/mdmanan424-cell"
    },
    projects: [
        {
            title: "Resume Builder",
            description: "The Resume Builder is a full-stack web application that enables users to create, customize, and manage professional resumes dynamically. I developed the backend using Spring Boot, where I designed RESTful APIs to handle various sections of resume data such as education, skills, and work experience. The application uses MySQL for persistent data storage and follows a structured layered architecture to ensure scalability and maintainability.",
            tech: ["SpringBoot", "Rest Api", "React", "MySql"],
            link: "https://md-resume-builder.netlify.app/",
            image: "images/project1.png"
        },
        {
            title: "Background Remove",
            description: "The AI Background Removal Tool is a web application that allows users to remove image backgrounds instantly using artificial intelligence. I developed the backend using Spring Boot and integrated the Clipdrop API to process images efficiently and return high-quality results. The application supports image uploads, processes them securely, and provides real-time feedback to the user.",
            tech: ["SpringBoot", "Rest Api", "React", "MySql"],
            link: "https://md-background-remove.netlify.app/",
            image: "images/project2.png"
        },
        {
            title: "Quiz Master",
            description: "The Quiz Application is a backend-driven system designed to manage quiz creation, question retrieval, and score evaluation efficiently. I developed RESTful APIs using Spring Boot, enabling functionalities such as adding quizzes, fetching questions, and calculating scores. The application follows a layered MVC architecture, ensuring clean code organization and scalability. MySQL was used to store quiz data and user scores.",
            tech: ["SpringBoot", "Rest Api", "Js", "MySql"],
            link: "https://md-quiz-master.netlify.app/",
            image: "images/project3.png"
        }
    ],
    experience: [
        {
            role: "Java Full Stack Developer Intern",
            company: "Tap Academy",
            date: "July 2025 - December 2026",
            certificateLink: "https://drive.google.com/file/d/1_fHagYUKOCnnOz6oY4KTTpd7-rvws1hV/view?usp=drivesdk"
        }
    ],
    skills: [
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "HTML5", icon: "fa-brands fa-html5" },
        { name: "CSS3", icon: "fa-brands fa-css3-alt" },
        { name: "Java", icon: "fa-brands fa-java" },
        { name: "Spring Boot", icon: "fa-solid fa-leaf" },
        { name: "MySQL", icon: "fa-solid fa-database" }
    ]
};
