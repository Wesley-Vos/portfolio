<template>
  <div id="footer">
    <small>&copy; 2021 - {{ currentYear() }} &ensp; <b>|</b> &ensp; Wesley Vos</small>

  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  methods: {
    currentYear: function (){
      var today = new Date();
      return today.getFullYear();
    }
  }
}
</script>
<style scoped>
#footer {
  margin: 5vh 0 5vh;
  color: white;
}
</style>


