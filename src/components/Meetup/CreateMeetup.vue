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
                                  <v-date-picker v-model="date" required></v-date-picker>
                                </v-flex>
                                <v-flex xs12 sm5 offset-sm1>
                                  <v-time-picker v-model="time" required></v-time-picker>
                                </v-flex>
                            </v-layout>
                        </v-flex>   
                    </v-layout>
                     <v-layout row>
                        <v-flex xs12 >
                            {{dateTime}}
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
     },
     dateTime () {
       const date = new Date(this.date)

       if (typeof this.time === 'string') {
         let hours = this.time.match(/^(\d+)/)[1]
         const minutes = this.time.match(/:(\d+)/)[1]
         const peram = this.time.match(/([pa])/)[1]

         if (peram === 'p') {
        //    hours = hours + 12
           hours = hours > 12 ? hours : parseInt(hours) + 12
           console.log(hours)
         }

         date.setHours(hours)
         date.setMinutes(minutes)
       } else {
         date.setHours(this.time.getHours())
         date.setMinutes(this.time.getMinutes())
       }
       console.log(date)
       return date
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
         date: this.dateTime
       }
       this.$store.dispatch('createMeetup', meetupData)
       this.$router.push('/meetups')
     }
   }
 }
</script>
