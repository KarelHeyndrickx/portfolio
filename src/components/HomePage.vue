<template>
  <div class="home">
    <section class="hero is-medium">
      <div class="hero-head">
        <nav class="level is-mobile">
          <!-- left side -->
          <div class="level-left">
            <div class="level-item">
              <img src="../assets/images/other/logo.png" alt="My logo" class="logo">
            </div>
          </div>
          <!-- right side -->
          <div class="level-right">
            <div class="level-item">
              <a
                class="button outlinePrimary"
                v-smooth-scroll="{ duration: 1000, offset: -50 }"
                href="#contact"
              >Zeg hallo</a>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div id="happycloud1" class="backgroundcloud shadow has-text-centered">
          <p>
            <strong>{◠‿◠}</strong>
          </p>
        </div>
        <div id="happycloud2" class="backgroundcloud shadow has-text-centered">
          <p>
            <strong>{^__^}</strong>
          </p>
        </div>

        <div data-aos="zoom-in" class="container has-text-centered">
          <h1 class="title is-1">Hallo, ik ben Karel!</h1>
          <p class="subtitle">
            Student met interesse in
            <strong>Front-end Development</strong> en
            <strong>Design</strong>
          </p>
        </div>
      </div>

      <div class="hero-foot">
        <img src="../assets/images/elements/bgLandscape.png" alt="photo of landscape">
      </div>
    </section>

    <div id="introduction">
      <div class="introductiontext">
        <img src="../assets/images/other/ppcirbgwhite.png" class="profilePic" alt="picture of me">
        <h3 class="title">Hi!</h3>
        <p>Mijn naam is Karel Heyndrickx, ik ben student Toegepaste Informatica - Programmeren en een zeer enthousiaste web- en applicatiedesigner.</p>
        <p>Om meer te zien over mijn ervaring, klik hier.</p>
        <a
          class="button introButton"
          v-smooth-scroll="{ duration: 1000, offset: 0}"
          href="#projects"
        >Zie projecten</a>
      </div>
      <img id="imgSnowscape" src="../assets/images/elements/snowscape.png" alt="photo of snowscape">
    </div>

    <section id="skills" class="hero is-medium is-bold has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h3 class="title is-3">Mijn vaardigheden</h3>
          <h5 class="subtitle">en interesses</h5>

          <div class="level">
            <div class="level-item has-text-centered" data-aos="fade-right" data-aos-offset="200"  data-aos-duration="1000">
              <div class="window shadow">
                <i class="fa fa-code"></i>
                <h5 class="title is-5">Front-end Development</h5>
                <p>Er is geen beter gevoel als iteratief en constructief functionaliteiten tot leven te laten komen.</p>
                <p>
                  <strong>Programmeertalen:</strong>
                </p>
                <p>Angular, Vue.js, Html, Css, Js, Sass</p>
                <small>C# .NET, Java, Java Spring</small>
                <p>
                  <strong>Development tools:</strong>
                </p>
                <ul>
                  <li>Bootstrap, Material, Bulma</li>
                  <li>Anime.js, Bounce.js, Animate.css, AOS</li>
                  <li>...</li>
                  <li></li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
            <div class="level-item has-text-centered " data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000">
              <div class="window shadow">
                <i class="fa fa-paint-brush"></i>
                <h5 class="title is-5">Design</h5>
                <p>Ik hecht veel waarde aan de inhoudstructuur, het uiterlijk, de interactie en de gebruiksvriendelijkheid van applicaties.</p>
                <p>
                  <strong>Design interesses:</strong>
                </p>
                <p>Websites, Mobile Apps, Logo's, UX, UI</p>
                <p>
                  <strong>Design tools:</strong>
                </p>
                <ul>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe XD</li>
                  <li>Cinema 4D</li>
                  <li>Pen en papier</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="houses">
      <img src="../assets/images/elements/houses_only.png" alt="photo of houses">
    </div>
    <section id="projects" class="hero is-medium is-bold has-text-centered">
      <div class="hero-body">
        <div class="projectcontainer">
          <h3 class="title is-3">Mijn projecten</h3>
          <h5 class="subtitle">en ...</h5>
          <div id="projects">
            <div class="projectList">
              <div id="centeredProjectList">
                <div
                  class="projectrow"
                  v-for="(data) in projects"
                  :key="data.projectname"
                >
                  <span class="tag is-rounded" v-bind:class="data.tagclass">{{data.tag}}</span>
                  <a v-on:click="chooseProject(data.projectname)">{{data.projectname}}</a>
                </div>
              </div>
            </div>
            <transition name="fly-in" mode="out-in">
              <div class="centered" :key="project.projectname">
                <div class="columns is-desktop">
                  <div class="column is-7 slidercolumn">
                    <div class="projectSliderGrayContainer">
                      <div class="projectSliderBox">
                        <div class="shadow projectSlider">
                          <vue-displacement-slideshow
                            :images="images"
                            :displacement="require('../assets/images/projects/distortion.jpg')"
                            :intensity="0.2"
                            :speedIn="1.4"
                            :speedOut="1.4"
                            ease="Expo.easeInOut"
                            ref="slideshow"
                          ></vue-displacement-slideshow>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column text-left is-5 slidercolumn">
                    <h3 class="subtitle is-3">{{project.projectname}}</h3>
                    <p>{{project.description}}</p>

                    <a v-if="project.githubLink" target="_blank" :href="project.githubLink">
                      <i class="fa fa-github"></i>
                      {{project.githubLinkShort}}
                    </a>
                    <a v-if="project.youtubeLink" target="_blank" :href="project.youtubeLink">
                      <i class="fa fa-youtube"></i>
                      {{project.youtubeLinkShort}}
                    </a>
                    <a v-if="project.onlineLink" target="_blank" :href="project.onlineLink">
                      <i class="fa fa-link"></i>
                      {{project.onlineLinkShort}}
                    </a>
                    <br>
                    <span
                      class="tag is-rounded is-medium margin-top-20"
                      v-bind:class="project.tagclass"
                    >{{project.tag}}</span>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>
    <div id="landscape">
      <img src="../assets/images/elements/landscape.png" alt="photo of landscape">
    </div>
    <div id="contact">
      <ContactForm />
    </div>
     <div class="copyright">
      <p>
        <i class="fa fa-copyright"></i> 2019 Karel Heyndrickx. Alle rechten voorbehouden.
      </p>
    </div>
  </div>
