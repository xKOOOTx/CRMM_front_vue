<template>
  <div id="app">
    <v-rating
      :users_data="USERS"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import VRating from '@/components/v-rating'

export default {
  name: 'App',
  components: {
    VRating
  },
  computed: {
    ...mapGetters([
      'USERS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_USERS_FROM_API'
    ])
  },
  mounted () {
    this.GET_USERS_FROM_API()
  }
}
</script>

<style lang="scss">
@import "assets/style/style";

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
