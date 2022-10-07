<template>
  <div class="techBadge">
    <div class="container">
      <img class="image" style="height:3em" :alt="tech.name" :src="require('@/assets/logos/' + tech.path)">
      <div class="overlay">
        <div class="text">{{ tech.name }}</div>
      </div>
    </div>
    <!--{{ tech.name }}-->
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
  margin-bottom: 1em;
  color: white;
  padding: 1em;
  width: 100%;
  background-color: #04548a;
  z-index: 2;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
}

.image {
  display: block;

}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #04548a;
}

.container:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

</style>
