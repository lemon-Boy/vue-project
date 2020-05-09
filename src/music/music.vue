<template>
  <div class="box">
    <input type="text"
           placeholder="Search" />
    <div class="title flex around mt">
      <button type="button"></button>
      <p></p>
      <button type="button"></button>
    </div>
    <div v-for="(index,item) in info"
         :key="item.id"
         class="voicebox center">
      <p class="songname likefont c-white largefont">{{info[item].name}}</p>
      <p class="author likefont mediumfont">{{info[item].artists[0].name}}</p>
      <img class="songphoto"
           :src="info[item].album.picUrl" />
      <!-- <audio :src='info[item].url'
             controls='true'>
        您的浏览器不支持 audio 标签。
      </audio> -->
      <newAudio :songval='info[item]'></newAudio>
    </div>
  </div>
</template>
<script>
import newAudio from './components/audio'
export default {
  name: 'music',
  components: { newAudio },
  data () {
    return {
      info: null
    }
  },
  mounted () {
    this.$axios({
      method: 'get',
      url: '/api/search?keyword=周杰伦' // 接口地址
    })
      .then(response => {
        this.info = response.data.data.list.splice(0, 1)
        console.log(this.info)
      })
      .catch(error => { console.log(error, 'error', this.errored = true) }) // 失败的返回
      .finally(() => { this.loading = false })
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
.songname {
  margin: 5vh 0;
}
.songphoto {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  transition: 5s;
  animation: songphoto 20s linear infinite; // 指定旋转速度及动画
}
@keyframes songphoto {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
