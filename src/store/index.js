/* eslint-disable */
import { persistData } from '@/persist';
import { createStore, useStore as baseUseStore } from 'vuex';
export var key = Symbol();
// define your own `useStore` composition function
export function useStore() {
    return baseUseStore(key);
}
export var store = createStore({
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
        getMembers: function (state) { return state.members; },
    },
    mutations: {
        setMembers: function (state, members) {
            state.members = members;
        }
    },
    actions: {
        increment: function (state, m) {
            // @ts-ignore
            var tempItem;
            this.state.members.forEach(function (item) {
                if (item.id === m.member.id) {
                    item.count = item.count + m.steps;
                    tempItem = item;
                }
            });
            if (tempItem) {
                persistData(tempItem);
            }
        },
        decrement: function (state, m) {
            if (m.member.count <= 0 || m.member.count < m.steps) {
                return;
            }
            var tempItem;
            // @ts-ignore
            this.state.members.forEach(function (item) {
                if (item.id === m.member.id) {
                    item.count = item.count - m.steps;
                    tempItem = item;
                }
            });
            if (tempItem) {
                persistData(tempItem);
            }
        }
    },
    modules: {}
});
//# sourceMappingURL=index.js.map