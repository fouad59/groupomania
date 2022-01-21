<template>
  <div id="start">
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