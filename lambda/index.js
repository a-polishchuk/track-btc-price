const { parseCurrentPrice } = require("./parseCurrentPrice");
const { savePriceToDB } = require("./savePriceToDB");

async function handler({ id, source }) {
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
