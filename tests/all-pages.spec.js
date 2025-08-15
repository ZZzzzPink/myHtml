const { test, expect } = require('@playwright/test');

const routes = [
  { path: '/', name: '首页' },
  { path: '/n', name: '数字翻牌' },
  { path: '/r', name: '路由测试' },
  { path: '/t', name: '打地鼠游戏' },
  { path: '/progressBar', name: '进度条' },
  { path: '/luckyDraw', name: '抽奖' },
];

test.describe('全站页面跳转与功能检测', () => {
  for (const route of routes) {
    test(`${route.name}（${route.path}）页面跳转与功能`, async ({ page }) => {
      const errors = [];
      page.on('pageerror', (err) => errors.push(err.message));
      page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
      });
      await page.goto(route.path);
      // 检查页面主体可见
      await expect(page.locator('body')).toBeVisible();
      // 针对不同页面做简单功能检测
      if (route.path === '/') {
        // 首页主要模块
        await expect(page.locator('.theme-section')).toBeVisible();
        await expect(page.locator('.file-section')).toBeVisible();
        await expect(page.locator('.component-section')).toBeVisible();
        await expect(page.locator('.navigation-section')).toBeVisible();
        await expect(page.locator('.list-section')).toBeVisible();
        await expect(page.locator('.media-section')).toBeVisible();
        await expect(page.locator('.tree-section')).toBeVisible();
        await expect(page.locator('.carousel-section')).toBeVisible();
        await expect(page.locator('.layout-section')).toBeVisible();
        await expect(page.locator('.lazy-load-section')).toBeVisible();
      }
      if (route.path === '/n') {
        await expect(page.locator('.flapper-container')).toBeVisible();
      }
      if (route.path === '/r') {
        await expect(page.locator('p')).toContainText(['路由测试','vue3']);
      }
      if (route.path === '/t') {
        await expect(page.locator('.game-board')).toBeVisible();
        await expect(page.locator('.score-board')).toBeVisible();
      }
      if (route.path === '/progressBar') {
        await expect(page.locator('.progress-container')).toBeVisible();
        await expect(page.locator('.progress-ring')).toBeVisible();
      }
      if (route.path === '/luckyDraw') {
        await expect(page.locator('.container')).toBeVisible();
      }
      // 检查是否有严重报错（忽略媒体加载失败类报错）
      const filtered = errors.filter(e => !e.includes('MEDIA_ERR_SRC_NOT_SUPPORTED') && !e.includes('media could not be loaded'));
      expect(filtered, `${route.name} 页面有console或运行时报错`).toEqual([]);
    });
  }
}); 