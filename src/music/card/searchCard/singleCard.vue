<template>
  <li class="single-card" @click="playAudio(data)">
    <p class="song-name" style="-webkit-box-orient: vertical;">{{data.name}}<span class="transNames">{{songNameTrans}}</span></p>
    <p class="source">
      <span class="singer">{{data.artists[0].name}}-</span>
      <span class="album">{{data.album.name}}</span>
      <span class="transNames">{{albumTrans}}</span>
    </p>
  </li>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'v-single-card',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    playAudio (song) {
      this.$emit('getListState', false)
      let audio = {}
      audio.id = song.id // id
      audio.singer = song.artists[0].name // 演唱者
      audio.albumPic = song.album.artist.img1v1Url
      audio.name = song.name
      // 通过Vuex改变状态
      this.$store.commit('addToList', audio)
      // this.$store.dispatch('getSong', audio.id)
      this.$store.commit('play', audio)
      // console.log(document.getElementById('audioPlay'), this.$store.state.musicInfo.audio)
    }
  },
  computed: {
    ...mapGetters([
      'songList'
    ]),
    songNameTrans () {
      if (this.data.transNames) {
        return '(' + this.data.transNames[0] + ')'
      } else {
        return ''
      }
    },
    albumTrans () {
      if (this.data.album && this.data.album.transNames) {
        return '(' + this.data.album.transNames[0] + ')'
      } else {
        return ''
      }
    }
  }
}
</script>
<!--<style lang="stylus" rel="stylesheet/stylus" scoped>-->
<!--    @import 'singleCard.styl';-->
<!--</style>-->
