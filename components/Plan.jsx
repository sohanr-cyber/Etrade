import React from "react";
import styles from "../styles/Plan.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
const plans = [
  {
    name: "Slivesto",
    return: "Return 6%",
    time: "For Week",
    time2: "For 5 Week",
    total: "For 5 Week",
    price: "$200",
  },
  {
    name: "Life Time",
    return: "Return 0.2%",
    time: "Every Day",
    time2: "For Lifetime",
    total: "Lifetime Earning",
    price: "$100 - $200",
  },
  {
    name: "Black Horse",
    return: "Return 5%",
    time: "Every Week",
    time2: "For 40 Week",
    total: "Total 200%",
    price: "$500 - $5000",
  },
  {
    name: "Silver",
    return: "Return 5%",
    time: "Every Day",
    time2: "For 25 Day",
    total: "Total 125%",
    price: "$500",
  },
  {
    name: "Elephant",
    return: "Return 1.1USD",
    time: "Every Day",
    time2: "For 50 Day",
    total: "Total 55USD +",
    price: "$500 - $700",
  },
  {
    name: "Cobra",
    return: "Return 10USD",
    time: "Every Hour",
    time2: "For 150 Hour",
    total: "Total 1500USD +",
    price: "$1000",
  },
  {
    name: "Lion",
    return: "Return 0.2%",
    time: "Every Day",
    time2: "For Lifetime",
    total: "Lifetime Earning",
    price: "$100 - $500",
  },
  {
    name: "Tiger",
    return: "Return 0.2%",
    time: "Every Day",
    time2: "For Lifetime",
    total: "Lifetime Earning",
    price: "$100 - $500",
  },
];

const Plan = () => {
  return (
    <div className={styles.wrapper} id="plan">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
        }}
      >
        Investment <span>Plans</span>{" "}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
        }}
      >
        To make a solid investment, you have to know where you are investing.
        Find a plan which is best for you.
      </motion.p>
      <div className={styles.image__container}>
        {plans.slice(0, 4).map((plan) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            }}
            style={{
              backgroundImage:
                "url('https://template.viserlab.com/hyiplab/demo/assets/images/bg/bg-4.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={styles.image__wrapper}
          >
            <h1 style={{ color: "gold" }}>{plan.name}</h1>
            <div className={styles.price}>{plan.return}</div>
            <div className={styles.benifit}>{plan.time} </div>
            <div className={styles.duration}>{plan.time2} </div>
            <div className={styles.pay}>{plan.total}</div>
            {plan.price && <div className={styles.reward}>{plan.price}</div>}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
