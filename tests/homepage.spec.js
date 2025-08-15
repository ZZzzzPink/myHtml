const { test, expect } = require('@playwright/test');

test.describe('首页自动化检测', () => {
  test('页面应能正常加载且无严重报错', async ({ page }) => {
    // 捕获console错误
    const errors = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/');
    // 检查页面标题或主要元素
    await expect(page).toHaveTitle(/V3|vue|demo|首页/i);
    // 检查页面主要内容是否渲染
    await expect(page.locator('body')).toBeVisible();
    // 检查常见模块
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

    // 检查是否有严重报错
    expect(errors, '页面有console或运行时报错').toEqual([]);
  });
}); 