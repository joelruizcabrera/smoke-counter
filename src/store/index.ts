/* eslint-disable */
import {persistData} from '@/persist'

import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

import {sortedMembers} from '@/persist'

export interface State {
    count: number
}

export const key: InjectionKey<Store<State>> = Symbol()


// define your own `useStore` composition function
export function useStore () {
    return baseUseStore(key)
}

export const store = createStore({
  state: {
    members: [

    ]
  },
  getters: {
      getMembers: (state) => {
          console.log(state.members)
          return state.members
      },
  },
  mutations: {
      setMembers (state, members) {
          state.members = sortedMembers(members)
      }
  },
  actions: {
      setMembers (state, members) {
          this.state.members = members
      },
      increment(state, m) {
          // @ts-ignore
          let tempItem;
          this.state.members.forEach(item => {
              // @ts-ignore
              if (item.id === m.member.id) {
                  // @ts-ignore
                  item.count = item.count + m.steps;
                  tempItem = item
              }
          })
          console.log(tempItem)
          if (tempItem) {
              persistData(tempItem)
          }
      },
      decrement(state, m) {
          console.log(m)
          if(m.member.count <= 0 || m.member.count < m.steps) {return;}
          let tempItem;
          // @ts-ignore
          this.state.members.forEach(item => {
              // @ts-ignore
              if (item.id === m.member.id) {
                  // @ts-ignore
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
