/**
 * 解析歌词
 * 支持两种格式：
 * 1. JSON格式: {"t":1000,"c":[{"tx":"歌词内容"}]}
 * 2. LRC格式: [00:28.080]歌词内容
 */
export function parseLyrics(lyricsText) {
  if (!lyricsText) return []
  
  const lines = lyricsText.split('\n').filter(line => line.trim())
  const parsedLyrics = []
  
  for (const line of lines) {
    // 尝试解析JSON格式
    if (line.trim().startsWith('{')) {
      try {
        const json = JSON.parse(line)
        if (json.t !== undefined && json.c) {
          // 提取文本内容
          const text = json.c.map(item => item.tx).join('')
          if (text.trim()) {
            parsedLyrics.push({
              time: json.t / 1000, // 转换为秒
              text: text.trim()
            })
          }
        }
      } catch (e) {
        // 忽略无法解析的JSON
      }
    }
    // 解析带详细时间戳的格式 [19530,4120](19530,490,0)他(20020,290,0)留...
    else if (line.match(/^\[\d+,\d+\]/)) {
      const timeMatch = line.match(/^\[(\d+),\d+\]/)
      if (timeMatch) {
        const time = parseInt(timeMatch[1]) / 1000 // 转换为秒
        // 提取所有汉字/文本内容
        const text = line.replace(/^\[\d+,\d+\]/, '').replace(/\(\d+,\d+,\d+\)/g, '').trim()
        if (text) {
          parsedLyrics.push({ time, text })
        }
      }
    }
    // 解析标准LRC格式 [00:28.080]歌词内容
    else if (line.includes('[') && line.includes(']')) {
      const timeMatch = line.match(/\[(\d{2}):(\d{2})\.(\d{2,3})\]/)
      if (timeMatch) {
        const minutes = parseInt(timeMatch[1])
        const seconds = parseInt(timeMatch[2])
        const milliseconds = parseInt(timeMatch[3].padEnd(3, '0'))
        const time = minutes * 60 + seconds + milliseconds / 1000
        
        const text = line.replace(/\[\d{2}:\d{2}\.\d{2,3}\]/, '').trim()
        if (text) {
          parsedLyrics.push({ time, text })
        }
      }
    }
  }
  
  // 按时间排序
  parsedLyrics.sort((a, b) => a.time - b.time)
  
  return parsedLyrics
}

/**
 * 根据当前时间获取当前歌词索引
 */
export function getCurrentLyricIndex(lyrics, currentTime) {
  if (!lyrics || lyrics.length === 0) return -1
  
  for (let i = lyrics.length - 1; i >= 0; i--) {
    if (currentTime >= lyrics[i].time) {
      return i
    }
  }
  
  return -1
}