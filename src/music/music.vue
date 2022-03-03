<template>
  <div class="box">
    <input type="text" placeholder="Search" v-model="searchKeyword" @keyup.enter="search(searchKeyword)"/>
    <div class="title flex around mt">
      <button type="button"></button>
      <p></p>
      <button type="button"></button>
    </div>
<!--    <div v-for="(index,item) in info"-->
<!--         :key="item.id"-->
<!--         class="voicebox center">-->
<!--      <p class="songname likefont c-white largefont">{{info[item].name}}</p>-->
<!--      <p class="author likefont mediumfont">{{info[item].artists[0].name}}</p>-->
<!--      <img class="songphoto"-->
<!--           :src="info[item].album.picUrl" />-->
<!--      <newAudio :songval='info[item]'></newAudio>-->
<!--    </div>-->
    <play-bar></play-bar>
    <singlist :songs="searchResult.songs" ref="bottomSheet"></singlist>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import playBar from './components/playBar'
import singlist from './singList/singlist'
export default {
  name: 'music',
  components: { singlist, playBar },
  data () {
    return {
      searchResult: {},
      info: null,
      searchKeyword: '你不爱我我就爱别人'
    }
  },
  mounted () {
    // this.$axios({
    //   method: 'get',
    //   // url: '/api/search?keyword=周杰伦' // 接口地址
    //   url: '/api?data=&msg=周杰伦&n='
    // })
    //   .then(response => {
    //     this.info = response.data.data.list.splice(0, 1)
    //     console.log(this.info)
    //   })
    //   .catch(error => { console.log(error, 'error', this.errored = true) }) // 失败的返回
    //   .finally(() => { this.loading = false })
  },
  methods: {
    ...mapMutations([
      'play',
      'pause',
      'playNext',
      'showSongList'
    ]),
    search (param) {
      console.log(param)
      this.$api.singStatusApi.search(param).then(res => {
        if (res.data.code === 200) {
          console.log(res.data.result.songs, res.data.result.songCount)
          this.searchResult = res.data.result
          this.showList(res.data.result)
        }
      })
    },
    showList (params) {
      // this.info = params.songs
      this.showSongList(params.songs)
      this.$refs.bottomSheet.show()
    }
  },
  beforeUpdate () {
    console.log('beforeupdate', this.$store.state)
  }
}
</script>
<style lang="less" scoped>
.box {
  height: 100%;
  background-color: #454859;
  color: white;
}
input {
  outline: none;
  border: none;
  width: 80%;
  height: 30px;
  padding: 0 10px;
  margin-top: 2em;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: inset 2px 2px 6px #babecc;
  transition: all 0.2s ease-in-out;
  &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px white;
  }
}
button {
  width: 35px;
  height: 35px;
  border: none;
  outline: none;
  border-radius: 20px;
  background: linear-gradient(315deg, #454859, #454859);
  box-shadow: -3px -3px 22px #1c1d24, 3px 3px 22px #6e738e;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #454859;
    box-shadow: -2px -2px 10px #1c1d24, 2px 2px 10px #6e738e;
  }
  &:active {
    background: linear-gradient(315deg, #3e4150, #4a4d5f);
    box-shadow: inset 1px 1px 5px #1c1d24, inset 1px 1px 5px #6e738ecc;
  }
}
</style>
