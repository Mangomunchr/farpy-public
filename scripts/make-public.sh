#!/usr/bin/env bash
set -euo pipefail
SRC=/etc/nginx
OUT=public
mkdir -p "$OUT/nginx/snippets"

sanitize() {
  sed -E \
    -e 's/api\.farpy\.com/api.example.com/g' \
    -e '/x-health-key:/Id' -e '/x-front-key:/Id' \
    -e 's/access_log .*;//g' -e 's/error_log .*;//g'
}
sanitize < "$SRC/snippets/farpy_api_extras.conf" > "$OUT/nginx/snippets/farpy_api_extras.conf"
echo "wrote: $OUT/nginx/snippets/farpy_api_extras.conf"
