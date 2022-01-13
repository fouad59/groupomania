<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1>Groupomania</h1>
    <router-view/>
    <div id="start">
      <Login/>
      <Signup/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Footer from './components/FooterLink'
  import Signup from './components/Signup'
  import Login from './components/Login'

  export default {
    name:"App",
    components: {
      Login,
      Signup,
      Footer
    }
  }
</script>

<style>
.log {
  display: flex;
}

body {
  background-color: #adadad;
  background-image: url(assets/logo.png);
  background-position:50% -20%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#start {
  display: flex;
  justify-content: space-around;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
