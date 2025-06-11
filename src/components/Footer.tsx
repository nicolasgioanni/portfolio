import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/nicolasgioanni"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/nicolasgioanni/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p className="source-link">
        © 2025 Nicolas Gioanni. See source code on{' '}
        <a
          className="github-link"
          href="https://github.com/nicolasgioanni/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>.
      </p>
    </footer>
  );
}

export default Footer;