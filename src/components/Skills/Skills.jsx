import React from "react";
import { comments, sliderSettings } from "../../utils/data"; // Make sure sliderSettings and comments are correctly defined
import css from "./Skills.module.scss";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import { footerVariants, staggerChildren } from "../../utils/motion"; // Ensure you have these variants defined

const Skills = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="people"></a>

      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}>

        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Things I like to use:</span>
          <p style={{ marginTop: "2rem" }}>
            {/* You can add a description of the tools you like to use here */}
          </p>
        </div>

        <div className={`yPaddings ${css.comments}`}>
          {/* Slick slider for comments */}
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`} key={i}>
                  <img src={comment.img} alt={comment.name} />
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.description}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

      </motion.div>

    </motion.section>
  );
};

export default Skills;