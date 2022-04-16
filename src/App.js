
import React, { Component } from "react";
import $ from "jquery";
import Fade from "react-reveal";
import "./App.css";
import Contact  from "./components/Contact";
import Posts  from "./pages/Posts";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };

    
  }
  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }
  render(){

    return (
      <div className="App">
        <header id="home" >
  
          <nav id="nav-wrap">
  
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
              Hide navigation
            </a>
  
            <ul id="nav" className="nav">
  
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Accueil
                </a>
              </li>
  
  
              <li>
                <a className="smoothscroll" href="#article">
                  Posts
                </a>
              </li>
  
              <li>
                <a  href="https://ibrahimasall.com">
                  Réalisations
                </a>
              </li>
              <li>
                {/* <a className="smoothscroll" href="#portfolio">
                  Réalisations
                </a> */}
              </li>
  
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
  
          </nav>
  
          <div className="row banner">
  
            <div className="banner-text">
  
  
              <Fade bottom>
                <h1 className="responsive-headline">Blog d'Ibrahima SALL</h1>
              </Fade>
              <Fade bottom duration={1200}>
                <h3>Ce blog va parler de nouvelles technologies, de certaines techniques de développement informatique ainsi que de produits d'investissements interessants</h3>
              </Fade>
              <hr />
              <Fade bottom duration={2000}>
                <ul className="social">
                  <a href="https://github.com/Ibrahima-github/React-Blog" className="button btn project-btn">
                    <i className="fa fa-book"></i>Projet
                  </a>
                  <a href="https://github.com/Ibrahima-github" className="button btn github-btn">
                    <i className="fa fa-github"></i>Github
                  </a>
                </ul>
              </Fade>
  
            </div>
  
          </div>
  
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
  
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
  
  
        <div className="container">
  
  
  
  
          <div id="article">
            <h3 >Bienvenue sur mon blog</h3>
            
            <Posts />
          </div>
          <div id="contact">
          <Contact data={this.state.resumeData.main} />
  
          </div>
          <footer>
            <div className="row">
              <Fade bottom>
                <div className="twelve columns">
  
  
                  <ul className="copyright">
                    <li>&copy; Copyright 2021 Ibrahima SALL</li>
                    <li>
                    </li>
                  </ul>
                </div>
              </Fade>
  
              <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#home">
                  <i className="icon-up-open"></i>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
  }

export default App;
