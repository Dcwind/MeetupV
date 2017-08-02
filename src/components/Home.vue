<template>
   <v-container>
       <v-layout wrap row>
           <v-flex xs12 sm6 class="text-xs-center text-sm-right">
               <v-btn large route to="/meetups">View Meetups</v-btn>
           </v-flex>
           <v-flex xs12 sm6 class="text-xs-center text-sm-right">
               <v-btn large route to="/meetup/createnew">Organize Meetup</v-btn>
           </v-flex>
       </v-layout>
       <v-layout row wrap>
         <v-flex xs12>
           <v-carousel>
              <v-carousel-item v-for="(item,i) in items" 
              v-bind:src="item.src" 
              :key="i"></v-carousel-item>
           </v-carousel>
         </v-flex>
       </v-layout>
   </v-container>
</template>

<script>
    export defualt {
        data(){
            return {
                meetups: [
                    {}
                ]
            }
        }
    }
</script>
