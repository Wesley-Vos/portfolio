<template>
  <div id="projects" class="view">
    <div id="projectMain">
      <h1 class="viewHeader">Projecten.</h1>
      <br>
      <div class="row gy-5 gx-5 projectGrid">
          <div class="col-lg-6" v-for="project in projects" :key="project">
            <ProjectComponent :project="project"/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import ProjectComponent from '@/components/ProjectComponent.vue'
import ProjectData from '@/assets/projectData.js'

export default {
  name: 'ProjectsView',
  components: {
    ProjectComponent
  },
  data() {
    return {
      projects: ProjectData
    }
  }
}
</script>

<style scoped>
#projectMain {
  width: 90vw;
}
</style>