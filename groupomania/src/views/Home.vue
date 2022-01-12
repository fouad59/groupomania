<template>
  <div class="home">
    <h1>Groupomania</h1>
    <div>
      <Signup/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/Signup.vue'
export default {
  name: 'Home',
  components: {
    Signup
  }
}
</script>
