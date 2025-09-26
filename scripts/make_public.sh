#!/usr/bin/env bash
set -euo pipefail
rm -rf public
mkdir -p public

# Put only non-sensitive, static bits here. Example payload:
date -u +"%Y-%m-%dT%H:%M:%SZ" | awk '{print "{\042ok\042:true,\042ts\042:\042"$0"\042}"}' > public/health.json

# A tiny readme just so the folder is never empty
printf "farpy public artifacts (auto-built)\n" > public/README.txt
