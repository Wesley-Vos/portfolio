<template>
  <div id="home" class="view">
    <a href="https://www.linkedin.com/in/wesley-vos-09aba16a/"><img id="linkedInBadge" alt="LinkedIn page" src="../assets/linkedin.png"></a>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
#linkedInBadge {
  width: 3%;
  position: absolute;
  top: 0;
  right: 0;
  margin: 2em;
}
</style>
