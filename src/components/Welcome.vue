<template>
  <!--NavBar-->
  <div id="nav">
    <nav class="navbar">
      <ul class="navbar-menu">
        <li class="navbar-item">
          <router-link to="/" class="navbar-link">
            <i class="fa-solid fa-house-user navbar-icon"></i>
            <span class="navbar-title">Home</span>
          </router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/nbcsport" class="navbar-link">
            <i class="fas fa-tv navbar-icon"></i>
            <span class="navbar-title">NBC Sport</span>
          </router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/bbcsport" class="navbar-link">
            <i class="fas fa-tv navbar-icon"></i>
            <span class="navbar-title">BBC Sport</span>
          </router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/skysport" class="navbar-link">
            <i class="fas fa-tv navbar-icon"></i>
            <span class="navbar-title">Sky Sport</span>
          </router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/about" class="navbar-link">
            <i class="fa-thin fa-address-card"></i>
            <span class="navbar-title">About us</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>

  <div class="welcome">
    <div class="h1">
      <h1 class="text-3xl text-pink-500 font-bold">welcome to websiteviz 👋</h1>
      <p>👈 Enjoy analyzing websites together !</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
