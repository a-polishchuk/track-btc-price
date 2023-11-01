#!/bin/bash

cd ./lambda && zip -r ../lambda.zip . && cd .. 

aws lambda update-function-code --function-name trackBitcoinPrice --zip-file fileb://lambda.zip
