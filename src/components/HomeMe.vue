<template>
  <div id="main">
    <div class="mainText">
      <h1 class="text-center">Hi! I'm</h1>
      <h2>Wesley.</h2>
      <div class="highlighted_title">
        <h3>Software Developer</h3>
      </div>
    </div>
    <div class="mainPhoto">
      <img alt="Photo of me" src="../assets/portrait.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMe',
}
</script>

<style scoped>

#main {
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: space-between;
  width: 80vw;
}

.mainText {
  display: block;
  /*clamp(32px,4vw,52px);*/
}

.mainText h3 {
  text-align: center;
  font-size: clamp(20px,2.8vw,44px);
  margin: 0;
  font-weight: 700;
}

.mainPhoto {
  display: block;
}
.mainPhoto img {
  border: 10px solid #fff;
  border-radius: 50%;
  width: clamp(200px, 20vw, 20vw);
}
@media (max-width: 700px) {
  .mainPhoto img {
    margin-bottom: 2em;
  }
  #main {
    justify-content: center;
  }
}
</style>
