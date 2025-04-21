import React from "react";
import PropTypes from "prop-types";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ title, description, url }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View on GitHub →
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectCard;