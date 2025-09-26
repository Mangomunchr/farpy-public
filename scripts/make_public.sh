#!/usr/bin/env bash
set -euo pipefail
rm -rf public && mkdir -p public
# tiny, non-sensitive payload for the public bundle
date -u +"%Y-%m-%dT%H:%M:%SZ" | awk '{print "{ \"ok\":true, \"ts\":\""$0"\" }"}' > public/health.json
printf "farpy public artifacts (auto-built)\n" > public/README.txt
