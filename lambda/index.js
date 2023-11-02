import { parseCurrentPrice } from "./parseCurrentPrice.js";
import { savePriceToDB } from "./savePriceToDB.js";

export async function handler({ id, source }) {
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
