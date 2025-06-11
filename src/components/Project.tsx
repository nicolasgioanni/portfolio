import React from "react";
import NotePal from '../assets/images/notepal-home.png';
import Clair from '../assets/images/Clair.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/nicolasgioanni/Clair/releases" target="_blank" rel="noreferrer"><img src={Clair} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/nicolasgioanni/Clair/releases" target="_blank" rel="noreferrer"><h2>Clair</h2></a>
                <p>Clair is a standalone desktop application that automatically sorts the contents of any folder into subfolders based on file types. Select a folder, click Organize, and watch as Documents, Images, Videos, Music, Archives and other files are moved into their own folders.</p>
                <p>
                    See source code on{' '}
                    <a
                    className="github-link"
                    href="https://github.com/nicolasgioanni/Clair"
                    target="_blank"
                    rel="noreferrer"
                    >
                    GitHub
                    </a>
                </p>
            </div>
            <div className="project">
                <a href="https://www.mynotepal.ai/" target="_blank" rel="noreferrer"><img src={NotePal} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.mynotepal.ai/" target="_blank" rel="noreferrer"><h2>NotePal</h2></a>
                <p>NotePal is an AI-powered note-taking application that transforms text, images, audio, and video into concise, structured notes. It’s designed for students, professionals, and lifelong learners who want to save time and retain key information without manual effort.</p>
                 <p>
                    See source code on{' '}
                    <a
                    className="github-link"
                    href="https://github.com/nicolasgioanni/NotePal"
                    target="_blank"
                    rel="noreferrer"
                    >
                    GitHub
                    </a>
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;