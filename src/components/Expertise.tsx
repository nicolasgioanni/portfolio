import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import UWBSTEMLogo from '../assets/images/UWBSTEM.png';

const labelsFirst = [
    "JavaScript/TypeScript",
    "HTML/CSS",
    "React (Next.js)",
    "Flask",
    "Django",
    "Firebase",
    "SQLite (via Django ORM)",
    "OpenAI API",
    "REST APIs (Fetch API)",
    "Docker",
    "Git/GitHub"
];

const labelsSecond = [
    "Python",
    "TensorFlow",
    "Keras",
    "Adversarial Robustness Toolbox (ART)",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Biopython",
    "OpenCV",
    "Pillow (PIL)"
];

const labelsThird = [
    "C/C++",
    "Java",
    "Assembly (x86 & ARM)", 
    "Git/GitHub",
    "VS Code",
    "Operating Systems",
    "Human-Computer Interaction",
    "Data Structures & Algorithms",
    "Technical Writing",
    "Code Review",
    "Public Speaking",
    "1:1 and group tutoring",
    "Curriculum Feedback"

];

function Expertise() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>As Lead Research Assistant at UW and a co-founder of NotePal and this portfolio site, I build responsive React and Next.js front ends paired with Flask and Django back ends to automate workflows and deliver intuitive user interfaces. I integrate Firebase or SQLite for data storage, orchestrate Docker-based deployments, and partner with stakeholders to turn requirements into scalable, production-ready applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning (ML) / AI Engineering</h3>
                    <p>During my undergraduate research and work as a UW Research Assistant, I used Python, TensorFlow, Keras, OpenCV and the Adversarial Robustness Toolbox to train deep learning models for yeast cell segmentation and adversarial defense evaluation. I can design end-to-end pipelines covering data preprocessing, model training, performance evaluation and containerized deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <img
                        src={UWBSTEMLogo}
                        alt="UWB STEM Logo"
                        className="skill-icon"
                    />
                    <h3>Teaching & Mentorship</h3>
                    <p>As Technical Officer of the Google Developer Group and a Teaching Assistant for Data Structures, Operating Systems and HCI at UW, I design and lead lectures, hands-on labs and one-on-one tutoring that break down complex topics into practical exercises. I can develop clear curricula, conduct in-depth code reviews and mentor students or teams to accelerate their technical growth and confidence.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;