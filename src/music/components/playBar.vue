<template>
  <div class="voicebox center">
      <div class="songname likefont c-white largefont marquee">
        <div class="marquee-wrap">
          <span class="marquee-content">
            {{audio.name}}
          </span>
        </div>
      </div>
      <p class="author likefont mediumfont">{{audio.singer}}</p>
      <div class="songImgdiv">
        <img ref="albumpic" @click="pauseSong" class="songImg" :src="audio.albumPic" />
      </div>
      <audio id="audioPlay" :src='audio.location'
           controls='true'>
        您的浏览器不支持 audio 标签。
      </audio>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'playBar',
  data () {
    return {
      audioDetail: {}
    }
  },
  computed: {
    ...mapGetters([
      'audio',
      'playing'
    ])
  },
  methods: {
    ...mapMutations([
      'play',
      'pause',
      'playNext'
    ]),
    pauseSong () {
      if (this.playing) {
        this.pause()
        this.$refs.albumpic.classList.add('spin-end')
        console.log(this.$refs.albumpic.classList)
      } else {
        this.play()
        this.$refs.albumpic.classList.remove('spin-end')
      }
    }
  },
  created () {
    console.log(this.audio)
    // 获取歌曲音源location
    if (this.audio.id !== 0) {
      this.$api.singStatusApi.getSongUrl(this.audio.id).then(res => {
        if (res.data.code === 200) {
          console.log(res.data.data[0])
          this.audioDetail = res.data.data[0]
          this.audio.location = this.audioDetail.url
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.songname {
  margin: 5vh 20px;
  overflow: hidden;
}
.marquee {
  .marquee-wrap{
    width: 100%;
    animation: marquee-wrap 10s infinite linear;
    .marquee-content{
      float: left;
      white-space: nowrap;
      min-width: 100%;
      animation: marquee-content 10s infinite linear;
    }
  }
}
@keyframes marquee-wrap {
  0%,
  25%{
    transform: translateX(0);
  }
  75%,
  100%{
    transform: translateX(100%);
  }
}
@keyframes marquee-content {
  0%,
  25%{
    transform: translateX(0);
  }
  75%,
  100%{
    transform: translateX(-100%);
  }
}
.songImgdiv{
 .songImg {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    transition: 5s;
    animation: songimg 20s linear infinite; // 指定旋转速度及动画
  }
  .spin-end{
    animation-play-state: paused;
  }
}
@keyframes songimg {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
