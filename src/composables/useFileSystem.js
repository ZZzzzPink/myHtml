import { ref } from 'vue'
import { ElMessage } from 'element-plus'

/**
 * 文件系统操作组合式函数
 * @returns {Object} { filesContent, previewFile, handleChooseFiles }
 */
export function useFileSystem() {
  const filesContent = ref('')
  const previewFile = ref(null)

  /**
   * 选择文件夹并读取内容
   */
  const handleChooseFiles = async () => {
    if (!window.showDirectoryPicker) {
      ElMessage.error('当前浏览器不支持目录选择功能')
      return
    }

    try {
      const handle = await window.showDirectoryPicker()
      await openFiles(handle)

      let fileHandle = null
      for (const child of handle.children) {
        if (child.kind === 'file') {
          fileHandle = child
          break
        }
      }

      if (!fileHandle) {
        ElMessage.warning('未找到任何文件')
        return
      }

      const file = await fileHandle.getFile()

      if (!file.type.startsWith('text/')) {
        ElMessage.warning('仅支持文本文件')
        return
      }

      const reader = new FileReader()
      reader.readAsText(file)

      reader.onload = (e) => {
        filesContent.value = e.target.result
        ElMessage.success('文件读取成功')
      }

      reader.onerror = (e) => {
        console.error('文件读取失败:', e.target.error)
        ElMessage.error('文件读取失败,请检查文件格式')
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        ElMessage.error('目录选择失败: ' + error.message)
      }
    }
  }

  /**
   * 递归打开文件夹
   * @param {FileSystemHandle} filePaths - 文件路径句柄
   */
  const openFiles = async (filePaths) => {
    if (!filePaths.kind || filePaths.kind === 'file') {
      return
    }

    const entries = await filePaths.values()
    filePaths.children = []

    for await (const entry of entries) {
      filePaths.children.push(entry)
      await openFiles(entry)
    }
  }

  return {
    filesContent,
    previewFile,
    handleChooseFiles
  }
}