</template>

<script>
//Import the image slider
import VueDisplacementSlideshow from "vue-displacement-slideshow";
import ContactForm from './ContactForm';

export default {
  name: "HomePage",
  data() {
    return {
      projects: [
        {
          projectname: "Breakout",
          tag: "C# .NET",
          description:
            "Breakout is een quiz ontworpen voor scholen die op een speelse manier leerlingen willen kennis laten opdoen. Deze webapplicatie is het tweede deel van een voltallig project en bevat het spelen van de quiz voor de deelnemende teams en het beheren van de teams (als leerkracht). ",
          youtubeLink: "https://www.youtube.com/watch?v=CEzhR40caMI",
          youtubeLinkShort: "Bekijk de werking & design",
          tagclass: "is-link"
        },
        {
          projectname: "RijQuiz",
          description:
            "In de RijQuiz app presenteert een quiz over de wegcode in België. Het gebruikt vragen die afgehaald worden van een live server. Aangezien de wetgeving in België heel soms verandert, kunnen deze vragen dus soms geüpdatet worden en is het daarom nodig dat de app zijn vragenlijst update. De documentatie over deze live server kan gevonden worden in de github repository RijQuizBackend. Te vinden via de onderstaande link",
          tag: "Swift",
          githubLink: "https://github.com/KarelHeyndrickx/SwiftApplication",
          githubLinkShort: "Github",
          tagclass: "is-warning"
        },
        {
          projectname: "RijQuiz Questions Manager",
          description:
            "De Rijquiz Questions Manager is een webapplicatie die nauw samenwerkt met de RijQuiz app. Deze webapplicatie dient om de vragen die gepresenteerd kunnen worden tijdens de quiz aan te maken en te verwijderen. Ik heb dit projectje gemaakt als crash course met Vue.",
          tag: "Vue",
          githubLink:
            "https://github.com/KarelHeyndrickx/RijQuiz-Questions-manager",
          githubLinkShort: "Github",
          tagclass: "is-primary"
        },
        {
          projectname: "Beurs Webapplicatie",
          tag: "Angular",
          description:
            "Deze beurs webapplicatie werd gemaakt als schoolproject. Hierbij kunnen er exposanten toegevoegd worden aan een databank alsook hun positie waar ze zouden staan op een plattegrond. Bovendien kunenn er quizvragen toegevoegd worden die bezoekende scholen kunnen beantwoorden via de app. Deze app is zichtbaar in het project 'Beurs app'",
          tagclass: "is-danger"
        },
        {
          projectname: "Workmanager",
          tag: "Angular",
          description:
            "Workmanager is een project gemaakt in Angular. Deze applicatie vergemakkelijkt de communicatie tussen werkgevers en werknemers. Werkgevers kunnen hierbij jobs of evenementen publiceren. Vervolgens kunnen de werknemers zich hiervoor inschrijven.",
          onlineLink: "http://workmanager-frontend.herokuapp.com/",
          onlineLinkShort: "Website",
          tagclass: "is-danger"
        },
        {
          projectname: "Beurs App",
          tag: "Android (Kotlin)",
          description:
            "Deze beurs app werd gemaakt als schoolproject. Hierbij konden leerlingen van scholen een quiz spelen met vragen over de exposanten van de beurs. Vervolgens konden de verantwoordelijke leerkrachten hun antwoorden zien op de webapplcatie. Die webapplicatie is zichtbaar in het project 'Beurs webapplicatie'. ",
          tagclass: "is-success"
        },
        {
          projectname: "Oude portfolio",
          tag: "HTML, CSS, JS ",
          description:
            "De portfolio die u nu aan het lezen bent is reeds mijn tweede portfolio. Aangezien ik in mijn eerste portfolio geen consistente design-regels had, maar eerder hier en daar mijn creatieve vaardigheden wou uiten, was het dus tijd voor een nieuwe. ",
          onlineLink: "https://users.hogent.be/karelheyndrickx/eportfolio/",
          onlineLinkShort: "Website",
          tagclass: "is-info"
        },
        {
          projectname: "Legendary (chocoladelounge)",
          tag: "HTML, CSS, JS ",
          description:
            "Legendary Gouda is een chocoladebar waar u kan genieten van pralines van Belgische topkwaliteit, koffie en jazz/blues. Legendary Gouda is een winkeltje gerund door mijn zus. Om haar op weg te krijgen in een ver afgelegen stadje heb ik haar een moderne en uitnodigende website gemaakt.",
          tagclass: "is-info"
        }
      ],
      project: {
        projectname: "Breakout",
        tag: "C# .NET",
        description:
          "Breakout is een quiz ontworpen voor scholen die op een speelse manier leerlingen willen kennis laten opdoen. Deze webapplicatie is het tweede deel van een voltallig geheel en bevat enkel het spelen van de quiz voor de deelnemende teams en het beheren van de teams (als leerkracht). ",
        youtubeLink: "https://www.youtube.com/watch?v=CEzhR40caMI",
        youtubeLinkShort: "Bekijk de werking & design",
        tagclass: "is-link"
      },      
    };
  },
  components: {
    VueDisplacementSlideshow, ContactForm
  },
  methods: {
    chooseProject(name) {
      this.project = this.projects.find(project => {
        return project.projectname == name;
      });
    },
    init() {
      //We loop through all our images by calling the 'next' method of our component every 2 seconds
      setInterval(() => {
        this.$refs.slideshow.next();
      }, 4000);
    }
  },
  computed: {
    images() {
      switch (this.project.projectname) {
        case "RijQuiz":
          return [
            require("../assets/images/projects/rijquiz/homepage.png"),
            require("../assets/images/projects/rijquiz/settingspage.png"),
            require("../assets/images/projects/rijquiz/quizpage.png"),
            require("../assets/images/projects/rijquiz/resultspage.png")
          ];
          break;
        case "RijQuiz Questions Manager":
          return [
            require("../assets/images/projects/questionmanager/questionmanager.png"),
            require("../assets/images/projects/questionmanager/questionlist.png")
          ];
          break;
        case "Breakout":
          return [
            require("../assets/images/projects/breakout/sessioncode.png"),
            require("../assets/images/projects/breakout/groupselection.jpg"),
            require("../assets/images/projects/breakout/task.jpg"),
            require("../assets/images/projects/breakout/groups.png"),
            require("../assets/images/projects/breakout/overview.png")
          ];
          break;
        case "Workmanager":
          return [
            require("../assets/images/projects/workmanager/workmanager.jpg"),
            require("../assets/images/projects/workmanager/employee.png")
          ];
          break;
        case "Oude portfolio":
          return [
            require("../assets/images/projects/oldportfolio/tetris.png"),
            require("../assets/images/projects/oldportfolio/banner.jpg"),
            require("../assets/images/projects/oldportfolio/me.jpg"),
            require("../assets/images/projects/oldportfolio/projects.png")
          ];
          break;
        case "Beurs Webapplicatie":
          return [
            require("../assets/images/projects/revaWeb/addExhib.jpg"),
            require("../assets/images/projects/revaWeb/localiseExhib.jpg"),
            require("../assets/images/projects/revaWeb/groups.jpg"),
            require("../assets/images/projects/revaWeb/groupAnswers.jpg")
          ];
          break;
        case "Beurs App":
          return [
            require("../assets/images/projects/revaAndroid/mockups1.jpg"),
            require("../assets/images/projects/revaAndroid/mockups2.jpg")
          ];
          break;
        case "Legendary (chocoladelounge)":
          return [
            require("../assets/images/projects/legendary/startpage.jpg"),
            require("../assets/images/projects/legendary/openinghours.jpg"),
            require("../assets/images/projects/legendary/products.jpg"),
            require("../assets/images/projects/legendary/contact.jpg")
          ];
          break;

        default:
          return [
            require("../assets/images/projects/questionmanager/questionmanager.png"),
            require("../assets/images/projects/questionmanager/questionlist.png")
          ];
      }
    }
  },
  mounted() {
    this.init();    
    
  },
};
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";


