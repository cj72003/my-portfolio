import React, { Component } from "react";
import styles from "./Header.module.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <header className={styles.header}>
        <h1 className={styles.logo}>Portfolio</h1>

        {/* Hamburger button */}
        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.open : ""}`}
          onClick={this.toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      
        <nav className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contacts</a>
          <a
          href={process.env.PUBLIC_URL + "/cv/camillejuego_CV.pdf"}
          download="camillejuego_CV.pdf"
          >
  Download CV
</a>

        </nav>
      </header>
    );
  }
}

export default Header;
