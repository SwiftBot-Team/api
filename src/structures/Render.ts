import puppeteer from 'puppeteer';

export default class Render {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async render() {
    const { page, browser } = await this.getPage();

    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(this.url, { waitUntil: 'networkidle2', timeout: 0 });

    const screenshot = await page.screenshot({ type: 'jpeg' });

    await browser.close();

    return screenshot;
  }

  private async getPage() {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=PT-BR,pt-br'],
      ignoreDefaultArgs: ['--disable-extensions'],
    });

    const page = await browser.newPage();

    return {
      page,
      browser,
    };
  }
}
