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
import axios from 'axios';

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

      let headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
      try{
        let a = await axios.post("http://localhost:8080/auth/login", user, headers);
        this.responseMessage = "Welcome " + a.data.username;
        axios.defaults.headers.common['Authorization'] = "Bearer " + a.data.authenticationToken;
        console.log(axios.defaults.headers.common);
        //this.$router.push("/user/" + a.data.username);
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
