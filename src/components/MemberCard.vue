<script>
/* eslint-disable */
import {defineComponent} from "vue";
import {useStore} from "vuex";

export default defineComponent({
    // type inference enabled
    name: "MemberCard",
    props: {
        member: Object,
        steps: Number
    },
    setup() {
        const store = useStore();
        return {
            store
        }
    },
    methods: {
        increaseCount() {
            this.store.dispatch(
                'increment',
                {
                    member: this.member,
                    steps: this.steps
                }
            )
            this.member.count = this.member.count + this.steps;
        },
        decreaseCount() {
            if(this.member.count <= 0 || this.member.count < this.steps) {return;}
            this.store.dispatch(
                'decrement',
                {
                    member: this.member,
                    steps: this.steps
                }
            )
            this.member.count = this.member.count - this.steps;
        }
    }
});

</script>

<template>
<div class="membercard_item">
    <img :src="member?.image" alt="name">
    <div class="membercard_item__right">
        <h2 class="membercard_item__right__name">{{member.name}}</h2>
        <div class="membercard_item__actions">
            <h2 v-html="member.name === 'Loris' ? '🍁' + member.count : member.count"></h2>
            <div class="membercard_item__actions__buttons">
                <button
                    class="membercard_item__actions__buttons__plus"
                    @click="increaseCount(steps)"
                >+</button>
                <button
                    @click="decreaseCount(steps)"
                    class="membercard_item__actions__buttons__minus"
                >-</button>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
h2 {
    margin: 0
}
.membercard_item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .5rem;
    padding: .75rem;
    background-color: #e9edf5;
    border-radius: 8px;
    box-shadow: 1px 2px 8px #ccc;
    border: 1px solid #fff;
    &__right {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: .25rem;
    }
    &__actions {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        &__buttons {
            display: flex;
            flex-direction: row;
            column-gap: .5rem;
            button {
                height: 3rem;
                aspect-ratio: 1;
                width: auto;
                font-size: 2rem;
                border-radius: .25rem;
                color: #fff;
            }
            &__plus {
                background: linear-gradient(180deg, #49da17, #19ab0e);
                border: 2px solid #49da17;
            }
            &__minus {
                background: linear-gradient(180deg, #da1734, #a9162c);
                border: 2px solid #da1734;
            }
        }
    }
}
</style>
