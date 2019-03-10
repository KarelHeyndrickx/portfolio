<template>
  <div>
    <div id="contactWindow" class="window shadow has-text-centered" data-aos="fade-up">
      <h4 class="title is-4">
        Hebt u
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
                <i class="fa fa-exclamation-triangle"></i> Gelieve een naam in te vullen.
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
              Gelieve een bericht langer dan 5 karakters in te geven.
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
        <h5 class="subtitle is-4 has-text-centered white margin-top-20">De mail wordt verstuurd ...</h5>
      </div>
    </transition>
    <transition name="alert-in">
      <div v-if="sentAlert">
        <h5 class="subtitle is-4 has-text-centered white margin-top-20">{{this.sendSucceeded}}</h5>
      </div>
    </transition>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailForm: {
        name: "",
        email: "",
        message: ""
      },
      isSending: false,
      sentAlert: false,
      sendSucceeded: ""
    };
  },
  methods: {
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
              this.sendSucceeded = "De e-mail werd goed verzonden";
              this.sentAlert = true;
            },
            error => {
              this.isSending = false;
              this.sendSucceeded =
                "Er is een fout opgetreden bij het verzenden van de mail.";
              this.sentAlert = true;
            }
          );
        } else {
          //Don't send mail
        }
      });
    }
  },
  mounted() {
      this.$nextTick(function() {

      let emailJSscript = document.createElement("script");
      emailJSscript.setAttribute("src","https://cdn.emailjs.com/sdk/2.3.2/email.min.js");
      document.head.appendChild(emailJSscript);      
    });
  }
};
</script>

<style>

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
    animation: attention 4s ease infinite;

}
@keyframes attention {
  9% {
    transform: none;
  }
  12% {
    transform: scale(1.05);
  }
  16% {
    transform: scale(0.95);
  }
  20% {
    transform: scale(1.03);
  }
  24% {
    transform: scale(1);
  }
}
.contactButton:hover {
  background-color: white !important;
  border-color: white !important;
  color: #4ca179 !important;
}

textarea:focus,
input:focus {
  outline: none !important;
  outline-color: white !important;
  border: 1px solid white !important;
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
</style>
