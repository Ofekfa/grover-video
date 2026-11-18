#!/usr/bin/env bash
# Render the video into a NEW numbered file. Never overwrites an earlier render.
# Usage:
#   ./render.sh                         # full video -> renders/render-NN.mp4
#   ./render.sh Scene3-Superposition    # one scene  -> renders/render-NN-Scene3-Superposition.mp4
set -euo pipefail
cd "$(dirname "$0")"

COMPOSITION="${1:-GroverExplainer}"
mkdir -p renders

# Next number = highest existing render number + 1.
LAST=$(ls renders 2>/dev/null | sed -nE 's/^render-([0-9]+).*\.mp4$/\1/p' | sort -n | tail -1)
NEXT=$(printf "%02d" $((10#${LAST:-0} + 1)))
if [ "$COMPOSITION" = "GroverExplainer" ]; then
  OUT="renders/render-$NEXT.mp4"
else
  OUT="renders/render-$NEXT-$COMPOSITION.mp4"
fi
if [ -e "$OUT" ]; then
  echo "Refusing to overwrite $OUT" >&2
  exit 1
fi

npx remotion render "$COMPOSITION" "$OUT"

ffprobe -v error -show_entries stream=codec_type,codec_name -show_entries format=duration \
  -of compact "$OUT"
echo "Saved $OUT"
open "$OUT"
