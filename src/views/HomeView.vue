
<script lang="ts">
import { defineComponent } from 'vue';
import MemberCard from '@/components/MemberCard.vue';
import { useStore } from 'vuex'


export default defineComponent({
    name: 'HomeView',
    components: {
        MemberCard
    },
    setup() {
        const store = useStore();
        const members = store.state.members;

        return {
            members
        }
    }
});
</script>

<template>
  <div class="home">
      <h1><b>Heilig Geist</b><br>🚬Kippen-Counter🚬</h1>
      <div class="home__memmber__listing">
          <MemberCard v-for="member in members" :key="member" :member="member"></MemberCard>
      </div>
  </div>
</template>

<style lang="scss">
.home__memmber__listing {
    display: flex;
    flex-direction: column;
    gap: .75rem;
}
</style>
