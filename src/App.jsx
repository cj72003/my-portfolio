import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Certificate from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";


import styles from "./App.module.css";


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <About />
       <Projects />
      <Certificate/>
      <Contact />
    </div>
  );
}

export default App;
