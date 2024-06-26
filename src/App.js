import './App.css';
import { themeContext } from './Context';
import { useContext } from 'react';
import Navbar from "./component/navbar/Navbar";
import Intro from './component/Intro/Intro';
import Skill from './component/skill/Skill';
import Achievements from './component/achievements/Achievements';
import Projects from './component/projects/Projects';
import Experience from './component/experience/Experience';
import Contact from './component/contactus/Contact';
import Footer from './component/footer/Footer';



function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
        background: darkMode ? 'black' : ' ',
        color: darkMode ? 'white' : ' ',
      }}>
      <Navbar />
      <Intro />
      <Skill />
      <Achievements />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
