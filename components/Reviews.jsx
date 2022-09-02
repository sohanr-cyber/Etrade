import React from "react";
import styles from "../styles/Reviews.module.css";
import { reviews } from "../data";
import { motion } from "framer-motion";
const Reviews = () => {
  return (
    <div className={styles.wrapper}>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
      >
        What successful traders say about <span>ETrader</span>
      </motion.h1>
      <div className={styles.flex}>
        {reviews.map((review, index) => (
          <motion.div
            className={styles.card}
            key={index}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5 },
            }}
          >
            <div className={styles.name}>{review.name}</div>
            <div className={styles.star}></div>
            <div className={styles.review}>{review.comment}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
