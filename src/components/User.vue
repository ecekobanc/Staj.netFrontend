<template>
  <div class="hello">
    <h1>Welcome {{ username }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'User',
  data() {
    return {
      username: ''
    }
  },
  async mounted() {
    this.username = this.$route.params.username;
  
    try{
      let res = await axios.get("http://localhost:8080/user/" + this.username);
      console.log(res);
    }
    catch(error){
      console.log(error.response);
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
