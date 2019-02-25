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
            <strong>{^__^}</strong>
          </p>
        </div>
        <div id="happycloud2" class="backgroundcloud shadow has-text-centered">
          <p>
            <strong>{◠‿◠}</strong>
          </p>
        </div>

        <div class="container has-text-centered">
          <h1 class="title is-1">Hallo, ik ben Karel!</h1>
          <p class="subtitle">
            een Student met interesse in
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
        <h3 class="title">Hi!</h3>
        <p>Mijn naam is Karel Heyndrickx, ik ben een student Informatica - Programmerenen een zeer enthousiaste web- en applicatiedesigner.</p>
        <p>Om meer te zien over mijn ervaring klik hier.</p>
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
            <div class="level-item has-text-centered">
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
                  <li>Bootstrap, Material, Bulma/li>
                  <li>Anime.js, Bounce.js, Animate.css</li>
                  <li>...<li>
                  <li>GitHub</li>
                </ul>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div class="window shadow">
                <i class="fa fa-paint-brush"></i>
                <h5 class="title is-5">Design</h5>
                <p>Ik hecht veel waarde aan de inhoudstructuur, het uiterlijk, de interactie en de gebruiksvriendelijkheid van applicaties.</p>
                <p>
                  <strong>Design interesses:</strong>
                </p>
                <p>Websites, Mobile Apps, Logo's UX, UI</p>
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
        <div class="container">
          <h3 class="title is-3">Mijn projecten</h3>
          <h5 class="subtitle">en ...</h5>
          <div class="projectFilter">
            <p>Filter op programmeertaal:</p>
            <span class="tag is-rounded is-warning shadowhover is-medium" v-on:click="filterLanguage('Swift')">Swift <i class="fa fa-check-circle checkedIcon" v-if="chosenLanguage=='Swift'"></i></span>
            <span class="tag is-rounded is-primary shadowhover is-medium"  v-on:click="filterLanguage('Vue')">Vue <i class="fa fa-check-circle checkedIcon" v-if="chosenLanguage=='Vue'"></i></span>
            <span class="tag is-rounded is-danger shadowhover is-medium"  v-on:click="filterLanguage('Angular')">Angular <i class="fa fa-check-circle checkedIcon" v-if="chosenLanguage=='Angular'"></i></span>
            <span class="tag is-rounded is-link shadowhover is-medium"  v-on:click="filterLanguage('C# .NET')">C# .NET <i class="fa fa-check-circle checkedIcon" v-if="chosenLanguage=='C# .NET'"></i></span>
            <span class="tag is-rounded is-info shadowhover is-medium"  v-on:click="filterLanguage('HTML, CSS, JS')">HTML, CSS, JS <i class="fa fa-check-circle checkedIcon" v-if="chosenLanguage=='HTML, CSS, JS'"></i> </span>
            <span class="tag is-rounded is-success shadowhover is-medium"  v-on:click="filterLanguage('Android (Kotlin)')">Android (Kotlin) <i class="fa fa-check-circle checkedIcon" v-if="chosenLanguage=='Android (Kotlin)'"></i></span>
            <span class="tag is-rounded is-white shadowhover is-medium" v-on:click="filterLanguage('All')">Allemaal <i class="fa fa-check-circle checkedIcon" v-if="chosenLanguage=='All'"></i></span>
          </div>
          <div id="projects">
            <div class="projectList">
              <div id="centeredProjectList">
                <transition-group name="list" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
                <div
                  class="columns margin0 is-mobile"
                  v-for="(data) in filteredProjects"
                  :key="data.projectname">
                  <div class="column projectrow text-right">
                    <span class="tag is-rounded" v-bind:class="data.tagclass">{{data.tag}}</span>
                  </div>
                  <div class="column projectrow text-left projectrowname">
                    <a v-on:click="chooseProject(data.projectname)">{{data.projectname}}</a>
                  </div>
                </div>
                </transition-group>
              </div>
            </div>
            <transition name="fly-in" mode="out-in">
              <div class="centered" :key="project.projectname">
                <div class="columns is-desktop">
                  <div class="column">
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
                  <div class="column text-left">
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
      <div id="contactWindow" class="window shadow has-text-centered">
        <h4 class="title is-4">
          Hebt u enige
          <strong>vragen</strong>?
        </h4>
      </div>
      <div class="contactcontent">
        <h5 class="subtitle is-4 has-text-centered white">Vind mij op</h5>
        <div id="socialmedia">
          <a class="mediaIcon" target="_blank" href="https://www.facebook.com/heyndrickx.karel">
            <i class="fa fa-facebook-f"></i>
          </a>
          <a class="mediaIcon" target="_blank" href="https://www.linkedin.com/in/karel-heyndrickx/">
            <i class="fa fa-linkedin"></i>
          </a>
          <a class="mediaIcon" target="_blank" href="https://github.com/KarelHeyndrickx">
            <i class="fa fa-github"></i>
          </a>
        </div>
        <h5
          class="subtitle is-4 has-text-centered white margin-top-20"
        >Of stuur mij direct een mailtje!</h5>
      </div>
      <form @submit.prevent="sendMail" class="contactform">
        <div class="columns">
          <div class="column field">
            <label class="label">Naam</label>
            <div class="control">
              <input
                name="name"
                v-model="emailForm.name"
                v-validate="'required|min:2'"
                :class="{'input': true, 'is-danger': errors.has('name') }"
                type="text"
                data-vv-delay="1000"
              >
              <transition name="alert-in">
                <div class="alert" v-if="errors.has('name')">
                  <i class="fa fa-exclamation-triangle"></i> Gelieve een naam in te vullen!
                </div>
              </transition>
            </div>
          </div>
          <div class="column field">
            <label class="label">E-mailadres</label>
            <div class="control">
              <input
                name="email"
                v-model="emailForm.email"
                v-validate="'required|email|'"
                :class="{'input': true, 'is-danger': errors.has('email') }"
                type="text"
                data-vv-delay="1000"
              >
              <transition name="alert-in">
                <div class="alert" v-if="errors.has('email')">
                  <i class="fa fa-exclamation-triangle"></i> Gelieve een geldig e-mailadres in te geven.
                </div>
              </transition>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Bericht</label>
          <div class="control">
            <textarea
              class="textarea"
              name="message"
              v-model="emailForm.message"
              v-validate="'required|min:5'"
              :class="{'input': true, 'is-danger': errors.has('message') }"
              data-vv-delay="1000"
            ></textarea>
            <transition name="alert-in">
              <div class="alert" v-if="errors.has('message')">
                <i class="fa fa-exclamation-triangle"></i>
                Gelieve een bericht langer als 5 karakters in te geven.
              </div>
            </transition>
          </div>
        </div>
        <div class="field">
          <div class="control text-right">
            <input class="button contactButton" type="submit" value="Versturen">
          </div>
        </div>
      </form>
      <transition name="alert-in">
        <div v-if="isSending">
          <div id="box"></div>
          <div id="loadershadow"></div>
          <h5
            class="subtitle is-4 has-text-centered white margin-top-20"
          >De mail wordt verstuurd ...</h5>
        </div>
      </transition>
      <transition name="alert-in">
        <div v-if="sentAlert">
           <h5
            class="subtitle is-4 has-text-centered white margin-top-20"
          >{{this.sendSucceeded}}</h5>
        </div>
      </transition>
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

