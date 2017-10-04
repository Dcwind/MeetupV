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
                        <v-time-picker v-model="editableTime" style="width: 100%" actions>
                            <template scope="{save, cancel}">
                                <v-btn class="blue--text darken-1" flat @click="editDialog = false">Close</v-btn>
                                <v-btn class="blue--text darken-1" flat @click="onSaveChanges">Save</v-btn>
                            </template>
                        </v-time-picker>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data () {
    return {
      editDialog: false
    }
  },
  computed: {
    userIsRegistered () {
      this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
         return meetupId === this.meetup.id
      }) >= 0
    }
  }
  methods: {
    onSaveChanges () {
      this.editDialog = false
      this.$store.dispatch('updateMeetupData', {
      })
    }
  }
}
</script>
