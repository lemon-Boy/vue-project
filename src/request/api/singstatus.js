// 歌曲状态管理
import axios from 'axios'
const singStatusApi = {
  playSing (param) {
    // return axios.get('/api/search?keyword=周杰伦', param)
    // return axios.get('/api/cloudsearch?keywords=海阔天空', param)
  },
  search (param) {
    return axios.get('/api/search?keywords=' + param)
  },
  getSongDetail (param) {
    // param可传多个并用逗号隔开
    return axios.get('/api/song/detail?ids=' + param)
  },
  getSongUrl (param) {
    // param可传多个并用逗号隔开
    return axios.get('/api/song/url?id=' + param)
  }
}
export default singStatusApi
