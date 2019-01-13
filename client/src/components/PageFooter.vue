<template>
  <footer class="footer">
    <div class="container">
      <a @click="navigateTo({name: 'cards'})">Impressum</a>
      <a @click="navigateTo({name: 'users'})">Team</a>
      <hr>
      <span class="text-muted">- Interactive Media - Audio Visual Media Master - hdm-stuttgart - </span>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
  .footer {
    position: relative;
    bottom: 0px;
    left: 0px;
    width: 100%;
    margin-top: -40px;
    height: 160px;
    line-height: 60px;
    background-color: #f5f5f5;
  }
</style>
