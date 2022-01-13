<template>
  <div id="home">
    <div class="sign">
      <h2>Inscription</h2>
      <Signup/>
    </div>
    <div class="log">
      <h2>Connexion</h2>
      <Login/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/Signup.vue'
export default {
  name: 'Sign',
  components: {
    Signup
  }
}
</script>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
export default {
  name: 'Log',
  components: {
    Login
  }
}
</script>


