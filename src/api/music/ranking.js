import request from '@/api/request'

const MUSIC_API_BASE = 'https://music-dl.sayqz.com/api/'

export const rankingApi = {
  /**
   * 获取排行榜列表
   * @param {string} source - 音乐平台 (netease/kuwo/qq)
   */
  async getTopLists(source) {
    return request({
      url: MUSIC_API_BASE,
      method: 'get',
      data: { source, type: 'toplists' }
    })
  },

  /**
   * 获取排行榜歌曲
   * @param {string} source - 音乐平台 (netease/kuwo/qq)
   * @param {string} id - 排行榜ID
   */
  async getTopListSongs(source, id) {
    return request({
      url: MUSIC_API_BASE,
      method: 'get',
      data: { source, id, type: 'toplist' }
    })
  }
}