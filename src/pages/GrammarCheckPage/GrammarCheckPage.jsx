import React from "react";
import Header from "../../components/Header/Header";
import css from "./GrammarCheckPage.module.scss";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiMongodb } from "react-icons/si";
import SimpleSlider from "./SimpleSlider";

const GrammarCheckPage = () => {
  return (
    <div>
      <Header />
      <section className={`innerWidth ${css.introSection}`}>
        <h1>Grammar check app</h1>
        <br />
        <p>
          An AI-powered web app that corrects your English sentences, analyzes errors, and provides detailed explanations of your mistakes. 
        </p>
      </section>

      <section className={css.sliderSection}>
        <h2>Screenshots</h2>
        <SimpleSlider />
      </section>

      <section className={`innerWidth ${css.techStack}`}>
        <h2>Tech Stack</h2>
        <div className={`flexCenter ${css.stackIcons}`}>
          <FaReact size={50} />
          <SiNextdotjs size={50} />
          <FaNodeJs size={50} />
          <SiPostgresql size={50} />
          <SiMongodb size={50} />
          <FaCss3Alt size={50} />
          <FaHtml5 size={50} />
        </div>
      </section>

      <footer className={`flexCenter ${css.footer}`}>
        <p>© 2024 Andrii Stefankiv - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GrammarCheckPage;