<template>
  <div id="about" class="view">
    <div style="width:100vw">
      <h1 class="viewHeader">About me.</h1><br>
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h3>Wie ben ik.</h3><br>
            <p>Ik ben Wesley Vos, {{ age() }} jaar oud en afgestudeerd in computing science en natuurkunde aan de Rijksunversiteit van Groningen.
              Gedurende mijn studie natuurkunde leerde ik alle wetten kennen die deze wereld bij een houdt maar merkte ik dat ik het miste om een
              product te kunnen maken, om te zien wat er gebeurt. Voeg dat samen met mijn passie voor software ontwikkeling en de tweede studie
              computing science was een feit.</p><br>
            <p>In mijn vrije tijd houd ik van reizen, duiken en heb ik een passie voor programmeren en
              alles wat daarbij komt kijken, zoals het automatiseren van mijn huis.</p>

            <br>

            <h4>Experience.</h4>
            <ExperienceComponent v-for="experience in experiences" :key="experience.title" :experience="experience"/>


          </div>
          <div class="col-lg-2" style="display: flex; justify-content: center">
            <div class="verticalLine"/>
          </div>
          <div class="col-lg-5">
            <h3>Wat doe ik.</h3><br>
            <p>Ik ben een gepassioneerd full-stack software ontwikkelaar die moment werkzaam is als software engineer in het UI/UX domein bij XPAR Vision.
            Binnen deze functie ontwerp ik user interfaces voor hot-end sensoren in de glasindustrie.</p>
            <p>Naast mijn werk doe ik veel aan software ontwikkeling en programmeren, verschillend van een kort scriptje om die ene
            saaie taak sneller uit te voeren tot het maken van grotere applicaties welke verderop in detail zijn te vinden of het automatiseren van mijn huis. Door de jaren heen heb ik diverse
              talen leren kennen, waaronder</p>

            <div class="row">
              <div class="col-sm-6">
                <ProgrammingBadge :logo="logo.python" langStyle="OOP" level="Expert"/>
              </div>
              <div class="col-sm-6">
                <ProgrammingBadge :logo="logo.java" langStyle="OOP" level="Basics"/>
              </div>
              <div class="col-sm-6">
                <ProgrammingBadge :logo="logo.Vue" langStyle="Frontend" level="Basics"/>
              </div>
              <div class="col-sm-6">
                <ProgrammingBadge :logo="logo.HTMLCSSJS" langStyle="Frontend" level="Advanced"/>
              </div>
              <div class="col-sm-6">
                <ProgrammingBadge :logo="logo.qml" langStyle="Frontend" level="Advanced"/>
              </div>
              <div class="col-sm-6">
                <ProgrammingBadge :logo="logo.c" langStyle="Imperatief" level="Basics"/>
              </div>
              <div class="col-sm-6">
                <ProgrammingBadge :logo="logo.haskell" langStyle="Functioneel" level="Basics"/>
              </div>
            </div><br>

            <p>Naast het ontwerpen en programmeren van applicaties heb ik ook ruime ervaring met database systemen en tools voor het deployen en onderhouden van de applicaties zoals</p>
            <div class="row">
              <div class="col-sm-6">
                <ProgrammingBadge :logo="logo.docker" langStyle="Deployments"/>
              </div>
              <div class="col-sm-6">
                <ProgrammingBadge :logo="logo.mariadb" langStyle="Database"/>
              </div>
              <div class="col-sm-6">
                <ProgrammingBadge :logo="logo.jenkins" langStyle="CI/CD Automation server"/>
              </div>
              <div class="col-sm-6">
                <ProgrammingBadge :logo="logo.linux" langStyle="Deployment on Linux"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgrammingBadge from "@/components/ProgrammingBadge";
import LogoData from "@/assets/logoData";
import ExperienceData from "@/assets/experienceData";
import ExperienceComponent from "@/components/ExperienceComponent";

export default {
  name: 'AboutView',
  components: {
    ExperienceComponent,
    ProgrammingBadge
  },
  methods: {
    age: function (){
      let age = new Date() - new Date(1999, 3, 12, 0, 0, 0);
      return Math.floor(age/1000/60/60/24/365); // convert to years
    }
  },
  data() {
    return {
      logo: LogoData,
      experiences: ExperienceData
    }
  }
}
</script>
<style scoped>
#about {
  flex-direction: column;
  background-color: #0d3249;
}
h3 {
  padding-bottom: 0.5em;
}
.verticalLine {
  border-left: 1px solid white;
}

</style>
