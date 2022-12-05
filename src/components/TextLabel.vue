<template>
  <p class="label">{{ text }}</p>
</template>

<script>
export default {
  name: 'TextLabel',
  props: {
    text: Text,
    color: Text
  }
}
</script>

<style scoped>
.label {
  background-color: white;
  padding-left: 1em;
  padding-right: 1em;
  color: #04548a;
  border-radius: 50px;
  margin-left: 0.25em;
  margin-right: 0.25em;

  display: flex;
  align-items: center;
}


</style>