h1 {
  margin-bottom: 1.3em !important;
}
h2 {
  margin-bottom: 1.2em !important;
}
h3 {
  margin-bottom: 1.1em !important;
}
h4 {
  margin-bottom: 1em !important;
}
.text-right {
  text-align: right !important;
}
.text-left {
  text-align: left;
}
.primary-text {
  color: #44c68e;
}
p {
  margin: 10px 0px !important;
  line-height: 30px;
}
.hero {
  background-color: #e8feff;
}
nav {
  padding: 50px;
}
.logo {
  max-height: 50px;
}
.outlinePrimary {
  color: #44c68e !important ;
  border-color: #44c68e !important;
  background-color: transparent !important;
  transition: 0.4s;
  border-radius: 20px !important;
  padding: 20px !important;
}
.outlinePrimary:hover {
  color: white !important ;
  background-color: #44c68e !important;
}

#introduction {
  background-color: #4bc58f;
  margin-top: -20px;
  padding-top: 100px;
}

#imgSnowscape {
  margin-bottom: -7px;
}
.introductiontext {
  width: 50%;
  max-width: 500px;
  margin: 0px auto 100px auto;
  text-align: center;
  color: white !important;
}
.introductiontext .title {
  color: white !important;
}
.introductiontext p {
  margin-bottom: 30px !important;
}
.introButton {
  color: white !important ;
  border: none !important;
  background-color: #4ca179 !important;
  transition: 0.4s;
  border-radius: 20px !important;
  cursor: pointer;
  padding: 20px !important;
  line-height: 0px !important;
}
.introButton:hover {
  background-color: #37795a !important;
}
#skills .window * {
  margin: 20px 0px !important;
}
#skills .window li {
  margin: 10px 0px !important;
}
#skills,
#projects,
#houses,
#landscape {
  background-color: #f2f2f2;
}
#skills i {
  font-size: 40px;
  margin-bottom: 10px;
}

