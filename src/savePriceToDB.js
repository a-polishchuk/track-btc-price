const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

async function savePriceToDB(price) {
  const dbClient = new DynamoDBClient({ region: "eu-north-1" });
  const nowDate = new Date();

  const command = new PutItemCommand({
    TableName: "ParsedBitcoinPrices",
    Item: {
      timestamp: { N: nowDate.getTime().toString() },
      price: { N: price.toString() },
      date: { S: nowDate.toISOString() },
    },
  });

  return dbClient.send(command);
}

module.exports = { savePriceToDB };
