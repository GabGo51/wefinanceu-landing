import "./Home.css";
import { motion } from "framer-motion";
import hero from "../img/hero.webp";
import logo from "../img/blueLogo.PNG";
import { useNavigate } from "react-router-dom";
import animations from '../animation'
import TryButton from "./TryButton";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    console.log('hi');
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="App">
      <motion.img
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="logo"
        src={logo}
        alt="logo"
      />

      <motion.h1
        className="title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Commercial Real Estate Financing, Simplified.
      </motion.h1>
      <div onClick={() => handleNavigate("/contact")}>
        <TryButton
          onClick={() => handleNavigate("/contact")}
          animation={animations.fadeInFromUp}
        />
      </div>

      <motion.img
        initial={{ scaleY: 0.9, y: 20, opacity: 0 }}
        animate={{ scaleY: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="desktop"
        src={hero}
        alt="frame of mobile"
      />
    </div>
  );
};

export default Home;
