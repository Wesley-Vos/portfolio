<template>
  <div id="project">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
  name: 'ProjectComponent',
  props: {
    title: String,
    description: String,

  }
}
</script>

<style scoped>
#project {
  background-color: white;
  border-radius: 40px;
  color: black;
  height: 100%
}
p {
  padding: 2vw;
  text-align: left;
}

h1 {
  padding: 2vw 2vw 0;
  font-weight: 600 !important;

}
</style>
