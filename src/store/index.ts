/* eslint-disable */
import { createStore } from 'vuex'

export default createStore({
  state: {
    members: [
        {
            id: 1,
            name: "Mulle",
            image: "",
            count: 0,
        },
        {
            id: 2,
            name: "Mahir",
            image: "",
            count: 0,
        },
        {
            id: 3,
            name: "Simon",
            image: "",
            count: 0,
        }
    ]
  },
  getters: {
      getMembers: (state) => state.members,
  },
  mutations: {
      setMembers (state, members) {
          state.members = members
      }
  },
  actions: {
      increment(state, m) {
          // @ts-ignore
          console.log(m)
          this.state.members.forEach(item => {
              if (item.id === m.id) {
                  item.count++
              }
          })
      },
      decrement(state, m) {
          if(m.count <= 0) {return;}
          // @ts-ignore
          this.state.members.forEach(item => {
              if (item.id === m.id) {
                  item.count--
              }
          })
      }
  },
  modules: {
  }
})
