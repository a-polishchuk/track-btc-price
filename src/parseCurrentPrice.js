const { JSDOM } = require("jsdom");
const PRICE_XPATH = '//*[@id="__APP"]/section/div/div[2]/div[4]/div[1]/div[1]';

async function parseCurrentPrice() {
  const dom = await JSDOM.fromURL("https://www.binance.com/en/price/bitcoin");
  const document = dom.window.document;

  const { singleNodeValue } = document.evaluate(
    PRICE_XPATH,
    document,
    null,
    dom.window.XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );

  const priceString = singleNodeValue.textContent
    .substring(2)
    .replace(/,/g, "");

  return parseFloat(priceString);
}

module.exports = { parseCurrentPrice };
