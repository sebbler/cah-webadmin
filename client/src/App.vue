<template>
  <div id="app">
    <page-header />
    <!-- Main -->
    <main>
      <div class="wrapper">
        <router-view/>
      </div>
    </main>
    <!-- Footer -->
    <page-footer />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
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
main{
  min-height: 100vh;
  margin-bottom: 100px;
}
.wrapper{
  padding-top:40px;
}
</style>
