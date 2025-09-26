#!/usr/bin/env bash
set -euo pipefail
rm -rf public
mkdir -p public

# Include ONLY safe, public artifacts. Adjust as you like.
# Example: publish the health payload and a README
if [[ -f /opt/farpy/www/health.json ]]; then
  cp -f /opt/farpy/www/health.json public/
fi
printf "farpy public artifacts (auto-built)\n" > public/README.txt
