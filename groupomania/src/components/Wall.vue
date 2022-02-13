<template>
  <div>
    <nav>
      <Nav />
    </nav>

    <v-card id="users" class="mx-auto" max-width="300">
      <v-card-title> MEMBRES </v-card-title>
      <v-virtual-scroll :items="items" :item-height="50" height="350px">
        <template v-slot:default="{ item }">
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar :color="item.color" size="56">
                {{ item.initials }}
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.fullName }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-card>
    <div id="champs" class="ui main container">
      <textarea
        type="text"
        placeholder="Hello quoi de neuf?"
        lines="3"
        v-model.lazy="message"
      />
      <v-file-input hide-input prepend-icon="mdi-cloud-upload"></v-file-input>
      <v-btn class="ma-2" outlined fab color="indigo">
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </div>
    <div id="wall">
      {{ message }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "../components/Nav";
export default {
  name: "champs",
  /*data: {
		success: false
	},
	methods: {
		cls: function () {
			return this.sucess === true ? 'success' : 'error'
		}
	},*/
  data() {
    return {
      message: "",
      colors: ["#2196F3"],
      names: ["Oliver"],
      surnames: ["Smith"],
    };
  },
  props: {
    msg: String,
  },
  components: {
    Nav,
  },

  computed: {
    items() {
      const namesLength = this.names.length;
      const surnamesLength = this.surnames.length;
      const colorsLength = this.colors.length;

      return Array.from({ length: 100 }, () => {
        const name = this.names[this.genRandomIndex(namesLength)];
        const surname = this.surnames[this.genRandomIndex(surnamesLength)];

        return {
          color: this.colors[this.genRandomIndex(colorsLength)],
          fullName: `${name} ${surname}`,
          initials: `${name[0]} ${surname[0]}`,
        };
      });
    },
  },

  methods: {
    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

nav {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
}

#champs {
  background-color: #ffffffb8;
  width: 33%;
  border-radius: 0.4em;
  display: flex;
  justify-content: space-between;
}

#users {
  position: absolute;
  width: 20%;
  top: 0;
  background-color: #233654b8;
  color: white;
}

#wall {
  background-color: #ffffffb8;
  width: 57%;
  border-radius: 0.4em;
  margin: 1em auto;
  font-size: 2em;
  text-align: start;
  padding: 1em;
}

.v-list-item {
  color: white !important;
  font-weight: 600;
}

textarea {
  padding: 0.7em 1em 0 1em;
  width: 80%;
  border-radius: 0.4em;
  font-size: 1.4em;
}

textarea:focus {
  outline: none;
}

.v-btn {
  background: #ffffffb8;
  color: #233654b8;
}

.v-card {
	height: 100%;
}

input::placeholder {
  border: greenyellow;
  font-weight: 600;
}
</style>