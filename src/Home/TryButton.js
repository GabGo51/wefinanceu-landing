import "./Home.css";
import React from "react";
import { motion } from "framer-motion";



const TryButton = ({animation}) => {
  
  return (
    <motion.div
      className="try-box"
      {...animation}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <motion.button className="try-button">
        Contact us
      </motion.button>
    </motion.div>
  );
};

export default TryButton;
