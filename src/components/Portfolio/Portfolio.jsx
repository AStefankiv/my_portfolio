import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`bg-primary paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


      <motion.div variants={textVariant(.4)} className={css.heading}>
        <span className="primaryText">Tech Projects</span>
      </motion.div>
      <a href="https://github.com/AStefankiv" target="_blank" rel="noopener noreferrer" className={`secondaryText ${css.githubLink}`}>
        More on github
      </a>

        <div className={`flexCenter ${css.showCase}`}>
        <a href="https://github.com/AStefankiv/jungle" target="_blank" rel="noopener noreferrer">
            <motion.img variants={fadeIn("up", "tween", 0.5, 0.6)} src="./showCase1.gif" alt="project" style={{ width: "350px", height: "auto", borderRadius: "10px" }} />
          </a>
          <div>
            <a href="https://gptgrammar.netlify.app/" target="_blank" rel="noopener noreferrer">
              <motion.img variants={fadeIn("up", "tween", 0.7, 0.6)} src="./showCase2.gif" alt="project" style={{ width: "350px", height: "auto", borderRadius: "10px" }} />
            </a>
            <div className="flexCenter">
            <a href="/grammar-check" className="center-text">more about it</a>
            </div>
          </div>
          <a href="https://github.com/AStefankiv/tweeter" target="_blank" rel="noopener noreferrer">
            <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src="./showCase3.gif" alt="project" style={{ width: "350px", height: "auto", borderRadius: "10px" }} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
