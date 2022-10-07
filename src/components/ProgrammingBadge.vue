<template>
  <div class="programmingBadge">
    <div class="flexbox" style="border-bottom: 1px solid white; padding-bottom:1em;">
      <img style="height:3em" :alt="logo.name" :src="require('@/assets/logos/' + logo.path)">
      <p>{{ logo.name }}</p>
    </div>
    <div class="flexbox" style="flex-direction: row; margin-top:1em">
      <p class="text-muted" v-if="level">{{ level }}</p>
      <p v-if="langStyle"> {{ langStyle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgrammingBadge',
  props: {
    logo: Object,
    level: String,
    langStyle: String
  }
}
</script>

<style scoped>

.programmingBadge p {
  margin-bottom: 0;
}

.programmingBadge {
  text-align: left;
  margin-bottom: 1em;
  color: white;
  padding: 1em;
  width: 100%;
  background-color: #042336;
  z-index: 2;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.flexbox {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
}

.overlayImage {
  display: block;

}

.overlayTextDiv {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #042336;
}

.overlayContainer:hover .overlayTextDiv {
  opacity: 1;
}

.overlayText {
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
