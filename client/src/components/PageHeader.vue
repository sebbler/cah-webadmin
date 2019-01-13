<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand class="home" @click="navigateTo({name: 'WebAdmin'})">Web Admin Interface</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item @click="navigateTo({name: 'cards'})">Cards</b-nav-item>
        <b-nav-item @click="navigateTo({name: 'users'})">Users</b-nav-item>
        <b-nav-item @click="navigateTo({name: 'cards'})">Gamemodes</b-nav-item>
        <b-nav-item @click="navigateTo({name: 'cards'})">Highscore</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>Login</em>
          </template>
          <b-dropdown-item @click="navigateTo({name: 'login'})">Login</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
  .home {
    cursor: pointer;
  }
  .bg-dark {
    background-color: #111111 !important;
  }
</style>
