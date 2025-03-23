import AndroidStudio from "@/assets/image/icon/androidstudio-original.svg";
import ASP from "@/assets/image/icon/netframework.svg" ;
import AzureDevOps from "@/assets/image/icon/azuredevops-original.svg" ;
import CSharp from "@/assets/image/icon/csharp-original.svg" ;
import CSS3 from "@/assets/image/icon/css3-original.svg" ;
import Gherkin from "@/assets/image/icon/cucumber-plain.svg" ;
import GitHub from "@/assets/image/icon/github-original.svg" ;
import Git from "@/assets/image/icon/git-plain.svg" ;
import HTML5 from "@/assets/image/icon/html5-original.svg" ;
import IntelliJ from "@/assets/image/icon/intellij-original.svg" ;
import Java from "@/assets/image/icon/java-original.svg" ;
import Javascript from "@/assets/image/icon/javascript-plain.svg" ;
import MySQL from "@/assets/image/icon/mysql-original.svg" ;
import Pycharm from "@/assets/image/icon/pycharm-original.svg" ;
import Python from "@/assets/image/icon//python-original.svg" ;
import React from "@/assets/image/icon/react-original.svg" ;
import Selenium from "@/assets/image/icon/selenium-original.svg" ;
import SQLite from "@/assets/image/icon/sqlite-original.svg" ;
import Tailwind from "@/assets/image/icon/tailwindcss-original.svg" ;
import TypeScript from "@/assets/image/icon/typescript-plain.svg" ;
import VisualStudio from "@/assets/image/icon/visualstudio-plain.svg" ;
import Vite from "@/assets/image/icon/vitejs-original.svg" ;
import VSCode from "@/assets/image/icon/vscode-original.svg";

import PortFolio_1 from "@/assets/image/mockup/Portfolio_1.png";
import PortFolio_2 from "@/assets/image/mockup/Portfolio_2.png";

import SkillHub_1 from "@/assets/image/mockup/SkillHub_1.png";
import SkillHub_2 from "@/assets/image/mockup/SkillHub_2.png";

import SER_1 from "@/assets/image/mockup/SER.jpg";

import CurriculumVitae from "@/assets/document/Curriculum Vitae.pdf";

export default {
    "Home" : {
        "FirstLine" : "Hello, I am",
        "ColoredLine" : "Hansley Louis Eleonore",
        "LastLine" : "Test Engineer"
    },
    "About" : "Few things are as enjoyable as the process of developing and testing software. This is why I have chosen to pursue my passion as my profession. I see myself as someone who never gives up in the face of challenges, but instead, turn these into opportunities through which I sharpen my skills. Considering myself a quick learner, I am confident in trying new things and can adapt easily to a new environment.",
    "Cards" : [
        {
            "ImagePath" : {"Path1" : PortFolio_1 , "Path2" : PortFolio_2 },
            "Title" : "Portfolio",
            "Date" : "Jun 2024",
            "Description" : "A online react portfolio use to present myself, my curriculum vitae and the different project made.",
            "Technologies" : "vscode-html5-css3-javascript-typescript-react-vite"
        },
        {
            "ImagePath" : {"Path1" : SkillHub_1, "Path2" : SkillHub_2},
            "Title" : "SkillHub",
            "Date" : "Dec 2023",
            "Description" : "A web application written using HTML, CSS and JavaScript for the front end, C# with repository model for the back-end logic and SQL and MySQL for the database interactions, the application was hosted locally via IIS. Skill Hub is an employee training management portal that allows employees to enroll to courses in near future, where each request will require an approval of their respective manager and prioritized the employee department-wise.",
            "Technologies" : "visualstudio-asp-csharp-html5-css3-javascript-mysql"
        },
        {
            "ImagePath" : {"Path1" : SER_1, "Path2" : ""},
            "Title" : "Speech Emotion Recognition",
            "Date" : "Jun 2023",
            "Description" : "A mobile application that records the voice of the speaker or audio file and send the data to an online server, where they are analyzed by a multi-modal model created with Python using the Tensorflow library from which information is extract and send back to application to be present to user.",
            "Technologies" : "pycharm-androidstudio-java-python-sqlite"
        }
    ],
    "Career" : [
        { 
            "Section" : "Work Experience", 
            "Content" : [
                { "Title" : "Dayforce" , "EffectiveFrom" : "Oct 2023" , "EffectiveTo" : "Ongoing" },
                { "Title" : "IQera" , "EffectiveFrom" : "Oct 2022" , "EffectiveTo" : "Dec 2022" }
            ]
        },
        { 
            "Section" : "Education", 
            "Content" : [
                { "Title" : "Bachelor's degree" , "EffectiveFrom" : "Sep 2020" , "EffectiveTo" : "Dec 2023" },
                { "Title" : "High School Certificate" , "EffectiveFrom" : "" , "EffectiveTo" : "Dec 2019" }
            ]
        },
        { 
            "Section" : "Certification", 
            "Content" : [
                { "Title" : "ISTQB CTFL 4.0" , "EffectiveFrom" : "" , "EffectiveTo" : "Mar 2024" }
            ]
        }
    ],

    "Notification":{
        "phone": {"Title" : "Phone : ", "ContentType" : "text", "Content" : "+230-5807-8946"},
        "email" : {"Title" : "Email : ", "ContentType" : "email", "Content" : "hansleyeleonore@gmail.com"},
        "linkdin" : {"Title" : "Linkdin : ", "ContentType" : "href", "Content" : "https://www.linkedin.com/in/hansley-eleonore"},
        "github" : {"Title" : "Github : ", "ContentType" : "href", "Content" : "https://github.com/h4nsl3y"},
        "none" : {"Title" : "", "ContentType" : "", "Content" : ""}
    },
    "Technologies" : [
        { "Name" : "AndroidStudio" , "Path" : AndroidStudio },
        { "Name" : "ASP" , "Path" : ASP },
        { "Name" : "AzureDevOps" , "Path" : AzureDevOps },
        { "Name" : "CSharp" , "Path" : CSharp },
        { "Name" : "CSS3" , "Path" : CSS3 },
        { "Name" : "Gherkin" , "Path" : Gherkin },
        { "Name" : "GitHub" , "Path" : GitHub },
        { "Name" : "Git" , "Path" : Git },
        { "Name" : "HTML5" , "Path" : HTML5 },
        { "Name" : "IntelliJ" , "Path" : IntelliJ },
        { "Name" : "Java" , "Path" : Java },
        { "Name" : "Javascript" , "Path" : Javascript },
        { "Name" : "MySQL" , "Path" : MySQL },
        { "Name" : "Pycharm" , "Path" : Pycharm },
        { "Name" : "Python" , "Path" : Python },
        { "Name" : "React" , "Path" : React },
        { "Name" : "Selenium" , "Path" : Selenium },
        { "Name" : "SQLite" , "Path" : SQLite },
        { "Name" : "Tailwind" , "Path" : Tailwind },
        { "Name" : "TypeScript" , "Path" : TypeScript },
        { "Name" : "VisualStudio" , "Path" : VisualStudio },
        { "Name" : "Vite" , "Path" : Vite },
        { "Name" : "VSCode" , "Path" : VSCode }
    ],
    "CV" : CurriculumVitae,
}