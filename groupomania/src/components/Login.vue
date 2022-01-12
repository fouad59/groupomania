<template>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Mot de passe"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      class="mr-4"
      @click="validate"
    >
      Enregistrer
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data() {
        return{
            valid: true,
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            password: '',
            passwordRules: [
                v => !!v || 'password is required',
            ],
        }
    },

    methods: {
      validate () {
        let user = {email: this.email, password: this.password}
        fetch("http://localhost:3306/api/users/Login", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: user
        })
      },
    },
  }
</script>