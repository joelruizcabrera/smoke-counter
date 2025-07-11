
<script lang="ts">
import { defineComponent, ref } from 'vue';
import MemberCard from '@/components/MemberCard.vue';
import { useStore } from 'vuex'
import {getUsers} from "@/persist";


export default defineComponent({
    name: 'HomeView',
    components: {
        MemberCard
    },
    data() {
        return {
            steps: ref(1),
            members: ref([])
        }
    },
    setup() {
        const store = useStore();
        return {
            store
        }
    },
    async mounted() {
        const members = await getUsers();
        this.members = members
    }
});
</script>

<template>
  <div class="home" style="padding-bottom: 5rem">
      <h1><b>Heilig Geist</b><br>🚬Kippen-Counter🚬</h1>
      <div class="home__memmber__listing">
          <MemberCard v-for="member in members" :key="member" :member="member" :steps="steps"></MemberCard>
      </div>
      <input type="number" v-model="steps" class="step_input">
  </div>
</template>

<style lang="scss">
.home__memmber__listing {
    display: flex;
    flex-direction: column;
    gap: .75rem;
}

.step_input {
    position: fixed;
    bottom: 2rem;
    left: 0;
    right: 0;
    max-width: 10rem;
    margin: 0 auto;
    z-index: 1;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: .5rem;
    box-shadow: 0px 0px 13px 10px #fff;
}
</style>
