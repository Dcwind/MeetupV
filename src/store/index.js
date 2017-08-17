import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'http://dailysignal.com/wp-content/uploads/150904_CaliforniaMigration_Johnson-1250x650.jpg',
        id: 'dfkjdfkjdkj',
        title: 'Meetup in Cali',
        date: new Date(),
        location: 'The Bridge California',
        description: 'Great meetup come join us'
      },
      { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Bangkok_skytrain_sunset.jpg',
        id: 'sfdvfger3geg',
        title: 'Meetup in Bangkok',
        date: new Date(),
        location: 'The inn by Udom Sak, bts',
        description: 'Value packed meetup come join us'
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'lkfdmfk33k'
      }
      // Reach out to firebase and store the data
      commit('createMeetup', meetup)
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
    }
  },
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
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})

