<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h5>{{meetup.title}}</h5>
                        <template v-if="userIsCreator">
                            <v-spacer></v-spacer>
                            <app-edit-meetup :meetup="meetup"></app-edit-meetup>
                        </template>
                    </v-card-title>
                    <v-card-media :src="meetup.imageUrl" 
                     height="400px">
                    </v-card-media>
                    <v-card-text>
                    <div class="info--text">{{meetup.date | date}} - {{meetup.location}}</div>
                    <div>
                        <app-edit-meetup-date :meetup="meetup" v-if="userIsCreator">
                        </app-edit-meetup-date>
                        <app-edit-meetup-time :meetup="meetup" v-if="userIsCreator">
                        </app-edit-meetup-time>
                    </div>
                    <div>{{meetup.description}}
                     </div>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <app-register-meetup :meetupId="meetup.id"></app-register-meetup>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
   export default {
     props: ['id'],
     computed: {
       meetup () {
         return this.$store.getters.loadedMeetup(this.id)
       },
       userIsAuthenticated () {
         return this.$store.getters.user !== null && this.$store.getters.user !== undefined
       },
       userIsCreator () {
         if (!this.userIsAuthenticated) {
           return false
         }
         return this.$store.getters.user.id === this.meetup.creatorId
       }
     }
   }
</script>
