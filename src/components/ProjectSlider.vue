<template>
  <div>
    <div class="hero-body">
      <div class="projectcontainer">
        <h3 class="title is-3">Mijn projecten</h3>
        <h5 class="subtitle">en ontwerpen</h5>
        <div id="projects">
          <div class="projectList">
            <div id="centeredProjectList">
              <div class="projectrow" v-for="(data) in projects" :key="data.projectname">
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
  </div>
</template>

<script>
//Import the image slider
import VueDisplacementSlideshow from "vue-displacement-slideshow";

export default {
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
      }
    };
  },
  components: {
    VueDisplacementSlideshow
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
  }
};
</script>

<style>
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
</style>
