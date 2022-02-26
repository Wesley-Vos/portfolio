<template>
  <HomeView></HomeView>
  <!--Divider/>-->
  <AboutView></AboutView>
  <Divider/>
  <ProjectsView></ProjectsView>
  <Footer/>
</template>

<style>

</style>
<script>
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import ProjectsView from "@/views/ProjectsView";
import Divider from "@/components/Divider";
import Footer from '@/components/Footer';
export default {
  components: {AboutView, HomeView, ProjectsView, Divider, Footer}
}
</script>