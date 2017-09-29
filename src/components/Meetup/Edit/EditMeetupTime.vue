<template>
    <v-dialog width="350px" persistent v-model="editDialog">
        <v-btn accent slot="activator">
            Edit Time
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title>Edit Meetup Time</v-card-title>
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
      editDialog: false,
      editableTime: null
    }
  },
  methods: {
    onSaveChanges () {
      this.editDialog = false
      const newDate = new Date(this.meetup.date)
      let hours = this.time.match(/^(\d+)/)[1]
      const minutes = this.time.match(/:(\d+)/)[1]
      const peram = this.time.match(/([pa])/)[1]

      if (peram === 'p') {
        hours = hours > 11 ? hours : parseInt(hours) + 12
      } else {
        hours = hours === '12' ? hours = 0 : hours
      }

      newDate.setHours(hours)
      newDate.setMinutes(minutes)

      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        date: newDate
      })
    }
  },
  created () {
    this.editableTime = new Date(this.meetup.date).toTimeString()
  }
}
</script>
