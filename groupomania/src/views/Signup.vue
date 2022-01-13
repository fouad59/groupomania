<template>
    <div class="signup">
      <h2>Inscription</h2>
      <Signup/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Signup from '@/components/Signup'
    export default {
        name: 'Signup',
        components: {
            Signup
        }
    }
</script>