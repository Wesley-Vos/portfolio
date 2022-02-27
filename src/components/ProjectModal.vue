<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content projectModal">
        <div class="modal-header">
          <h5 class="modal-title">{{ project.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>{{ project.description }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <!--
  <div class="modal projectModal">
    <div class="header">
      <h1>{{ project.title }}</h1>
      <a v-if="project.githubLogo != null"  style="width:10%;" :href="project.githubLogo"><img class="githubLogo"  alt="Github page" :src="require('@/assets/logos/github.png')"/></a>
    </div>
    <div class="body row">
      <div class="col-10 description">
        <p>Beschrijving | <span class="text-muted">{{ project.description }}</span></p>
        <p class="projectEvaluation">Competenties | <span class="text-muted">{{ project.competences }}</span></p>
        <img style="width:90%; padding-top:2em" :src="require('@/assets/' + project.imagePath)"/>
      </div>
      <div class="col-2">
        <TechBadge v-for="tech in project.techStack" :key="tech" :tech="tech"/>
      </div>
    </div>
    <div class="footer">
      <button class="btn">test</button>
    </div>
  </div>-->
</template>

<script>

export default {
  name: 'ProjectModal',
  components: {
  },
  props: {
    project: Object
  }
}
</script>

<style scoped>
.projectModal {
  border-radius: 40px;
  color: black;
  height: 100%;
}

.description {
  text-align: left;
}

h1 {
  padding-top: 2vw;
  font-weight: 300 !important;
  font-size: clamp(20px, 2.8vw, 44px);
}

.body {
  padding-top: 2vw;
  padding-bottom: 2vw;
}

.header {
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

.footer {

}

</style>
