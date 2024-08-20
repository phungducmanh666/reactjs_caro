import React from "react";
import styles from "./styles.module.scss";

function Input({ label, ...props }) {
  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <input {...props} />
    </div>
  );
}

export default Input;
