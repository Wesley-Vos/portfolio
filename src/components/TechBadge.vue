<template>
  <div class="techBadge">
    <img alt="logo" style="height:3em" :src="require('@/assets/logos/' + tech.path)"> {{ tech.name }}
  </div>
</template>

<script>
export default {
  name: 'TechBadge',
  props: {
    tech: Object
  }
}
</script>

<style scoped>
.techBadge {
  text-align: left;
  margin-bottom: 1vw;
  color: white;
  padding: 1em;
  width: 100%;
  background-color: #0d3249;
  z-index: 2;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

}

</style>
