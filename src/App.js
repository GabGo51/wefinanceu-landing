import "./App.css";
import { motion } from "framer-motion";
import hero from "./img/hero.png";
import logo from './img/blueLogo.PNG'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.img initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }} className="logo" src={logo} alt="logo" />
      </header>
      <section className="App-main">
        <motion.h1 className="title"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Commercial real estate financing, simplified
        </motion.h1>
      </section>
      <footer className="frame">
        <motion.img initial={{scaleY:0.9, y: 20, opacity: 0 }}
          animate={{scaleY:1, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }} className="desktop" src={hero} alt="frame of mobile"/>
      </footer>
    </div>
  );
}

export default App;
