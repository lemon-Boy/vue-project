<template>
  <div id="app">

    <div class="none">
      <img src="./assets/logo.png">
      <router-view />
    </div>

    <div class="Wrap text-center none">
      <h1>Vue Typeahead</h1>
      <p>Simple VueJS 2 TypeAhead component builded with Fetch Browser API.</p>
      <p>使用fetch构建过滤器demo</p>
      <!-- Our component-->
      <typeahead source="https://jsonplaceholder.typicode.com/posts"
                 placeholder="What TV Serie you are looking for..."
                 filter-key="title"
                 :start-at="2">
      </typeahead>
    </div>
    <div class="none">
      <h1>Vue axios</h1>
      <axioscom></axioscom>
    </div>

    <music></music>
  </div>
</template>

<script>
import Typeahead from './components/Typeahead.vue'
import axioscom from './components/axios'
import music from './music/music'
export default {
  name: 'App',
  components: {
    Typeahead,
    axioscom,
    music
  },
  created () {
    // 刷新缓存信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-size: 3vw;
}
h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
  font-family: "Lobster", Arial, sans-serif;
}
.text-center {
  text-align: center;
}
.Wrap {
  max-width: 60vw;
  margin: 5vh auto;
}
.none {
  display: none;
}
</style>
