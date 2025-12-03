import request from "@/api/request"

const MUSIC_API_BASE = "https://music-dl.sayqz.com/api/"

export const playerApi = {
    /**
     * 获取歌曲基本信息
     * @param {string} source - 音乐平台 (netease/kuwo/qq)
     * @param {string} id - 歌曲ID
     */
    async getSongInfo(source, id) {
        return request({
            url: MUSIC_API_BASE,
            method: "get",
            data: { source, id, type: "info" },
        })
    },

    /**
     * 获取音乐文件链接
     * @param {string} source - 音乐平台 (netease/kuwo/qq)
     * @param {string} id - 歌曲ID
     * @param {string} br - 音质 (128k/320k/flac)
     */
    async getMusicUrl(source, id, br = "320k") {
        const { data } = await this.getSongInfo(source, id)
        return {
            data: data.url,
        }
        // return request({
        //   url: MUSIC_API_BASE,
        //   method: 'get',
        //   data: { source, id, type: 'url', br }
        // })
    },

    /**
     * 获取专辑封面
     * @param {string} source - 音乐平台 (netease/kuwo/qq)
     * @param {string} id - 歌曲ID
     */
    async getAlbumCover(source, id) {
        return request({
            url: MUSIC_API_BASE,
            method: "get",
            data: { source, id, type: "pic" },
        })
    },

    /**
     * 获取歌词
     * @param {string} source - 音乐平台 (netease/kuwo/qq)
     * @param {string} id - 歌曲ID
     */
    async getLyrics(source, id) {
        return request({
            url: MUSIC_API_BASE,
            method: "get",
            data: { source, id, type: "lrc" },
        })
    },
}
