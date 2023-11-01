#!/bin/bash

cd ./lambda 
zip -r lambda.zip .

aws lambda create-function --function-name trackBitcoinPrice \
  --handler index.handler \
  --layers arn:aws:lambda:eu-north-1:875476570512:layer:TrackBtcPriceDeps:3 \
  --zip-file fileb://lambda.zip \
  --runtime nodejs18.x \
  --role arn:aws:iam::875476570512:role/trackBitcoinPrice-role-gsgu51pb

rm lambda.zip

cd ..