export default {
  name: "HomePage",
  data() {
    return {
      projects: [
        {
          projectname: "Breakout",
          tag: "C# .NET",
          description:
            "Breakout is een quiz ontworpen voor scholen die op een speelse manier leerlingen willen kennis laten opdoen. Deze webapplicatie is het tweede deel van een voltallig geheel en bevat enkel het spelen van de quiz voor de deelnemende teams en het beheren van de teams (als leerkracht). ",
          youtubeLink: "https://www.youtube.com/watch?v=CEzhR40caMI",
          youtubeLinkShort: "Bekijk de werking & design",
          tagclass: "is-link"
        },
        {
          projectname: "RijQuiz",
          description:
            "De RijQuiz app is een app waar er een quiz word gepresenteerd over de wegcode in België. Het gebruikt vragen die afgehaald worden van een live server. Aangezien de wetgeving in België heel soms verandert, kunnen deze vragen dus soms geüpdatet worden en is het daarvoor nodig dat de app zijn vragenlijst update. De documentatie over deze live server kan gevonden worden in de github repository RijQuizBackend. Te vinden via de onderstaande link",
          tag: "Swift",
          githubLink: "https://github.com/KarelHeyndrickx/SwiftApplication",
          githubLinkShort: "Github",
          tagclass: "is-warning"
        },
        {
          projectname: "RijQuiz Questions Manager",
          description:
            "De Rijquiz Questions Manager is een webapplicatie die nauw samenwerkt met de RijQuiz app. Deze webapplicatie dient om de vragen die gevraagd kunnen worden tijdens de quiz aan te maken en te verwijderen. Ik heb dit projectje gemaakt als crash course met Vue.",
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
            "Deze beurs webapplicatie werd gemaakt als schoolproject. Hierbij konden er exposanten toegevoegd worden aan een databank alsook hun positie waar ze zouden staan op een plattegrond. En quizvragen waarvan vervolgens scholen die de beurs kwamen bezoeken deze konden beantwoorden via een app. Deze app is zichtbaar in het project 'Beurs app'",
          tagclass: "is-danger"
        },
        {
          projectname: "Workmanager",
          tag: "Angular",
          description:
            "Workmanager is een project gemaakt in Angular. In deze applicatie was er een relatie tussen werkgevers en werknemers waarbij werkgevers jobs oftwel evenementen konden publiceren. Vervolgens konden de werknemers zich hiervoor inschrijven",
          onlineLink: "http://workmanager-frontend.herokuapp.com/",
          onlineLinkShort: "Website",
          tagclass: "is-danger"
        },
        {
          projectname: "Beurs App",
          tag: "Android (Kotlin)",
          description:
            "Deze beurs app werd gemaakt als schoolproject. Hierbij konden leerlingen van scholen een quiz spelen met vragen over de exposanten van de beurs. Vervolgens konden de verantwoordelijke leerkrachten hun antwoorden zien op de webapplcatie. Die webapplicatie is zichtbaar in het project 'Beurs webapplicatie' ",
          tagclass: "is-success"
        },
        {
          projectname: "Oude portfolio",
          tag: "HTML, CSS, JS",
          description:
            "De portfolio die u nu aan het lezen bent is reeds mijn 2de portfolio. Aangezien ik in mijn eerste portfolio geen consistente design-regels had maar eerder hier en daar mijn creatieve vaardigheden wou uiten, was het dus tijd voor een nieuwe. ",
          onlineLink: "https://users.hogent.be/karelheyndrickx/eportfolio/",
          onlineLinkShort: "Website",
          tagclass: "is-info"
        },
        {
          projectname: "Legendary (chocoladelounge)",
          tag: "HTML, CSS, JS",
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
      emailForm: {
        name: "",
        email: "",
        message: ""
      },
      isSending: false,
      sentAlert: false,
      sendSucceeded: "",
      chosenLanguage : "All"
    };
  },
  components: {
    VueDisplacementSlideshow
  },
  methods: {
    chooseProject(name) {
      this.project = this.projects.find(project => {
        return project.projectname == name;
      })       
    },
    init() {
      //We loop through all our images by calling the 'next' method of our component every 2 seconds
      setInterval(() => {
        this.$refs.slideshow.next();
      }, 4000);
    },
    filterLanguage(language){
      this.chosenLanguage = language;
      this.chooseProject(this.filteredProjects[0].projectname);
    },
    
    sendMail: function(event) {

      this.sentAlert = false;

      this.$validator.validateAll().then(result => {
        if (result) {
          //Send mail
          emailjs.init("user_W4OrHFWZ05Pt051SLu1xh");
          var template_params = {
            from_name: this.emailForm.name,
            from_email: this.emailForm.email,
            message_html: this.emailForm.message
          };

          this.emailForm = {
            name: "",
            email: "",
            message: ""
          };

          //After resetting the form the validators get reset as well so no inputs show an error message from the start.
          this.$validator.reset();

          this.isSending = true;

          var service_id = "default_service";
          var template_id = "template_SRjA5niS";

          emailjs.send(service_id, template_id, template_params).then(
            response => {
              this.isSending = false;
              this.sendSucceeded = "Email werd goed verzonden";
              this.sentAlert = true
            },
            error => {
              this.isSending = false;
              this.sendSucceeded = "Er is een fout opgetreden bij het verzenden van de mail.";
              this.sentAlert = true
            }
          );
        } else {
          //Don't send mail
        }
      });
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
    },
    filteredProjects(){
      if (this.chosenLanguage == "All"){
        return this.projects
      } else {
          return this.projects.filter(project => {
              return project.tag == this.chosenLanguage
        })
      }
       
    }
  },
  mounted() {
    this.init();
    this.$nextTick(function() {
      let emailJSscript = document.createElement("script");
      emailJSscript.setAttribute(
        "src",
        "https://cdn.emailjs.com/sdk/2.3.2/email.min.js"
      );
      document.head.appendChild(emailJSscript);
    });
  }
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
  background-color: white !important;
  border-color: white !important;
  color: #4ca179 !important;
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

input.input,
textarea {
  background-color: transparent !important;
  border-color: white !important;
  border-radius: 5px !important;
  color: white !important;
  font-size: 1.1em !important;
  font-weight: 100;
}
.contactcontent {
  width: 50%;
  margin: 0 auto;
  min-width: 300px;
}
.contactform {
  width: 50%;
  margin: 0 auto;
  min-width: 300px;
  margin-top: 20px;
}

.contact {
  text-align: center;
}
.contactform label {
  color: white;
  font-weight: 100;
}
#contactWindow h4 {
  font-size: 1.8em;
  font-weight: 100;
  margin: 20px;
}

#contactWindow {
  position: relative;
  max-width: 450px;
  width: 80%;
  margin: -60px auto 40px;
}
.contactButton {
  color: white !important ;
  border: 1px solid white !important;
  background-color: transparent !important;
  transition: 0.4s;
  border-radius: 20px !important;
  cursor: pointer;
  padding: 20px !important;
  line-height: 0px !important;
}
.contactButton:hover {
  background-color: white !important;
  border-color: white !important;
  color: #4ca179 !important;
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

.cloud {
  max-width: 200px;
  height: 100px;
  background-color: white;
  border-radius: 40px;
  position: relative;
  margin-bottom: 100px;
  margin: 0 auto 100px auto;
}
.cloud::before {
  content: "";
  background-repeat: repeat-x;
  position: absolute;
  top: -50px;
  left: 0;
  background-image: url("../assets/images/elements/cloud_top.png");
  background-size: contain;
  height: 100%;
  width: 100%;
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
}
.projectList {
  position: relative;
}
.projectList a {
  font-weight: bold;
}
#centeredProjectList {
  width: 50%;
  margin: 0px 0px 50px -15%;
  margin-left: 15%;
}
.projectSliderBox {
  padding: 30px;
  background-color: #e8e7e7;
  border-radius: 5px;
  margin-bottom: 40px;
}
.projectSliderBox .projectSlider {
  margin-bottom: -50px !important;
  border-radius: 5px;
  background: url("../assets/images/projects/loadingImage.png");
  background-size: cover;
  background-position: center;
  height: 400px;
}
.projectrowname {
  border-bottom: 1px solid gainsboro;
}
@media only screen and (max-width: 700px) {
  #centeredProjectList {
    width: 100%;
    margin-left: -5%;
  }
}
.white {
  color: white !important;
}
#socialmedia {
  text-align: center;
}
.mediaIcon {
  display: inline-block;
  width: 60px;
  height: 60px;
  background: transparent;
  margin: 10px;
  border-radius: 30%;
  color: white;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  border: 1px solid white;
}
.mediaIcon i {
  line-height: 60px;
  font-size: 26px;
  transition: 0.2s linear;
  width: 100%;
  text-align: center;
}
.mediaIcon:hover i {
  transform: scale(1.3);
  color: #4ca179;
}
.mediaIcon::before {
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  background: white;
  transform: rotate(45deg);
  right: -110%;
  bottom: 90%;
  border-radius: 50%;
}
.mediaIcon:hover::before {
  animation: aaa 0.7s 1;
  bottom: -10%;
  right: -10%;
}
@keyframes aaa {
  0% {
    right: -110%;
    bottom: 90%;
  }
  50% {
    right: 10%;
    bottom: -30%;
  }
  100% {
    bottom: -10%;
    right: -10%;
  }
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
.alert {
  display: inline-block;
  background-color: indianred;
  color: white;
  border-radius: 50px;
  margin-top: 20px;
  padding: 7px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 0.9em;
  position: relative;
}
.alert::before {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 14px 10px;
  border-color: transparent transparent indianred transparent;
  position: absolute;
  top: -10px;
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

@keyframes loader {
  0% {
    left: -100px;
  }
  100% {
    left: 110%;
  }
}
#box {
  width: 50px;
  height: 50px;
  background: #fff;
  animation: jellyAnimation 0.5s linear infinite;
  border-radius: 3px;
  margin: 0 auto;
}
@keyframes jellyAnimation {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
#loadershadow {
  width: 50px;
  height: 5px;
  background: #000;
  opacity: 0.1;
  border-radius: 50%;
  animation: shadow 0.5s linear infinite;
  margin: 0 auto;
  margin-top: 12px;
}
@keyframes shadow {
  50% {
    transform: scale(1.2, 1);
  }
}
.profilePic{
  max-width: 150px;
  border-radius: 50%;
  border: 2px solid white;
}
.projectFilter {
  margin: 40px 0px;
}
.projectFilter{
  margin: 10px !important;
}
.checkedIcon{
  margin-left:5px;
}
</style>
