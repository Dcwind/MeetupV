<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h4>Create a new meetup</h4>
            </v-flex>
        </v-layout>
        <v-layout row >
            <v-flex xs12>
                <form>
                    <v-layout row > 
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field 
                            name="title"
                            label="Title"
                            id="title"
                            required
                            v-model="title"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field 
                            name="location"
                            label="Location"
                            id="location"
                            required
                            v-model="location"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field 
                            name="imageUrl"
                            label="Image Url"
                            id="image-url"
                            required
                            v-model="imageUrl"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                          <img :src="imageUrl" >
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
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
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn :disabled="!formIsValid">create Meetup</v-btn>
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
       imageUrl: ''
     }
   },
   computed: {
     formIsValid () {
       return this.title !== '' && this.location !== '' && this.description !== '' && this.imageUrl !== ''
     }
   }
 }
</script>
