import React from "react";
import styled from "styled-components";
import { useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";
import loadingCircle from "./img/loading.gif";
import text from './text/formText'

import { motion } from "framer-motion";
import animations from "../animation";


const Form = () => {

  
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_bo9dzc3",
        "template_eoimxoe",
        form.current,
        "RfMxlDM4DncD31wYf"
      )
      .then(
        (result) => {
          setLoading(false);
          console.log(result.text);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          setError(true);
        }
      );
  };

  return (
    <Container {...animations.fadeInFromRight}
    transition={{ duration: 1, delay: 0.2 }}>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>{text.name[true]}</label>
          <input required type="text" name="user_name" />
        </div>
        <div>
          <label>Email</label>
          <input required type="email" name="user_email" />
        </div>
        <div>
          <label>{text.phone[true]}</label>
          <input required type="phone" name="user_phone" />
        </div>
        <div>
          <label>{text.help[true]}</label>
          <textarea required type="phone" name="user_message" />
        </div>
        <p>
        {text.privacy[true]}
        </p>
        <div className="bottom">
          {loading && (
            <button disabled="true" className="try-button loading">
              <img src={loadingCircle} />
            </button>
          )}
          {sent && (
            <button disabled="true" className="try-button loading">
              <i className="fa-solid fa-check"></i>
            </button>
          )}
          {error && (
            <button disabled="true" className="try-button loading">
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
          {!loading && !sent && !error && (
            <button type="submit" className="try-button">
              {text.button[true]}
            </button>
          )}
          {sent && (
            <p className="sent">
              {text.sent[true]}
            </p>
          )}
          {error && (
            <p className="error">
              {text.error[true]}
            </p>
          )}
        </div>
      </form>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  

  form {
    
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 20px;
    width: clamp(280px, 80%, 500px);
    background-color: white;

    @media (max-width: 950px) {
    width: calc(100% - 40px);
  }

    div {
      display: flex;
      flex-direction: column;
      margin: 20px 0;
      width: 100%;

      label {
        margin-bottom: 5px;
        text-align: start;
      }

      input,
      textarea {
        height: 30px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 1px 5px 0px;
        outline: none;
        width: 98%;
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;

        &:focus {
          border: 1px solid blue;
        }
      }

      textarea {
        height: 100px;
        resize: none;
      }
    }

    p {
      width: 90%;
      font-size: 10px;
      font-style: italic;
      line-height: 16px;
      text-align: start;
    }

    button {
      margin-top: 20px;
      margin-right: 20px;
      width: 100px;
      height: 40px;
      img {
        width: 30px;
      }
    }

    .loading {
      background-color:#00cf9d ;
      color: white;
      cursor: not-allowed;
    }
  }
  .bottom {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    

    p {
      font-size: 12px;
      max-width: 300px;
      text-align: start;
      
    }
    .sent {
      color: green;
    }
    .error {
      color: red;
    }
  }

  
`;



export default Form;
