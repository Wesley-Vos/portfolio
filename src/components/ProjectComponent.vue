<template>
  <div class="project">
    <h1>{{ project.title }}</h1>
    <div class="projectBody row">
      <div class="col-8 description">
        <p>{{ project.description }}</p>
      </div>
      <div class="col-4">
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


</style>
