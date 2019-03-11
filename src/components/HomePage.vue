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

        <div data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-duration="700" class="container has-text-centered">
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
      <ProjectSlider />
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
import ContactForm from './ContactForm';
import ProjectSlider from './ProjectSlider'

export default {
  name: "HomePage",
  components: {
    ContactForm, ProjectSlider
  },  
}
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
strong {
  color: #4bc58f !important;
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
