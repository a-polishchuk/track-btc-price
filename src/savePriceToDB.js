const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

async function savePriceToDB(event) {
  const { price, requestId, requestSource } = event;
  const dbClient = new DynamoDBClient({ region: "eu-north-1" });
  const nowDate = new Date();

  const command = new PutItemCommand({
    TableName: "ParsedBitcoinPrices",
    Item: {
      timestamp: { N: nowDate.getTime().toString() },
      price: { N: price.toString() },
      date: { S: nowDate.toISOString() },
      requestId: { S: requestId ?? "-missing-" },
      requestSource: { S: requestSource ?? "-missing-" },
    },
  });

  return dbClient.send(command);
}

module.exports = { savePriceToDB };
