import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

export async function savePriceToDB({ price, requestId, requestSource }) {
  const dbClient = new DynamoDBClient({
    region: process.env.AWS_REGION, // this is one of the default env variables
  });
  const nowDate = new Date();

  const command = new PutItemCommand({
    TableName: process.env.TARGET_TABLE_NAME,
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
