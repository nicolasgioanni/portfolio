import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import UWLogo from '../assets/images/UW.png';
import GDGLogo from '../assets/images/GDG.png';
import UWBSTEMLogo from '../assets/images/UWBSTEM.png';

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="August 2024 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={
              <img
                src={UWLogo}
                alt="University of Washington"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              University of Washington
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lead Research Assistant / Software Engineer
            </h4>
            <h5 className="vertical-timeline-element-location"> Seattle, WA </h5>
            <p>
              Built and deployed a full-stack Django web app using OpenCV and TensorFlow to automate yeast cell analysis, reducing manual workload by 95% and achieving 97% user satisfaction from 40+ researchers.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2025 – June 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={
              <img
                src={UWBSTEMLogo}
                alt="University of Washington"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              UW Bothell School of STEM
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Teaching Assistant
            </h4>
            <h5 className="vertical-timeline-element-location"> Bothell, WA </h5>
            <p>
              Taught, tutored, and graded over 800 students across five CS courses, providing project feedback and holding office hours that earned an average 4.89/5 student rating.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2024 – June 2025"
            iconStyle={{ background: '#ffffff', color: 'rgb(39, 40, 34)' }}
            icon={
              <img
                src={GDGLogo}
                alt="University of Washington"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Google Developer Group
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Technical Officer
            </h4>
            <h5 className="vertical-timeline-element-location"> Bothell, WA </h5>
            <p>
              Provided hands-on guidance to 100+ students on Git, VS Code, and Docker while mentoring peers on technical projects and CS course strategies.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2024 – December 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={
              <img
                src={UWBSTEMLogo}
                alt="University of Washington"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              UW Bothell School of STEM
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Undergraduate Researcher
            </h4>
            <h5 className="vertical-timeline-element-location"> Bothell, WA </h5>
            <p>
              Built a TensorFlow-based adversarial testing suite using Python, ART, and NumPy, reducing defense latency to under 5 seconds while preserving 94% clean-data accuracy.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2024 – August 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={
              <img
                src={UWLogo}
                alt="University of Washington"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              University of Washington
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Research Assistant / Software Engineer
            </h4>
            <h5 className="vertical-timeline-element-location"> Seattle, WA </h5>
            <p>
              Wrote a Python pipeline with Biopython and regex to parse 18,000+ FASTA files for CRISPR target sites, automating yeast DNA research and cutting manual effort by 99%.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;