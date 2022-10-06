<template>
  <div class="project">
    <div class="projectHeader">
      <h1>{{ project.title }}</h1>
      <a v-if="project.githubLogo != null"  style="width:10%;" :href="project.githubLogo"><img class="githubLogo"  alt="Github page" :src="require('@/assets/logos/github.png')"/></a>
    </div>
    <p class="text-dark text-start">{{ project.summary }}</p>
    <div class="projectBody row">
      <div class="col-9 description">
        <p v-for="description in project.description" :key="description" class="text-muted">{{ description }}</p>
        <p class="projectEvaluation">Competenties || <span class="text-muted">{{ project.competences }}</span></p>
      </div>
      <div class="col-3">
        <TechBadge v-for="tech in project.techStack" :key="tech" :tech="tech"/>
      </div>
      <img v-if="project.imagePath != null" style="border-radius: 40px; width:95%; margin-top:2em" :src="require('@/assets/' + project.imagePath)"/>
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
  padding-left: 2em;
  padding-right: 2em;
}

.description {
  text-align: left;
}

h1 {
  font-weight: 300 !important;
  font-size: clamp(20px, 2.8vw, 44px);
}

.projectBody {
  padding-bottom: 2em;
  justify-content: center;
  padding-top: 1em;
}

.projectHeader {
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: space-between;
  align-items: center;
  padding-top: 2em;
}

.githubLogo {
  width: 100%;
  cursor: pointer;
}

.projectEvaluation {
  text-align: left;
}

</style>
