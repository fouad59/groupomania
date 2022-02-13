<template>
  <div id="start">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1><img src="../assets/icon.png"> Groupomania SN</h1>
    <Signup />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Signup from '../components/Signup';
  export default {
    name: 'signup',
    components: {
        Signup
    }
  }
</script>