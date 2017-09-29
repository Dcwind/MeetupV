import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/shared/Alert.vue'
import Apploading from './components/shared/Loading'
import EditMeetup from './components/Meetup/Edit/EditMeetup'
import EditMeetupDate from './components/Meetup/Edit/EditMeetupDate'
import EditMeetupTime from './components/Meetup/Edit/EditMeetupTime'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-loading', Apploading)
Vue.component('app-edit-meetup', EditMeetup)
Vue.component('app-edit-meetup-date', EditMeetupDate)
Vue.component('app-edit-meetup-time', EditMeetupTime)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAHkGZBtKRtjhlbHmRcXlzwh2JzHOpLyRc',
      authDomain: 'meetupv-8ada7.firebaseapp.com',
      databaseURL: 'https://meetupv-8ada7.firebaseio.com',
      projectId: 'meetupv-8ada7',
      storageBucket: 'meetupv-8ada7.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
