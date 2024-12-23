import Github from "@iconscout/react-unicons/icons/uil-github";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import { themeContext } from "../../Context";
import BoyImg from "../../img/boy.png";
import Crown from "../../img/crown.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";
import nextl from "../../img/nextJs.png";
import thumbup from "../../img/thumbup.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";
import "./Intro.css";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>An Experienced and skilled</span>
          <div class="typerwiter-box">
            <Typewriter
              options={{
                strings: ["Frontend", "Software"],
                autoStart: true,
                loop: true,
                wrapperClassName: "typerwiter",
              }}
            />
            <span>Developer</span>
          </div>
        </div>
        {/* <button className='button i-button'>Click Here</button> */}
        <div className="i-icons">
          <a href="https://www.instagram.com/seemant_20_11/">
            <img src={Instagram} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/seemant-kamlapuri-b682331b5/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://github.com/Seemant9118">
            <Github color={"var(--orange)"} size="5rem" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={"Vector1"} alt="" />
        <img src={"Vector2"} alt="" />
        <img src={BoyImg} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-14%" }}
          transition={transition}
          src={nextl}
          width="400px"
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="UI/UX" txt2="Visonary" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18.4rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best" txt2="Frontend Developer" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238,210,255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
