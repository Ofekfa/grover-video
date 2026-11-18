#!/usr/bin/env bash
# Render the video (narration is part of the composition) into renders/<version>.mp4
# Usage: ./render.sh v0.3
set -euo pipefail
cd "$(dirname "$0")"

VERSION="${1:?usage: ./render.sh <version>, e.g. ./render.sh v0.3}"
mkdir -p renders

npx remotion render TestClip "renders/$VERSION.mp4"

ffprobe -v error -show_entries stream=codec_type,codec_name -show_entries format=duration \
  -of compact "renders/$VERSION.mp4"
echo "Saved renders/$VERSION.mp4"
open "renders/$VERSION.mp4"
