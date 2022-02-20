<template>
  <!--Main content-->
  <div class="welcome flex justify-center">
    <!--Header-->
    <!--Content-->
    <div class="p-64 text-cyan-700">
      <h1 class="text-4xl font-extrabold uppercase">
        welcome to websiteviz 👋
      </h1>
      <br />
      <p class="text-2xl">👈 Enjoy analyzing websites together !</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  height: 90vh; -->
<style scoped>
</style>
