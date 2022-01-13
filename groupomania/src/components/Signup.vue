<template>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <h3>
      S'inscrire
    </h3>

    <v-text-field
      v-model="username"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Mot de passe"
      required
    ></v-text-field>

    <v-text-field
      v-model="bio"
      label="bio"
    ></v-text-field>


    <v-btn
      :disabled="!valid"
      class="mr-4"
      @click="validate"
    >
      Connexion
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data() {
        return{
            valid: true,
            username: '',
            nameRules: [
                v => !!v || 'Name is required',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
            ],
            password: '',
            passwordRules: [
                v => !!v || 'password is required',
            ],
            bio: '',
        }
    },

    methods: {
      validate () {
        let utilisateur = {email: this.email, password: this.password, username: this.username}
        fetch("http://localhost:8080/api/users/Signup", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: utilisateur
        })
      },
    },
  }
</script>