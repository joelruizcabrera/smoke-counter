<script>
/* eslint-disable */
import {defineComponent, ref} from "vue";
import {useStore} from "vuex";

export default defineComponent({
    // type inference enabled
    name: "MemberCard",
    props: {
        member: Object,
        steps: Number
    },
    data() {
        return {
            isEditing: ref(false),
            tempCountEdit: ref(0)
        }
    },
    setup() {
        const store = useStore();

        const timeConverter = (UNIX_timestamp) => {
            const date = new Date(UNIX_timestamp).toLocaleDateString("de-DE")
            const time = new Date(UNIX_timestamp).toLocaleTimeString("de-DE")
            return date + " " + time;
        }

        return {
            store,
            timeConverter
        }
    },
    mounted(){
        this.tempCountEdit = this.member.count
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
        },
        editUserCount(id) {
            switch (this.isEditing.value) {
                case true:
                    this.isEditing.value = false
                    break;
                case false:
                    this.isEditing.value = true
                    break;
            }
        }
    }
});

</script>

<template>
<div class="membercard_item">
    <img :src="member?.image" alt="name">
    <div class="membercard_item__right">
        <h2 class="membercard_item__right__name">{{member.name}}</h2>
        <div class="membercard_item__right__container">
            <div class="membercard_item__actions">
                <h2 v-html="member.name === 'Loris (Ganja)' ? '🍁' + member.count : member.count" v-if="!isEdit"></h2>
                <input type="number" v-model="tempCountEdit" v-if="isEdit">
                <div class="membercard_item__actions__buttons">
                    <button
                        class="membercard_item__actions__buttons__edit"
                        @click="editUserCount(member.id)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                    </button>
                    <button
                        class="membercard_item__actions__buttons__plus"
                        @click="increaseCount(steps)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                    </button>
                    <button
                        @click="decreaseCount(steps)"
                        class="membercard_item__actions__buttons__minus"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                    </button>
                </div>
            </div>
            <p style="text-align: right;margin:0;margin-top:.5rem">Letzte Fluppe:<br><b>{{timeConverter(member.updated)}}</b></p>
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
        flex-wrap: wrap;
        justify-content: flex-end;
        &__buttons {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
            flex-wrap: wrap;
            justify-content: flex-end;
            button {
                height: 3rem;
                aspect-ratio: 1;
                width: auto;
                font-size: 2rem;
                border-radius: .25rem;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                svg {
                    width: 1rem;
                }
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
