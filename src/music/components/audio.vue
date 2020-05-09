<template>
  <div>
    <audio :src='songval.url'
           controls='true'>
      您的浏览器不支持 audio 标签。
    </audio>
  </div>
</template>
<script>
export default {
  name: 'newAudio',
  props: ['songval']
}
</script>
<style lang="less" scoped>
</style>
