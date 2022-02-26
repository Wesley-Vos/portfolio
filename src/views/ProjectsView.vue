<template>
  <div id="projects" class="view">
    <div id="projectMain">
      <h2>Projects.</h2><br>
        <div class="row gy-4 gx-4 projectGrid">
          <div class="col-md-6" v-for="project in projects" :key="project">
            <ProjectComponent :project="project"/>
          </div>
          <div class="col-md-6" v-for="project in projects" :key="project">
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