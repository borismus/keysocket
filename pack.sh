#!/usr/bin/env bash

# Run this script from repository root directory (where README.md lives)

pushd extension
zip -r ../keysocket.zip ./*
popd
