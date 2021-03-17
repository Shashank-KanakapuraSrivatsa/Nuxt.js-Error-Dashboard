import axios from '@nuxtjs/axios';
export const state = () => ({
    resolved : [],
    unresolved : [],
    backlog : []
})

// export const getters = {
//     listResolved: state => { return state.resolved },
//     listUnresolved: state => { return state.unresolved},
//     listBacklog: state => { return state.backlog}
// }


export const actions = {
    async asyncData({ commit }, payload) {
        try {
        const { resolved, unresolved, backlog } = await $axios.$get(
            "http://localhost:8000/get_lists"
          );
          return {
              resolved,
              unresolved,
              backlog
          };
        // commit ('setUnresolved',payload)
        // console.log(payload)
        } catch (error) {
          console.log(
            `Couldn't get error lists:\n${error}\nDid you start the API?`
          );
          console.log(
            "HINT: You can comment out the full `asyncData` method and work with mocked data for UI/UX development, if you want to."
          );
        }
        // commit('SET_UNRESOLVED', unresolved);
        console.log()
      }
}

console.log(state.unresolved)

// export const mutations = {
//     SET_UNRESOLVED(state, payload) {
//         state.unresolved = payload.unresolved
//     }
// }