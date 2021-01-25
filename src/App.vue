<template>
  <!-- <h1>P5.js on Vue3 Template</h1>-->
  <div id="nav">
    <router-link to="/"></router-link>
    <!-- <router-link to="/example"></router-link> 
    <router-link to="/12">123</router-link> -->
  </div>
  <!-- <router-view :key="$route.fullPath"/> -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
