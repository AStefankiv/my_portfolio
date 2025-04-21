import React from "react";
import Header from "../../components/Header/Header";
import css from "./Writing.module.scss";
import { FaMarkdown, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiReadthedocs } from "react-icons/si";
import ProjectCard from "../../../src/components/ProjectCard/ProjectCard";

const imageFilenames = [
  "add_new_record.png",
  "bulletproof_coffee_items.png",
  "node_npm_ubuntu.png",
  "overview_of_the_setup_process.png",
];

const Writing = () => {
  return (
    <>
      <Header />
      <div className={css.introSection}>
        <h1>Technical Writing Portfolio</h1>
        <p>
          Welcome to my{" "}
          <a
            href="https://github.com/AStefankiv/writing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007acc", textDecoration: "underline" }}
          >
            portfolio of technical documentation projects
          </a>
          . Each piece is written with clarity, simplicity, and structure to help developers and technical audiences understand tools, technologies, and setups.
        </p>
      </div>

      <div className={css.techStack}>
        <h2>Writing Projects</h2>
        <div className={css.stackIcons} style={{ justifyContent: "center" }}>
          <ProjectCard
            title="Install Node.js on Ubuntu (Markdown)"
            description="Step-by-step tutorial on installing Node.js using apt, NVM, and NodeSource."
            url="https://github.com/AStefankiv/writing/blob/main/install_and_configure_node_%26_npm_on_ubuntu.md"
          />
          <ProjectCard
            title="How to Configure a .gitignore File"
            description="Beginner-friendly guide to creating a .gitignore file for Git projects."
            url="https://github.com/AStefankiv/writing/blob/main/how_to_configure_a_gitignore_file.md"
          />
          <ProjectCard
            title="Get Started with NASA’s API"
            description="A beginner's guide to using NASA's API, including setup and examples."
            url="https://github.com/AStefankiv/writing/blob/main/NASA_api_documentation.md"
          />
          <ProjectCard
            title="How to Setup a Github Page With a Custom Domain"
            description="A step-by-step guide to setting up a GitHub page with a custom domain."
            url="https://github.com/AStefankiv/writing/blob/main/setup_a_github_page_with_a_custom_domain.md"
          />
          <ProjectCard
            title="☕ How to Start Brewing Bulletproof Espresso at Home"
            description="A guide to brewing espresso at home, including equipment and techniques."
            url="https://github.com/AStefankiv/writing/blob/main/start_brewing_bulletproof_espresso.md"
          />
        </div>
      </div>

      <div className={css.sliderSection}>
        <h2>Visual Documentation Examples</h2>
      </div>

      <div className={css.sliderContainer}>
        {imageFilenames.map((filename, index) => (
          <a
            key={index}
            href={`/writing_images/${filename}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`/writing_images/${filename}`}
              alt={`Documentation example ${index + 1}`}
              className={css.galleryImage}
            />
          </a>
        ))}
      </div>

      <div className={css.techStack}>
        <h2>Tools & Technologies I Use</h2>
        <div className={css.stackIcons} style={{ justifyContent: "center" }}>
          <FaMarkdown size={40} color="#4e4e4e" title="Markdown" />
          <FaGitAlt size={40} color="#f1502f" title="Git" />
          <FaGithub size={40} color="#333" title="GitHub" />
          <SiReadthedocs size={40} color="#28a745" title="Read the Docs" />
        </div>
      </div>

      <footer className={css.footer}>
        <p>© {new Date().getFullYear()} Andrew Stefankiv – Technical Writer</p>
      </footer>
    </>
  );
};

export default Writing;