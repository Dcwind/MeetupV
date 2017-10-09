<template>
    <v-dialog  persistent v-model="registerDialog">
        <v-btn accent slot="activator">
            {{userIsRegistered ? 'Unregister' : 'Register'}}
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title v-if="userIsRegistered">unregister from meetup</v-card-title>
                        <v-card-title v-else>Register for meetup</v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-text>You can always change your dicision.</v-card-text>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-btn class="red--text darken-1" @click="registerDialog = false" flat>Cancel</v-btn>
                            <v-btn class="green--text darken-1" @click="onAgree" flat>Confirm</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ['meetupId'],
  data () {
    return {
      registerDialog: false
    }
  },
  computed: {
    userIsRegistered () {
      return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
        return meetupId === this.meetupId
      }) >= 0
    }
  },
  methods: {
    onAgree () {
      this.registerDialog = false
      if (this.userIsRegistered) {
        this.$store.dispatch('unregisterFromMeetup', this.meetupId)
      } else {
        this.$store.dispatch('registerForMeetup', this.meetupId)
      }
    }
  }
}
</script>
