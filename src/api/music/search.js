import request from '@/api/request'

const MUSIC_API_BASE = 'https://music-dl.sayqz.com/api/'

export const searchApi = {
  /**
   * 验证搜索关键词
   * @param {string} keyword - 搜索关键词
   * @throws {Error} 关键词无效时抛出错误
   * @returns {string} 验证后的关键词
   */
  validateKeyword(keyword) {
    if (!keyword || typeof keyword !== 'string' || keyword.trim().length === 0) {
      throw new Error('搜索关键词不能为空')
    }
    if (keyword.trim().length < 2) {
      throw new Error('搜索关键词至少需要2个字符')
    }
    return keyword.trim()
  },

  /**
   * 搜索音乐
   * @param {string} source - 音乐平台 (netease/kuwo/qq) 必传
   * @param {string} keyword - 搜索关键词
   * @param {number} limit - 返回结果数量限制
   */
  async search(source, keyword, limit = 20) {
    const validatedKeyword = this.validateKeyword(keyword)
    
    if (!source || !['netease', 'kuwo', 'qq'].includes(source)) {
      throw new Error('source参数必须是 netease、kuwo 或 qq')
    }
    
    return request({
      url: MUSIC_API_BASE,
      method: 'get',
      data: { source, type: 'search', keyword: validatedKeyword, limit }
    })
  }
}