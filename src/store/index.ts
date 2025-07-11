/* eslint-disable */
import { createStore } from 'vuex'
import {persistData} from '@/persist'

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
        },
        {
            id: 4,
            name: "Ruiz Cabrera",
            image: "",
            count: 0,
        },
        {
            id: 5,
            name: "Löris",
            image: "",
            count: 0,
        },
        {
            id: 6,
            name: "Nils",
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
          let tempItem;
          this.state.members.forEach(item => {
              if (item.id === m.member.id) {
                  item.count = item.count + m.steps;
                  tempItem = item
              }
          })
          if (tempItem) {
              persistData(tempItem)
          }
      },
      decrement(state, m) {
          if(m.member.count <= 0 || m.member.count < m.steps) {return;}
          let tempItem;
          // @ts-ignore
          this.state.members.forEach(item => {
              if (item.id === m.member.id) {
                  item.count = item.count - m.steps;
                  tempItem = item
              }
          })
          if (tempItem) {
              persistData(tempItem)
          }
      }
  },
  modules: {
  }
})
