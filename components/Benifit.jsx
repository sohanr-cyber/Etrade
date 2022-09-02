import { style } from "@mui/system";
import React from "react";
import styles from "../styles/Benifit.module.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import TaskAlt from "@mui/icons-material/TaskAlt";
import { benifits } from "../data";
import { motion } from "framer-motion";
const Benifit = () => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage:
          "url('https://template.viserlab.com/hyiplab/demo/assets/images/bg/bg-3.jpg')",
        backgroundSize: "fill",
        backgroundPosition: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
      >
        Why Chose <span>ETrade</span>{" "}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
      >
        Our goal is to provide our investors with a reliable source of high
        income, while minimizing any possible risks and offering a high-quality
        service.
      </motion.p>
      <div className={styles.cards}>
        {benifits.map((benifit, index) => (
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
          >
            <div className={styles.card__top}>
              <div className={styles.card__icon}>
                <TaskAlt style={{ fontSize: "180%", marginTop: "8px" }} />
              </div>
              <div className={styles.card__title}>{benifit.title}</div>
            </div>
            <div className={styles.card__content}>{benifit.details}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Benifit;
