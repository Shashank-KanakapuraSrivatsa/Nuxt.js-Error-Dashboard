import axios from 'axios';
export const state = () => ({
    // resolved : [],
    // unresolved : [],
    // backlog : []
})

export const getters = {
    // allResolved: state => state.resolved,
    // allUnresolved: state => state.unresolved,
    // allBacklog: state => state.backlog
}

export const actions = {
    // async asyncData({ commit }) {
    //     try {
    //       const {unresolved, resolved, backlog} = await $axios.$get(
    //         "http://localhost:8000/get_lists"
    //       );
    //       console.log({unresolved, resolved, backlog})
    //       commit('setData',{unresolved, resolved, backlog})
    //     } catch (error) {
    //       console.log(
    //         `Couldn't get error lists:\n${error}\nDid you start the API?`
    //       );
    //       console.log(
    //         "HINT: You can comment out the full `asyncData` method and work with mocked data for UI/UX development, if you want to."
    //       );
    //     }
    //   }
}

export const mutations = {
    // setData : (state, {unresolved, resolved, backlog}) => (state.unresolved = unresolved, state.resolved = resolved, state.backlog = backlog)

}