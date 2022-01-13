<template>
    <div class="log">
      <h2>Connexion</h2>
      <Login/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Login from '@/components/Login'
    export default {
        name: 'Log',
        components: {
            Login
        }
    }
</script>