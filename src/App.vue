<template>
  <HomeView></HomeView>
  <!--Divider/>-->
  <AboutView></AboutView>
  <!--<Divider/>-->
  <ProjectsView></ProjectsView>
  <Footer/>
</template>

<style>

#app {
  display: block;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
}

.view {
  padding: 5vh 0 5vh;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import ProjectsView from "@/views/ProjectsView";

import Footer from '@/components/Footer';
export default {
  components: {AboutView, HomeView, ProjectsView, Footer}
}
</script>
