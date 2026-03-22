#!/usr/bin/env node
/**
 * Renders https://throwawayj.github.io/ to PDF with the navigation bar hidden.
 * Usage: node print-resume.js
 * Output: ~/Downloads/resume.pdf
 */

const puppeteer = require('puppeteer');
const path = require('path');
const os = require('os');

const url = 'https://throwawayj.github.io/';
const outputPath = path.join(os.homedir(), 'Downloads', 'resume.pdf');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.evaluate(() => {
      const nav = document.getElementById('navbar');
      if (nav) nav.style.display = 'none';
    });
    await page.pdf({
      path: outputPath,
      printBackground: true,
      margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' },
    });
    console.log('PDF written to', outputPath);
  } finally {
    await browser.close();
  }
})();
