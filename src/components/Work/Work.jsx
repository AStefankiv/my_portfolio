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
              <h1><a href="https://www.pathwaypro.ca/">Reskill, Calgary</a></h1>
              <p>June - August 2024</p>
            </div>
            <div className={css.role}>
              <h1>Junior Web Developer - Internship</h1>
              <p>Took part in developing an <a href="https://github.com/Grant-Assist-PathwayPro/client">AI application</a> using Next.js while collaborating with scrum team members, implemented JWT authentication. Made most commits on github.</p>
            </div>
          </motion.div>

          <motion.div variants={textVariant2} className={`flexCenter ${css.exp}`}>
            <div className={css.post}>
              <h1><a href="https://gvenglish.com/">Global Village School, Calgary</a></h1>
              <p>Sept 2022 - Present</p>
            </div>
            <div className={css.role}>
              <h1>Education</h1>
              <p>Transformed the ESL curriculum with digital materials and assignments, showcasing digital content management skills and the use of educational technology. Created a <a href="https://www.worklearntravel.ca/" target="_blank">Next.js based website</a> that is up and running.</p>
            </div>
          </motion.div>

          <motion.div variants={textVariant2} className={`flexCenter ${css.exp}`}>
            <div className={css.post}>
              <h1>ESL Tutor, Ukraine, China, Vietnam, Canada</h1>
              <p>2015 - 2022</p>
            </div>
            <div className={css.role}>
              <h1>Education</h1>
              <p>As an ESL tutor, I tailored lessons to diverse cultural backgrounds and age groups, using interactive methods to enhance language proficiency. I integrated technology to create engaging learning environments, fostering confident English language learners.</p>
            </div>
          </motion.div>


          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
            <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
            {/* <div><div className={css.circle} style={{background: "#F2704E"}}></div></div> */}
            <div className={css.secondCircle}><div className={css.circle} style={{background: "#F2704E"}}></div></div>
            <div className={css.secondCircle}><div className={css.circle} style={{background: "#EEC048"}}></div></div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Work;