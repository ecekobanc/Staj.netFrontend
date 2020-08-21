<template>
  <div class="hello">
    <h1>Login</h1>
    <label>{{responseMessage}}</label>
    <br/>
    <br/>
    <label>Username: </label>
    <input type="text" v-model="username"/>
    <br/>
    <br/>
    <label>Password: </label>
    <input type="password" v-model="password"/>
    <br/>
    <br/>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import api from '../api';
import VueCookie from 'vue-cookies';

export default {
  name: 'Login',
  components: {
    
  },
  data() {
    return {
      username: '',
      password: '',
      responseMessage: ''
    }
  },
  methods: {
    async submit() {

      let user = {
        "username" : this.username,
        "password" : this.password
      };

      try{
        let response = await api.login(user);
        VueCookie.set('access_token', response.data.authenticationToken);
        this.responseMessage = "Welcome " + response.data.username;
        this.$router.push("/user/" + response.data.username);
      }
      catch(error){
        this.responseMessage = error.response.data.message;
      } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
