#!/usr/bin/env bash
# Render a version of the video (narration is part of the composition).
# Usage:
#   ./render.sh v0.5                 # full video  -> renders/v0.5.mp4
#   ./render.sh v0.5 Scene3-Superposition   # one scene -> renders/v0.5-Scene3-Superposition.mp4
set -euo pipefail
cd "$(dirname "$0")"

VERSION="${1:?usage: ./render.sh <version> [composition], e.g. ./render.sh v0.5}"
COMPOSITION="${2:-GroverExplainer}"
OUT="renders/$VERSION.mp4"
[ "$COMPOSITION" != "GroverExplainer" ] && OUT="renders/$VERSION-$COMPOSITION.mp4"
mkdir -p renders

npx remotion render "$COMPOSITION" "$OUT"

ffprobe -v error -show_entries stream=codec_type,codec_name -show_entries format=duration \
  -of compact "$OUT"
echo "Saved $OUT"
open "$OUT"
