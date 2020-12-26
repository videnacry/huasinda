const puppeteer = require('puppeteer');
 
exports.show = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const [img] = await page.$$eval('article img[src]', imgs => imgs.map(img => img.getAttribute('src')));
  const [icon] = await page.$$eval('link[rel=icon]', icons => icons.map(icon => icon.href));
  const img_path = img ? img : icon;
  const [header] = await page.$$eval('article h1', txts => txts.map(txt => txt.textContent));
  const [title] = await page.$$eval('title', txts => txts.map(txt => txt.textContent));
  const name = header ? header : title;
  const [paragraph] = await page.$$eval('article p', txts => txts.map(txt => txt.textContent));
  const [description] = await page.$$eval('meta[name=description]', txts => txts.map(txt => txt.getAttribute('content')));
  const content = paragraph ? paragraph : description;
  await browser.close();
  return {img_path, name, content, url};
}