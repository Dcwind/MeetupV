<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="onSubmit">
                                <v-layout row>
                                    <v-flex >
                                        <v-text-field
                                        name="email"
                                        label="Mail"
                                        id="email"
                                        type="email"
                                        v-model="email"
                                        required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex >
                                        <v-text-field
                                        name="password"
                                        label="Password"
                                        id="password"
                                        type="password"
                                        v-model="password"
                                        required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                  <v-flex >
                                      <v-text-field
                                      name="comfirmPassword"
                                      label="comfirm Password"
                                      id="comfirmPassword"
                                      type="password"
                                      v-model="comfirmPassword"
                                      :rules="[comparePassword]">
                                      </v-text-field>
                                  </v-flex>
                              </v-layout>
                              <v-layout row>
                                  <v-flex >
                                      <v-btn type="submit" >Sign Up</v-btn>
                                  </v-flex>
                              </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      comfirmPassword: ''
    }
  },
  computed: {
    comparePassword () {
      return this.password !== this.comfirmPassword ? 'Passwords do not match' : true
    }
  },
  method: {
    onSignUp () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    }
  }
}
</script>
