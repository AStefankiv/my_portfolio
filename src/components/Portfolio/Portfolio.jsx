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
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Stack: api / css / express.js / html / next.js / node / ruby / react.js / sql / postgres etc...</p>
          </div>
          <a href="https://github.com/AStefankiv" target="_blank" rel="noopener noreferrer" className="secondaryText">More on github</a>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
        <a target="_blank" rel="noopener noreferrer">
            <motion.img variants={fadeIn("up", "tween", 0.5, 0.6)} src="./showCase1.gif" alt="project" style={{ width: "400px", height: "auto", borderRadius: "10px" }} />
          </a>
          <a href="https://github.com/AStefankiv/tinyapp" target="_blank" rel="noopener noreferrer">
            <motion.img variants={fadeIn("up", "tween", 0.7, 0.6)} src="./showCase2.gif" alt="project" style={{ width: "400px", height: "auto", borderRadius: "10px" }} />
          </a>
          <a href="https://github.com/AStefankiv/tweeter" target="_blank" rel="noopener noreferrer">
            <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src="./showCase3.gif" alt="project" style={{ width: "400px", height: "auto", borderRadius: "10px" }} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
