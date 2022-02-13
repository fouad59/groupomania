<template>
  <v-footer
    padless
   >
    <v-card
      class="flex bgColor"
      flat
      tile
     >
      <v-card-title class="teal">
        <strong class="subheading">Bienvenue dans votre réseau social d'entreprise!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 bgColor"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 bgColor text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>
  .theme--light.v-card{
    background-color: #233654b8 !important;
  }
  .theme--light.v-sheet{
    background-color: transparent;
  }
</style>