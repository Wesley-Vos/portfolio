<template>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <div class="verticalLine" style="height:3em; border-color: white"></div>
    <div class="circle"/>
    <div class="experienceComponent" style="margin-bottom:1rem">
      <div class="row gx-5" style="padding-top: 1em">
        <div class="col-3" id="dateSection">
          <h6>{{experience.end}}</h6><br><br>
          <h6>{{experience.start}}</h6>
        </div>
        <div class="col-8 verticalLine">
          <h5 style="margin-bottom:0">{{ experience.name }}</h5>
          <p style="margin-bottom:0.5em">{{ experience.team}}</p>
          <p class="text-muted"><i>{{ experience.function }}</i></p>
          <p style="margin-bottom:0" v-for="line in experience.description" :key="line">{{ line }}</p>
        </div>
      </div>
      <br>
      <div class="competencesContainer">
        <TextLabel v-for="label in experience.competences" :key="label" :text="label"/>
      </div>
    </div>
  </div>
</template>

<script>
import TextLabel from "@/components/TextLabel";

export default {
  name: "ExperienceComponent",
  components: {
    TextLabel
  },
  props: {
    experience: Object
  }
}
</script>

<style scoped>
.experienceComponent {
  /*margin-bottom: 1vw;*/
  color: white;
  padding: 1em;
  width: 100%;
  background-color: #042336;
  border-radius: 40px;
}

.experienceComponent #dateSection {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.experienceComponent #dateSection p {
  margin-bottom: 0;
}

.verticalLine {
  border-left: 1px solid #6c757d;
}

.circle {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: white;
  margin-bottom: -1em;
  z-index: 2;
}

.competencesContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>