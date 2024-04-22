import React from "react";
import styled from "styled-components";
import text from './text/introText'
import { motion } from "framer-motion";
import animations from "../animation";

const Intro = () => {

  
  return (
    <Container>
      <motion.h1 {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.1 }}>{text.title[true]}</motion.h1>
      <motion.p {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.3 }}>
        Ready to revolutionize your sales process? We’d love to show you what
        Pipedrive can do – contact our sales experts and discover how Pipedrive
        can help improve your team's performance. Simply fill out the form to
        the right, and a member of our team will contact you as soon as
        possible.
      </motion.p>
      <motion.div {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.4 }}>
      <i className="fa-solid fa-check"></i>
      <p> Get advice from a sales expert who will understand your business needs</p>
      </motion.div>
      <motion.div {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.5 }}>
      <i className="fa-solid fa-check"></i>
      <p> Understand how to best use WeFinanceU</p>
      </motion.div>
      <motion.div {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.6 }}>
      <i className="fa-solid fa-check"></i>
      <p> Learn more about how to scale your business</p>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
width: 65%;
color: white;

h1{
  margin-bottom: 40px;
  color: white;
  text-align: start;
}

p{
  text-align: start;
  margin: 0;
  max-width: 650px;
}

div{
  display: flex;
  align-items: center;
  margin: 20px 0;

  i{
    margin-right: 20px;
    color: #00cf9d;
  }
}
@media (max-width:950px){
    width: calc(100% - 40px);
    margin-bottom: 40px;
  }
`;

export default Intro;
