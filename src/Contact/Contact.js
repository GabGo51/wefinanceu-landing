import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Intro from "./Intro";
import Logo from './img/logo.png'
import animations from "../animation";
import "./Contact.css";

import { motion } from "framer-motion";
const Contact = () => {
  return (
    <Container className="blue">
      <motion.img {...animations.fadeInFromUp}  src={Logo} transition={{ duration: 1, delay: 0.2 }} alt="logo"/>

      
        <div className="wrapper">
          <Intro />
          <Form />
        </div>
      
      
    </Container>
  );
};


const Container = styled.div`
background-color: #002f5a;
display: flex;
flex-direction: column;
align-items: center;
max-width: 100vw;
min-height: 100vh;

img{
  width: clamp(300px, 50%, 320px);
  margin:  5vw 0;
}

.wrapper{
  display: flex;
}

@media (max-width:950px){
  .wrapper{
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
}
`

export default Contact;
