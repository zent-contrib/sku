#!/bin/sh

# Use commonjs
find lib -type f -exec sed -i '' 's/zent\/es\//zent\/lib\//' {} \;