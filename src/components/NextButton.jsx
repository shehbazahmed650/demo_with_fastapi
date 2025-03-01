import React from "react";
import styles from "./NextButton.module.css"; // Import CSS Module

function NextButton({ onClick }) {
  return (
    <button className={styles.nextButton} onClick={onClick}>
      Next Joke 🤣
    </button>
  );
}

export default NextButton;
