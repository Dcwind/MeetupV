<template>
   <v-container>
       <v-layout wrap row>
           <v-flex xs12 sm6 class="text-xs-center text-sm-right">
               <v-btn large router to="/meetups">View Meetups</v-btn>
           </v-flex>
           <v-flex xs12 sm6 class="text-xs-center text-sm-right">
               <v-btn large router to="/meetup/createnew">Organize Meetup</v-btn>
           </v-flex>
       </v-layout>
       <v-layout row wrap>
         <v-flex xs12>
           <v-carousel>
              <v-carousel-item 
              v-for="meetup in meetups" 
              :src="meetup.imageUrl" 
              :key="meetup.id">
              <div class="title">
                {{ meetup.title  }}  
              </div>
              </v-carousel-item>
              
           </v-carousel>
         </v-flex>
       </v-layout>
   </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          {imageUrl: 'http://dailysignal.com/wp-content/uploads/150904_CaliforniaMigration_Johnson-1250x650.jpg', id: 'dfkjdfkjdkj', title: 'Meetup in Cali'},
          {imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Bangkok_skytrain_sunset.jpg', id: 'sfdvfger3geg', title: 'Meetup in Bangkok'}
        ]
      }
    }
  }
</script>

<style scoped>
.title {

}
</style>
