<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
                <h4>Create a new meetup</h4>
            </v-flex>
        </v-layout>
        <v-layout row >
            <v-flex xs12 sm8 offset-sm2>
                <form @submit.prevent="onCreateMeetup">
                    <v-layout row > 
                        <v-flex xs12 >
                            <v-text-field 
                            name="title"
                            label="Title"
                            id="title"
                            required
                            v-model="title"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 >
                            <v-text-field 
                            name="location"
                            label="Location"
                            id="location"
                            required
                            v-model="location"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 >
                            <v-text-field 
                            name="imageUrl"
                            label="Image Url"
                            id="image-url"
                            required
                            v-model="imageUrl"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 >
                          <img :src="imageUrl" height="150">
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 >
                            <v-text-field 
                            name="description"
                            label="Description"
                            id="description"
                            multi-line
                            required
                            v-model="description"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 >
                            <h4>Choose a Date and time.</h4>
                        </v-flex>   
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 >
                            <v-layout row wrap>
                                <v-flex xs12 sm5>
                                  <v-date-picker v-model="date"></v-date-picker>
                                  <p>{{ date }}</p>
                                </v-flex>
                                <v-flex xs12 sm5 offset-sm1>
                                  <v-time-picker v-model="time"></v-time-picker>
                                  <p>{{ time }}</p>
                                </v-flex>
                            </v-layout>
                        </v-flex>   
                    </v-layout>
                     <v-layout row>
                        <v-flex xs12 >
                            <v-btn :disabled="!formIsValid"
                            type="submit">create Meetup</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
 export default {
   data () {
     return {
       title: '',
       location: '',
       description: '',
       imageUrl: '',
       date: new Date(),
       time: new Date()
     }
   },
   computed: {
     formIsValid () {
       return this.title !== '' && this.location !== '' && this.description !== '' && this.imageUrl !== ''
     }
   },
   methods: {
     onCreateMeetup () {
       if (!this.formIsValid) {
         return
       }
       const meetupData = {
         title: this.title,
         location: this.location,
         description: this.description,
         imageUrl: this.imageUrl,
         date: new Date()
       }
       this.$store.dispatch('createMeetup', meetupData)
       this.$router.push('/meetups')
     }
   }
 }
</script>
