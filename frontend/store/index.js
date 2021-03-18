import axios from '@nuxtjs/axios';
import Vue from 'vue';
export const state = () => ({
    resolved : [],
    unresolved : [],
    backlog : []
})

export const getters = {
    getResolved: state => { return state.resolved },
    getUnresolved: state => { return state.unresolved},
    gettBacklog: state => { return state.backlog}
}


export const actions = {
  async asyncData({commit}) {
    try {
      await this.$axios.$get(
        "http://localhost:8000/get_lists"
      ).then(res => { 
        commit('SET_Unresolved',res.unresolved)
        commit('SET_Resolved',res.resolved)
        commit('SET_Backlog',res.backlog)
       })
    } catch (error) {
      console.log(
        `Couldn't get error lists:\n${error}\nDid you start the API?`
      );
      console.log(
        "HINT: You can comment out the full `asyncData` method and work with mocked data for UI/UX development, if you want to."
      );
    }
  },
  DELETE_Unresolved({commit},payload) {
    commit('SPLICE_Unresolved',payload)
  },
  DELETE_Resolved({commit},payload) {
    commit('SPLICE_Resolved',payload)
  },
  DELETE_Backlog({commit},payload) {
    commit('MOVE_Backlog',payload)
  }
}

export const mutations = {
  SET_Unresolved (state, unresolved) {
    state.unresolved = unresolved
  },
  SET_Resolved (state, resolved) {
    state.resolved = resolved
  },
  SET_Backlog (state, backlog) {
    state.backlog = backlog
  },
  SPLICE_Unresolved(state, payload) {
    state.unresolved = state.unresolved.filter(e => e.index != payload.errorIndex)
    var indexToResolved = state.resolved.length + 1
    var errorCodeToResolved = payload.errorCode
    var errorTextToResolved = payload.errorText
    errorTextToResolved = errorTextToResolved.replace('unresolved','resolved')
    state.resolved.push({'index' : indexToResolved, 'code' : errorCodeToResolved, 'text' : errorTextToResolved}) 
    Vue.notify({
      title : 'Action SUCCESSFUL!!',
      text : 'Error has been moved to RESOLVED list'
    })
  },
  SPLICE_Resolved(state,payload) {
    state.resolved = state.resolved.filter(e => e.index != payload.errorIndex)
    var indexToUnresolved = state.unresolved.length + 1
    var errorCodeToUnresolved = payload.errorCode
    var errorTextToUnresolved = payload.errorText
    errorTextToUnresolved = errorTextToUnresolved.replace('resolved','unresolved')
    state.unresolved.push({'index' : indexToUnresolved, 'code' : errorCodeToUnresolved, 'text' :errorTextToUnresolved}) 
    Vue.notify({
      title : 'Action SUCCESSFUL!!',
      text : 'Error has been moved to UNRESOLVED list'
    })
  },
  MOVE_Backlog(state,payload) {
    state.backlog = state.backlog.filter(e => e.index != payload.errorIndex)
    var indexToUnresolved = state.unresolved.length + 1
    var errorCodeToUnresolved = payload.errorCode
    var errorTextToUnresolved = payload.errorText
    errorTextToUnresolved = errorTextToUnresolved.replace('backlog','unresolved')
    state.unresolved.push({'index' : indexToUnresolved, 'code' : errorCodeToUnresolved, 'text' :errorTextToUnresolved}) 
    Vue.notify({
      title : 'Action SUCCESSFUL!!',
      text : 'Error has been moved to UNRESOLVED list'
    })
  }
}
