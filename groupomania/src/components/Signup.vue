<template>
  <v-form
  ref="form"
  v-model="valid"
  lazy-validation
  >
    <h3 v-if="mode == 'signup'">
      Créer un compte
    </h3>

    <h3 v-else>
      Se connecter
    </h3>

    <p v-if="mode == 'signup'">
      Vous avez un compte? <span @click="switchToLogin()">Se connecter</span>
    </p>

    <p v-else>
      Vous n'avez pas de compte? <span @click="switchToSignup()">Créer un compte</span>
    </p>

    <v-text-field
      v-model="username"
      :rules="nameRules"
      label="Nom"
      required
      v-if="mode=='signup'"
    ></v-text-field>

    <v-text-field
      v-model="bio"
      label="prénom"
      v-if="mode=='signup'"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Mot de passe"
      :rules="passwordRules"
      type="password" 
      required
    ></v-text-field>

    <v-text-field 
    label="Confirmation du mot de passe" 
    v-model="confirmPassword" 
    :rules="[confirmPasswordRules,passwordConfirmationRule]"
    type="password" 
    required
    v-if=" mode == 'signup'"
    ></v-text-field>

    <p>
      <v-btn
        class="mr-4"
        :disabled = !requiredFields
        @click="create"
        v-if=" mode == 'signup'"
      >
        Enregistrement
      </v-btn>

      <v-btn
        class="mr-4"
        :disabled = !requiredFields
        @click="validate" 
        v-else
      >
        Connexion
      </v-btn>
    </p>
  </v-form>
</template>

<script>
  export default {
    name: "Signup",
  
    data() {
      return{
        mode:"signup",
        valid: true,
        username: '',
        nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 20 characters',
        ],
        email: '',
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        password: '',
        confirmPassword: "",
        passwordRules: [v => !!v || "Password is required"],
        confirmPasswordRules: [v => !!v || "Password is required"],
        bio: '',
      }
    },

    computed: {
      passwordConfirmationRule() {
        return () => (this.password === this.confirmPassword) || 'Password must match'
      },
      requiredFields() {
        if (this.mode == 'signup') {
          if (this.email != "" && this.username != "" && this.password != "") {
            return true;
          } else {
            return false;
          }
        }else { 
          if (this.email != "" && this.password != "" ) {
            return true;
          } else {
            return false;
          }
        }
      }
    },

    methods: {
      switchToSignup () {
        this.mode = 'signup'
      },
      switchToLogin () {
        this.mode = 'login'
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

      create () {
        let user = {email: this.email, username: this.username, password: this.password, bio: this.bio}
        fetch("http://localhost:8080/api/users/Signup", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(user)
        }).then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        });
      },
    },
  }
</script>