<template>
    <div class="wall">
        <h1><img src="../assets/icon.png"> Groupomania SN</h1>
        <Wall/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Wall from '@/components/Wall'
    export default {
        name: 'wall',
        components: {
            Wall
        }
    }
</script>

<style scoped>
    h1 {
        margin: 0.6em;
    }
</style>