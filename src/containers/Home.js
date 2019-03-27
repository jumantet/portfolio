import React from "react";
import Typist from "react-typist";
import NetworkTags from "../components/NetworkTags";
import { Element, scroller } from "react-scroll";

import Computer from "../components/Computer";
import Javascript from "../components/Javascript";
import ReactComp from "../components/ReactComp";
import Html5 from "../components/Html5";
import Css3 from "../components/Css3";
import NodeJS from "../components/NodeJS";
import Github from "../components/Github";
import ReactNative from "../components/ReactNative";

import ModalSite from "../components/ModalSite";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHoveringSkills: false,
      isHoveringHome: false,
      isHoveringProjects: false,
      isClicked: false,
      isLeboncoinOpened: false,
      isMytodolistOpened: false,
      isAirbnbOpened: false
    };
  }
  handleMouseHover = ref => {
    this.setState(this.toggleHoverState(ref));
  };

  toggleHoverState = ref => {
    if (ref === "skills") {
      let isHoveringSkills = this.state.isHoveringSkills;
      return {
        isHoveringSkills: !isHoveringSkills
      };
    } else if (ref === "home") {
      let isHoveringHome = this.state.isHoveringHome;
      return {
        isHoveringHome: !isHoveringHome
      };
    } else if (ref === "projects") {
      let isHoveringProjects = this.state.isHoveringProjects;
      return {
        isHoveringProjects: !isHoveringProjects
      };
    }
  };

  scrollToSkills() {
    scroller.scrollTo("skills", { smooth: true, offset: -220 });
  }

  handleOpenModal = name => {
    if (name === "leboncoin") {
      this.setState({ isLeboncoinOpened: true });
    } else if (name === "airbnb") {
      this.setState({ isAirbnbOpened: true });
    } else if (name === "mytodolist") {
      this.setState({ isMytodolistOpened: true });
    }
  };

  handleCloseModal = name => {
    if (name === "airbnb") {
      this.setState({ isAirbnbOpened: false });
    } else if (name === "leboncoin") {
      this.setState({ isLeboncoinOpened: false });
    } else if (name === "mytodolist") {
      this.setState({ isMytodolistOpened: false });
    }
  };

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 0
          }}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Archivo:400,400i,500,600,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lobster+Two"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossOrigin="anonymous"
          />
          <NetworkTags />

          <div className="container">
            <img
              src={require("../assets/images/photo.jpeg")}
              className="myPhoto bounce-in-right "
              alt="myPhoto"
            />
            <div>
              <h1 className="text-flicker-in-glow">Hello, I'm Julian Mantet</h1>
              <Typist avgTypingDelay={30}>
                <Typist.Delay ms={4000} />
                <p className="animatedText">
                  Recently graduated from a 10-weeks intensive bootcamp named
                  "Le Réacteur" in Paris, I invite you to browse this website in
                  order to discover all the fullstack skills I developed since
                  the last 2 months as well as the projects I've made.
                </p>
              </Typist>
            </div>

            <div
              style={{
                marginBottom: "20px",
                height: "80px",
                width: "80px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
              className="slide-in-fwd-bottom"
            >
              <i
                onClick={this.scrollToSkills}
                onMouseEnter={() => this.handleMouseHover("skills")}
                onMouseLeave={() => this.handleMouseHover("skills")}
                className="fas fa-chevron-circle-down"
              />
            </div>
          </div>
          <div className="containerSkills">
            <div>
              <h2 style={{ margin: 0, marginBottom: "50px" }}>SKILLS</h2>
              <Element name="skills" />
              <div className="animSkills">
                <Computer />
                <Javascript />
                <ReactComp />
                <Html5 />
                <Css3 />
                <NodeJS />
                <Github />
                <ReactNative />
              </div>
            </div>
          </div>
          <div className="containerProjects">
            <h2 style={{ margin: 0, marginBottom: "50px" }}>PROJECTS</h2>
            <ul className="projectList">
              <li
                onClick={() => this.handleOpenModal("leboncoin")}
                className="project"
              >
                <img
                  alt="leboncoin"
                  className="projectTitle"
                  src={require("../assets/images/leboncoin.png")}
                />
                <img
                  alt="leboncoin"
                  className="projectImage"
                  style={{
                    objectFit: "contain"
                  }}
                  src={require("../assets/images/leboncoinscreen.png")}
                />
              </li>
              <li
                onClick={() => this.handleOpenModal("mytodolist")}
                className="project"
              >
                <p
                  style={{
                    fontFamily: "Lobster Two",
                    color: "#66cdaa",
                    fontSize: "65px",
                    margin: 0,
                    marginBottom: "10px",
                    fontWeight: "bold"
                  }}
                >
                  myTodolist
                </p>
                <img
                  alt="mytodolist"
                  className="projectImage"
                  style={{
                    objectFit: "contain"
                  }}
                  src={require("../assets/images/mytodolistscreen.png")}
                />
              </li>
              <li
                onClick={() => this.handleOpenModal("airbnb")}
                className="project"
              >
                <img
                  alt="airbnb"
                  className="projectTitle"
                  style={{
                    maxHeight: "80px"
                  }}
                  src={require("../assets/images/airbnb.png")}
                />
                <img
                  alt="airbnb"
                  className="projectImage"
                  style={{
                    objectFit: "contain"
                  }}
                  src={require("../assets/images/airbnbscreen.png")}
                />
              </li>
            </ul>
            <ModalSite
              closeModal={
                this.state.isAirbnbOpened
                  ? () => this.handleCloseModal("airbnb")
                  : this.state.isLeboncoinOpened
                  ? () => this.handleCloseModal("leboncoin")
                  : this.state.isMytodolistOpened
                  ? () => this.handleCloseModal("mytodolist")
                  : null
              }
              modalIsOpen={
                this.state.isAirbnbOpened ||
                this.state.isLeboncoinOpened ||
                this.state.isMytodolistOpened
              }
              label={
                this.state.isAirbnbOpened ? (
                  <img
                    alt="airbnb"
                    style={{ height: "80px", marginBottom: "10px" }}
                    src={require("../assets/images/airbnb.png")}
                  />
                ) : this.state.isLeboncoinOpened ? (
                  <img
                    alt="leboncoin"
                    style={{ height: "80px", marginBottom: "10px" }}
                    src={require("../assets/images/leboncoin.png")}
                  />
                ) : this.state.isMytodolistOpened ? (
                  <p
                    style={{
                      fontFamily: "Lobster Two",
                      color: "#66cdaa",
                      fontSize: "65px",
                      margin: 0,
                      marginBottom: "10px",
                      fontWeight: "bold"
                    }}
                  >
                    myTodolist
                  </p>
                ) : null
              }
              description={
                this.state.isAirbnbOpened ? (
                  <p className="description">
                    During the last week of the bootcamp I have been involved
                    in, I realized a replica of Airbnb on mobile using the
                    framework React Native. For this project, I have only
                    developed the front end part enjoying an API built by an
                    other person. I built it thanks to the open source toolchain
                    Expo and you are able to find the source code on my Github
                    clicking here :
                  </p>
                ) : this.state.isLeboncoinOpened ? (
                  <p className="description">
                    During the bootcamp I have been involved in, I realized a
                    replica of Leboncoin's website using the framework React. I
                    built the front end as well as the back end part. They are
                    hosted on Heroku and you can find the two source codes on my
                    Github clicking here :
                  </p>
                ) : this.state.isMytodolistOpened ? (
                  <p className="description">
                    Just after the end of the bootcamp, I spent 3 days building
                    an other fullstack project from scratch with the idea of
                    building a collaborative "Todolist App" which would look
                    like Trello using the HTML's drag and drop tool. The
                    authentification in order to get access to the different
                    features it offers is by Facebook. As you will see in the
                    videos, I have also integrated a livechat using Socket IO.
                    The back and the front are hosted on Heroku (sorry for the
                    loading delay...) and you can also find the source code on
                    my Github clicking here :
                  </p>
                ) : null
              }
              buttonStyle={
                this.state.isAirbnbOpened
                  ? { color: "tomato", border: "solid 2px tomato" }
                  : this.state.isLeboncoinOpened
                  ? { color: "#F56A2B", border: "solid 2px #F56A2B" }
                  : this.state.isMytodolistOpened
                  ? { color: "#66cdaa", border: "solid 2px #66cdaa" }
                  : null
              }
              skills={
                this.state.isMytodolistOpened
                  ? [
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React",
                      "React Router",
                      "WebSocket",
                      "Express JS",
                      "Mongoose",
                      "Node JS"
                    ]
                  : this.state.isLeboncoinOpened
                  ? [
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React",
                      "Express JS",
                      "Mongoose",
                      "Node JS",
                      "Cloudinary"
                    ]
                  : this.state.isAirbnbOpened
                  ? ["React Native", "React Navigation", "JavaScript", "Expo"]
                  : null
              }
              link={
                this.state.isMytodolistOpened
                  ? "https://mytodolist-client.herokuapp.com/"
                  : this.state.isLeboncoinOpened
                  ? "https://leboncoin-client.herokuapp.com/"
                  : null
              }
            />
            <Element name="projects" />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
