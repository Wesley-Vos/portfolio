<template>
  <div id="home" class="view">
    <a href="https://www.linkedin.com/in/wesley-vos"><img id="linkedInBadge" alt="LinkedIn page" src="@/assets/linkedinWhite.png"/></a>
    <a href="https://github.com/wesley-vos"><img id="githubLogoMain" alt="Github page" src="@/assets/logos/githubWhite.png"/></a>
    <HomeMe/>
  </div>
</template>

<script>
import HomeMe from '@/components/HomeMe.vue'

export default {
  name: 'HomeView',
  components: {
    HomeMe
  }
}
</script>
<style scoped>
#linkedInBadge {
  width: 50px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 2em;
}
#githubLogoMain {
  width: 50px;
  position: absolute;
  top: 0;
  right: 4em;
  margin: 2em;
}
#home {
  background-color: #042336;
  height: 100vh;
}

</style>
