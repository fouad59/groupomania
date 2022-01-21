<template>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <h3>
      Se connecter
    </h3>

    

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

    
  </v-form>
</template>

<script>
  export default {
    name: "Login",
  
    data() {
      return{
        mode:"login",
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
      switchToSignup () {
        this.mode = 'create'
      },
      switchToLogin () {
        this.mode = 'create'
      },
      validate () {
        let user = {email: this.email, password: this.password}
        fetch("http://localhost:8080/api/users/Login", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(user)
        })
      },
    },
  }
</script>