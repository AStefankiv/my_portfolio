import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import lighthouse_logo from "../../assets/lighthouselabs_logo.png";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey there,
            <br />
            I'm Andrii.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            Can't wait to start
            <br />
            and always ready to learn.{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person.png" alt="" />
        </motion.div>

        <a className={css.email} href="mailto:stefankif35@gmail.com">
          stefankif35@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText"></div>
            <div className="secondaryText">
              <a href="https://www.lighthouselabs.ca/" target="_blank" rel="noopener noreferrer">
              <img src={lighthouse_logo} alt="Lighthouse" height={40} width={200} />
              </a>
              <div>graduate</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
              <a href="https://drive.google.com/file/d/1dIhkGEd-YlnZ3v7epmeo5cKISBVanoSp/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className={`${css.resumeButton} resumeButton`}>
              <span>My resume</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;