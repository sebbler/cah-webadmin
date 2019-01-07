<template>
  <div id="app">
    <page-header />
    <!-- Main -->
    <main>
      <div class="wrapper">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
.wrapper{
  padding-top:40px;
}
</style>
