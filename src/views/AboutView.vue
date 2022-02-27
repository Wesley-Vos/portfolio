<template>
  <div id="about" class="view">
    <div style="width:100vw">
      <h1 class="viewHeader">About me.</h1><br>
      <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <h3>Wie ben ik!</h3>
          <p>Ik ben Wesley Vos, {{ age() }} jaar oud en laatste jaars student computing science aan de Rijksunversiteit in Groningen.
          Daarnaast heb ik reeds mijn bachelor in natuurkunde behaald. Gedurende mijn studie natuurkunde leerde ik alle wetten kennen die
          deze wereld bij elkaar houden maar merkte ik dat ik het miste om een product te kunnen maken, zien wat er gebeurd. Voeg dat samen met
          mijn passie voor software ontwikkeling en de tweede studie computing science was geboren.</p>
          <p>Naast mijn studie ben ik nog werkzaam bij als ondersteunend coördinator bij het ontwikkelings team voor onderwijs applicaties
          bij de Rijksuniversiteit van Groningen. In mijn vrije tijd houd ik van reizen, duiken en heb ik een passie voor programmeren en
            alles wat daarbij komt kijken, zoals het automatiseren van mijn woning.</p>
        </div>
        <div class="col-lg-2" style="display: flex; justify-content: center">
          <div class="verticalLine"/>
        </div>
        <div class="col-lg-5">
          <h3>Wat doe ik!</h3>
          <p>Tijdens en naast het studeren doe ik veel aan software ontwikkeling en programmeren, verschillend van een kort scriptje om die ene
          saaie taak sneller uit te voeren tot het maken van grotere applicaties welke verderop in detail zijn te vinden. Voor het schrijven van scriptjes
            gebruik ik <span class="codeLang">Python</span> waar ik inmiddels de nodige trucjes en good practices van ken.
          </p>
          <p>Voor grotere projecten wijk ik vaak uit naar <span class="codeLang">Java</span> vanwege de robuustheid.</p>
          

          <p>Naast de genoemde programmeertalen kan ik ook goed uit de voeten met een terminal en een IDE (zoals die van Jetbrains).</p>
        </div>
      </div>
      </div>
    </div>
    <!--<div class="badge-base LI-profile-badge" data-locale="nl_NL" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="wesley-vos-09aba16a" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://nl.linkedin.com/in/wesley-vos-09aba16a?trk=profile-badge"></a></div>-->
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  components: {

  },
  methods: {
    age: function (){
      var ageInMilliseconds = new Date() - new Date(1999, 3, 12, 0, 0, 0);
      return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
    }
  }
}
</script>
<style scoped>
#about {
  flex-direction: column;
  background-color: #0d3249;
}
.codeLang {
  background-color: #072436;
  padding-left: 1em;
  padding-right: 1em;
}
h3 {
  padding-bottom: 0.5em;
}
.verticalLine {
  border-left: 1px solid white;
}

</style>
