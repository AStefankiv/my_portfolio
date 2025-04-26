import React from "react";
import css from "./Work.module.scss";
import {motion} from 'framer-motion'
import { draw, fadeIn, slideIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";

const Work = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
    <a className="anchor" id="work"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        {/* heading */}
        <span className="primaryText yPaddings">My Work Experience</span>

        <div className={`flexCenter ${css.experiences}`}>

          <motion.div variants={textVariant2} className={`flexCenter ${css.exp}`}>
            <div className={css.post}>
              <h1><a href="https://gvenglish.com/" target="_blank">Global Village School – Calgary</a></h1>
              <p>September 2022 - Present</p>
            </div>
            <div className={css.role}>
              <h1>ESL Instructor</h1>
              <p>— Designed and developed a travel-themed educational website using JavaScript: <a href="https://www.worklearntravel.ca/" target="_blank">worklearntravel.ca</a>, aligning layout and copy with user needs and branding.</p>
              <p>— Created instructional content and around 40 lesson plans that simplified complex English grammar for ESL learners—skills highly transferable to technical documentation.</p>
            </div>
          </motion.div>

          <motion.div variants={textVariant2} className={`flexCenter ${css.exp}`}>
            <div className={css.post}>
              <h1><a href="https://www.pathwaypro.ca/" target="blank">Reskill – Calgary</a></h1>
              <p>June - August 2024</p>
            </div>
            <div className={css.role}>
              <h1>Junior Web Developer - Internship</h1>
              <p>— Integrated Facebook and Google authentication into an AI-powered grant-writing platform using Next.js and TypeScript.</p>
              <p>— Contributed the highest number of GitHub commits during the project: <a href="https://github.com/Grant-Assist-PathwayPro/client" target="_blank">Grant-Assist-PathwayPro</a>.</p>
              <p>— Refactored and restyled the user interface using the Ant Design (Antd) component library to improve usability and visual consistency.</p>
            </div>
          </motion.div>

          <motion.div variants={textVariant2} className={`flexCenter ${css.exp}`}>
            <div className={css.post}>
              <h1>Various ESL Schools – Ukraine, China, Vietnam</h1>
              <p>2015 - 2022</p>
            </div>
            <div className={css.role}>
              <h1>ESL Instructor</h1>
              <p>— Delivered personalized instruction across diverse learner backgrounds, adjusting tone, style, and complexity—mirroring the skills needed to write for both technical and non-technical audiences.</p>
            </div>
          </motion.div>


          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
            <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
            {/* <div><div className={css.circle} style={{background: "#F2704E"}}></div></div> */}
            <div className={css.secondCircle}><div className={css.circle} style={{background: "#F2704E"}}></div></div>
            <div className={css.thirdCircle}><div className={css.circle} style={{background: "#EEC048"}}></div></div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Work;