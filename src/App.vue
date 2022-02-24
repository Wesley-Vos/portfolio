<template>
  <HomeView></HomeView>
  <!--Divider/>-->
  <AboutView></AboutView>
  <Divider/>
  <ProjectsView></ProjectsView>
</template>

<style>

</style>
<script>
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import ProjectsView from "@/views/ProjectsView";
import Divider from "@/views/Divider";
export default {
  components: {AboutView, HomeView, ProjectsView, Divider}
}
</script>