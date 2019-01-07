<template>
  <div>
    <b-container>
      <b-row align-h="center" class="mt5">
        <b-col cols="5">
          <b-card class="p-3">
            <h3 class="mb-4">Login</h3>
            <b-form @submit="onSubmit" v-if="show">
              <b-form-group id="exampleInputGroup1"
                            label="Email address:"
                            label-for="exampleInput1">
                <b-form-input id="exampleInput1"
                              type="email"
                              v-model="login.email"
                              required
                              placeholder="Email">
                </b-form-input>
              </b-form-group>
              <b-form-group id="exampleInputGroup2"
                            label="Password:"
                            label-for="exampleInput2">
                <b-form-input id="exampleInput2"
                              type="password"
                              v-model="login.password"
                              required
                              placeholder="Password">
                </b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Login</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService.js'
export default {
  data () {
    return {
      login: {
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    async onSubmit () {
      const response = await AuthenticationService.register({
        email: this.login.email,
        password: this.login.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>
</style>
