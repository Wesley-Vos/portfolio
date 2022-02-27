<template>
  <div class="project">
    <div class="projectHeader">
      <h1>{{ project.title }}</h1>
      <a v-if="project.githubLogo != null"  style="width:10%;" :href="project.githubLogo"><img class="githubLogo"  alt="Github page" :src="require('@/assets/logos/github.png')"/></a>
    </div>
    <div class="projectBody row">
      <div class="col-9 description">
        <p class="text-dark">{{ project.summary }}</p>
        <!--<p>Beschrijving</p>-->
        <p v-for="description in project.description" :key="description" class="text-muted">{{ description }}</p>
        <p class="projectEvaluation">Competenties || <span class="text-muted">{{ project.competences }}</span></p>
        <img style="width:90%; padding-top:2em" :src="require('@/assets/' + project.imagePath)"/>
      </div>
      <div class="col-3">
        <TechBadge v-for="tech in project.techStack" :key="tech" :tech="tech"/>
      </div>
    </div>
  </div>
</template>

<script>
import TechBadge from "@/components/TechBadge";

export default {
  name: 'ProjectComponent',
  components: {
    TechBadge
  },
  props: {
    project: Object
  }
}
</script>

<style scoped>
.project {
  position: relative;
  background-color: white;
  border-radius: 40px;
  color: black;
  height: 100%;
  padding-left: 2vw;
  padding-right: 2vw;
}

.description {
  text-align: left;
}

h1 {
  padding-top: 2vw;
  font-weight: 300 !important;
  font-size: clamp(20px, 2.8vw, 44px);
}

.projectBody {
  padding-top: 2vw;
  padding-bottom: 2vw;
}

.projectHeader {
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: space-between;
  align-items: center;
}

.githubLogo {
  width: 100%;
  cursor: pointer;
}

.projectEvaluation {
  text-align: left;
}

</style>
