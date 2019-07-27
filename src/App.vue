<template>
  <div id="app">
      <div class="header">
          <h1 class="name">Taylor Thomsen</h1>
          <router-link class="link" to="/">About</router-link>
          <router-link class="link" to="/Resume">Resume</router-link>
          <router-link class="link" to="/Contact">Contact</router-link>
      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: 'AlleanaScript';
  src: url('./assets/AlleanaScript.ttf') format('ttf'),
       url('./assets/AlleanaScript.otf') format('otf');
}
#app {
  font-family: 'PingFang SC', 'Microsoft Yahei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px 50px;
  text-align: center;
}
.link {
    text-decoration: none;
    color: #2c3e50;
    font-size: 20px;
    margin: 0px 25px;
}
.header {
    margin-bottom: 50px;
}
.name {
    font-family: "AlleanaScript";
}
</style>
