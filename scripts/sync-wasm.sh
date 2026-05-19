#!/usr/bin/env bash
# hong-ik 저장소의 GitHub Release에서 최신 WASM 산출물을 받아온다.
# docs는 InlinePlayground에서 WASM을 직접 사용할 경우에만 필요 (현재는 백엔드 API 호출이므로 불필요).
# WASM-only 마이그가 끝나면 CI에서 docs:build 전에 이 스크립트를 호출한다.
#
# 사용:
#   ./scripts/sync-wasm.sh                  # latest
#   ./scripts/sync-wasm.sh wasm-<sha>
#   WASM_DEST=docs/public ./scripts/sync-wasm.sh

set -euo pipefail

TAG="${1:-wasm-latest}"
REPO="${WASM_REPO:-hongik2023graduationproject/hong-ik}"
DEST="${WASM_DEST:-docs/public}"

echo "[sync-wasm] $REPO @ $TAG → $DEST"

mkdir -p "$DEST"

for f in hongik-wasm.js hongik-wasm.wasm; do
    url="https://github.com/$REPO/releases/download/$TAG/$f"
    echo "  - $f"
    curl -fsSL --retry 3 --retry-delay 2 -o "$DEST/$f" "$url"
done

manifest_url="https://github.com/$REPO/releases/download/$TAG/manifest.json"
if curl -fsSL --retry 1 -o "$DEST/manifest.json" "$manifest_url" 2>/dev/null; then
    echo "[sync-wasm] manifest:"
    cat "$DEST/manifest.json"
else
    echo "[sync-wasm] manifest not available (older build)"
fi

echo "[sync-wasm] done."
