import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'http://dailysignal.com/wp-content/uploads/150904_CaliforniaMigration_Johnson-1250x650.jpg',
        id: 'dfkjdfkjdkj',
        title: 'Meetup in Cali',
        date: '2017-08-23'
      },
      { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Bangkok_skytrain_sunset.jpg',
        id: 'sfdvfger3geg',
        title: 'Meetup in Bangkok',
        date: '2017-09-23'
      }
    ],
    user: {
      id: 'mfksdmkf32mk',
      registeredMeetups: [
        'sfdvfger3geg'
      ]
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})

