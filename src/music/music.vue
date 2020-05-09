<template>
  <div class="box">
    <input type="text"
           placeholder="Search" />
    <div class="title flex around">
      <button type="button"></button>
      <p></p>
      <button type="button"></button>
    </div>
    <div v-for="(index,item) in info"
         :key="item.id"
         class="voicebox flex">
      <!-- <p>{{info[item].name}}</p> -->
      <!-- <img :src="info[item].album.picUrl"
           width="40px"
           height="40px" />
      <audio :src='info[item].url'
             controls='true'>
        您的浏览器不支持 audio 标签。
      </audio> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'music',
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
        console.log(response.data.data)
      })
      .catch(error => { console.log(error, 'error', this.errored = true) }) // 失败的返回
      .finally(() => { this.loading = false })
  }
}
</script>
<style lang="less" scoped>
.box {
  height: 100%;
  background-color: #dbebf1a1;
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
}
input:focus {
  box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px white;
}
button {
  width: 35px;
  height: 35px;
  border: none;
  outline: none;
  border-radius: 20px;
  background: linear-gradient(45deg, #ddfbff, #bad4e3);
  box-shadow: 10px 10px 25px #99aeba, -10px -10px 25px #ffffff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 6px #cee5ef, 2px 2px 6px #dcdcdc;
  }
  &:active {
    box-shadow: 2px 2px 15px #e8f2f6, 2px 2px 15px #c7e3ed;
  }
}
</style>
