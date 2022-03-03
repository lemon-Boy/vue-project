<template>
  <div class="sing-list" v-if="visibility">
    <v-single-card :data="data" v-for="(data, index) in songs" :key="index" @getListState="changeListView"></v-single-card>
  </div>
</template>

<script>
import vSingleCard from '../card/searchCard/singleCard'
export default {
  name: 'singlist',
  data () {
    return {
      visibility: false
    }
  },
  props: {
    songs: {
      type: Array,
      default: () => []
    }
  },
  components: {vSingleCard},
  methods: {
    show () {
      this.visibility = true
    },
    changeListView (state) {
      this.visibility = state
    }
  }
}
</script>

<style scoped>

</style>
