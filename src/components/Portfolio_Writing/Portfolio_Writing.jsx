import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio_Writing.module.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { staggerChildren } from "../../utils/motion";

const Portfolio_Writing = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio_writing"></a>

  <div className={`innerWidth flexCenter ${css.container}`}>
    <motion.div className={css.heading}>
      <span className="primaryText">Writing Projects</span>
    </motion.div>

    <a
      href="https://github.com/AStefankiv/writing"
      target="_blank"
      rel="noopener noreferrer"
      className={`secondaryText ${css.githubLink}`}
    >
      More on github
    </a>
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
            title="Set Up GitHub Pages with a Custom Domain"
            description="A guide on creating a GitHub Page and linking it to your own domain name."
            url="https://github.com/AStefankiv/writing/blob/main/set_up_a_github_page_with_a_custom_domain.md"
          />
          <ProjectCard
            title="How to Brew Bulletproof Espresso at Home"
            description="Step-by-step espresso brewing guide using Bulletproof techniques."
            url="https://github.com/AStefankiv/writing/blob/main/start_brewing_bulletproof_espresso.md"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio_Writing;