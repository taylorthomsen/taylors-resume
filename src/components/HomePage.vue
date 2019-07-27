<template>
  <div class="homePage">
      <div class="leftCol">
        <p>{{ msg }}</p>
    </div>
    <div class="rightCol">
        <ul>
            <il>
                <a href="https://github.com/taylorthomsen" target="_blank" rel="noopener">
                    <p>Github</p>
                </a>
            </il>
            <il>
                <a href="https://www.linkedin.com/in/taylor-thomsen-7a5257146/" target="_blank" rel="noopener">
                    <p>LinkedIn</p>
                </a>
            </il>
            <il>
                <p>Email</p>
            </il>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: `I am a software developer.... looking for a position in the
      Washington, D.C. metropolitan area. `
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.leftCol {
    float: left;
}
.rightCol {
    float: right;
}
</style>
