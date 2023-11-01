#!/bin/bash

# Package your code and layer
zip -r nodejs.zip nodejs

# Publish the layer
aws lambda publish-layer-version \
    --layer-name TrackBtcPriceDeps \
    --compatible-runtimes nodejs18.x \
    --compatible-architectures arm64 \
    --zip-file fileb://nodejs.zip
    --query Version \
    --output text
