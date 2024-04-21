import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Intro from "./Intro";
import "./Contact.css";

import { motion } from "framer-motion";
const Contact = () => {
  return (
    <Container>
      <motion.div
        initial={{ scaleY: 0.7 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8 }}
        className="blue"
      >
        <div className="wrapper">
          <Intro />
          <Form />
        </div>
      </motion.div>
      
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  
  display: flex;
  
  .blue {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #002F5A;
    transform-origin: top;
  }

  .wrapper {
    padding: 10%;
    display: flex;
    flex: 1;
    @media (max-width: 950px) {
      flex-direction: column;
    }
  }
`;

export default Contact;
