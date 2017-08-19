import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

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
    this.$store.dispatch('loadMeetups')
  }
})