.window {
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  max-width: 400px;
}
#projects {
  padding-bottom: 60px;
}
#projects img {
  margin: 0 auto;
}

#contact {
  background-color: #4ca179;
  padding: 40px 0px;
  margin-top: -10px;
}
#contact h5 {
  font-weight: 100 !important;
}

.shadow {
  box-shadow: 0 1rem 2rem -0.5rem rgba(19, 19, 19, 0.2);
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
}
.shadowhover:hover {
  box-shadow: 0 1rem 2rem -0.5rem rgba(19, 19, 19, 0.2);
}
.shadowhover {
  transition: 0.4s;
  cursor: pointer;
}

textarea:focus,
input:focus {
  outline: none !important;
  outline-color: white !important;
  border: 1px solid white !important;
}

.backgroundcloud {
  background-color: white;
  max-width: 100px;
  min-width: 100px;
  height: 50px;
  border-radius: 40px;
  position: absolute;
}
.backgroundcloud::before {
  content: "";
  background-repeat: repeat-x;
  position: absolute;
  top: -20px;
  left: 0;
  background-image: url("../assets/images/elements/cloud_top.png");
  background-size: contain;
  height: 100%;
  width: 100%;
}
#happycloud1 {
  animation: cloudfly 40s infinite;
  top: 200px;
  left: 0;
}
#happycloud2 {
  animation: cloudfly2 40s 3s infinite;
  top: 300px;
  left: 110%;
}
@keyframes cloudfly {
  0% {
    left: -20%;
  }
  50% {
    left: 110%;
  }

  100% {
    left: -20%;
  }
}
@keyframes cloudfly2 {
  0% {
    left: 110%;
  }
  50% {
    left: -20%;
  }

  100% {
    left: 110%;
  }
}

