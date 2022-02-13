<template>
  <v-card>
    <v-navigation-drawer permanent expand-on-hover>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="size"> Sandra Adams </v-list-item-title>
            <v-list-item-subtitle class="size"> sandra_a88@gmail.com </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <template nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon >
          <v-list-item-title class="size">Mon profile</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="size">Se deconnecter</v-list-item-title>
        </v-list-item>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data: () => {
     
    },
  }
</script>

<style scoped>
.theme--light.v-card {
  background-color: transparent;
}
.theme--light.v-navigation-drawer {
  background-color: #233654b8;
}

.v-list-item, .v-list-item__subtitle, .v-icon {
  color: white !important;
  font-weight: 700;
}

.size {
  font-size: 1.2em !important;
}
</style>