import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';

await scrape({
    urls: ['https://www.buquetrece.com/'],
    directory: './hugo',
    plugins: [ 
      new PuppeteerPlugin({
        launchOptions: { headless: true }, /* optional */
        scrollToBottom: { timeout: 100000, viewportN: 10 }, /* optional */
        blockNavigation: true, /* optional */
      })
    ]
});