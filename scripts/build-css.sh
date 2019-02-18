#!/bin/sh

ns="node-sass --importer node_modules/node-sass-magic-importer/dist/cli.js"

# transpile scss to css
# custom importer for @import '~some-node-module'
$ns src/styles/index.scss css/index.css -q