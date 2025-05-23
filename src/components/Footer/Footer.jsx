import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`bg-primary paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:stefankif35@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Calgary, AB - Canada</p>
          </div>
          <ul className={css.menu}>
            <li><a href="https://www.linkedin.com/in/andrii-stefankiv" target="_blank" rel="noopener noreferrer">Linked In</a></li>
            <li><a href="https://github.com/AStefankiv" target="_blank" rel="noopener noreferrer">Github</a></li>
            {/* <li>Notes</li>
            <li>Experience</li> */}
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
