// tests/home.visual.spec.js
import { test, expect } from '@playwright/test'

test('homepage visual', async ({ page }) => {
  await page.goto('/')
  await page.addStyleTag({ content: '* { transition: none !important; animation: none !important; }' })
  await expect(page).toHaveScreenshot('homepage.png', {
    maxDiffPixelRatio: 0.02,
  })
})

test('menupage visual', async ({ page }) => {
  await page.goto('#/menu')
  await page.addStyleTag({ content: '* { transition: none !important; animation: none !important; }' })
  await expect(page).toHaveScreenshot('menupage.png', {
    maxDiffPixelRatio: 0.02,
  })
})

test('logrospage visual', async ({ page }) => {
  await page.goto('#/logros')
  await page.addStyleTag({ content: '* { transition: none !important; animation: none !important; }' })
  await expect(page).toHaveScreenshot('logrospage.png', {
    maxDiffPixelRatio: 0.02,
  })
})

test('historypage visual', async ({ page }) => {
  await page.goto('#/historia')
  await page.addStyleTag({ content: '* { transition: none !important; animation: none !important; }' })
  await expect(page).toHaveScreenshot('historypage.png', {
    maxDiffPixelRatio: 0.02,
  })
})