span {
  margin-right: 10px !important;
}
.centered {
  margin: 0 auto;
}
.fly-in-enter-active {
  animation: slide-down 0.4s ease;
}
.fly-in-leave-active {
  animation: slide-down 0.4s reverse ease;
}
.loadingAnim-enter-active {
  animation: slide-down 0.4s ease;
}
.loadingAnim-leave-active {
  animation: slide-down 0.4s ease reverse;
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.margin0 {
  margin: 0 !important;
}
.margin-top-20 {
  margin-top: 20px;
}
.projectrow {
  padding: 0.5rem !important;
  display: inline-block;
}
.projectList {
  position: relative;
}
.projectList a {
  font-weight: bold;
}
#centeredProjectList {
  width: 70%;
  margin: 60px auto;
}
.projectSliderGrayContainer {
  padding: 30px;
  background-color: #e8e7e7;
  border-radius: 5px;
  margin-bottom: 40px;
  padding-bottom: 0px;
}
.projectSliderBox {
  width: 100%;
  position: relative;
  padding-bottom: 70%;
  overflow: hidden;
}
.projectSliderBox .projectSlider {
  margin-bottom: -50px !important;
  border-radius: 5px;
  background: url("../assets/images/projects/loadingImage.png");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 700px) {
  #centeredProjectList {
    width: 100%;
  }
}
@media only screen and (max-width: 1087px) {
  .slidercolumn {
    width: 100% !important;
  }
}

.white {
  color: white !important;
  }
.copyright {
  background-color: #4d9c77;
  padding: 20px;
}
.copyright p {
  margin: 0 !important;
  color: rgb(222, 222, 222);
  text-align: right;
  font-size: 0.9em;
}

.alert-in-enter-active {
  animation: slide-down 0.4s ease;
}
.alert-in-leave-active {
  animation: slide-down 0.4s reverse ease;
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shadow {
  50% {
    transform: scale(1.2, 1);
  }
}
.profilePic {
  border-radius: 50%;
  margin-bottom: 40px;
  width: 100%;
  max-width: 250px;
}
.projectcontainer {
  width: 80%;
  margin: 0 auto;
}
.projectSlider canvas::before {
  content: "";
  background-color: gray;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 40px;
  position: absolute;
}
</style>
