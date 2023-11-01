const { parseCurrentPrice } = require("./parseCurrentPrice");
const { savePriceToDB } = require("./savePriceToDB");

async function handler(event) {
  const { id, source } = event;
  try {
    const currentPrice = await parseCurrentPrice();
    await savePriceToDB({
      price: currentPrice,
      requestId: id,
      requestSource: source,
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { handler };
