<template>
  <v-app >
    <main>
      <v-navigation-drawer v-model="sideNav">
        <v-list>
          <v-list-title>
          </v-list-title>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar>
        <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"></v-toolbar-side-icon>
        <v-toolbar-title>MeetupV</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat>
            <v-icon>chrome_reader_mode</v-icon>
            View Meetups
          </v-btn>
        </v-toolbar-items>  
      </v-toolbar>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
