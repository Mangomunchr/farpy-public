#!/usr/bin/env bash
set -euo pipefail
rm -rf public
mkdir -p public
# include ONLY safe, public artifacts (adjust as you like)
cp -a /opt/farpy/www/health.json public/ 2>/dev/null || true
printf "Farpy public artifacts (auto-built)\n" > public/README.txt
