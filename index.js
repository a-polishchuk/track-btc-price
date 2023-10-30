const { parseCurrentPrice } = require("./src/parseCurrentPrice");
const { savePriceToDB } = require("./src/savePriceToDB");

async function handler(event) {
  console.log("incoming event", event);

  try {
    const currentPrice = await parseCurrentPrice();
    const writeResult = await savePriceToDB(currentPrice);

    return {
      statusCode: 200,
      body: JSON.stringify({
        currentPrice,
        writeResult,
      }),
    };
  } catch (error) {
    console.error(error);
  }
}

module.exports = { handler };
