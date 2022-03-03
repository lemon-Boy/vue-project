const state = {
  audio: {
    id: 0,
    name: '歌名',
    singer: '',
    albumPic: '',
    location: '',
    album: ''
  },
  currentIdx: 0, // 当前位置
  playing: false, // 播放状态
  playList: [],
  songList: []
}
const getters = {
  audio: state => state.audio,
  currentIdx: state => state.currentIdx,
  playing: state => state.playing,
  playList: state => state.playList,
  songList: state => state.songList
}

const mutations = {
  play (state, audio) {
    if (audio !== undefined && audio.id !== 0) {
      state.audio.id = audio.id // id
      state.audio.singer = audio.singer // 演唱者
      state.audio.albumPic = audio.albumPic
      state.audio.name = audio.name
    }
    state.playing = true
    document.getElementById('audioPlay').play()
  },
  pause (state) {
    state.playing = false
    document.getElementById('audioPlay').pause()
  },
  playNext (state) { // 播放下一曲
    state.currentIndex++
    if (state.currentIndex > state.songList.length) {
      state.currentIndex = 1
    }
    state.audio = state.songList[state.currentIndex - 1]
  },
  playPrev (state) { // 播放上一曲
    state.currentIndex--
    if (state.currentIndex < 1) {
      state.currentIndex = state.songList.length
    }
    state.audio = state.songList[state.currentIndex - 1]
  },
  showSongList (state, songs) {
    state.songList = songs
  },
  addToList (state, audio) {
    state.playList.concat([audio])
  }
}

// const actions = {
//
// }

export default {
  state,
  getters,
  mutations
}
