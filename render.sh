#!/usr/bin/env bash
# Render the video with narration into renders/<version>.mp4
# Usage: ./render.sh v0.2
set -euo pipefail
cd "$(dirname "$0")"

VERSION="${1:?usage: ./render.sh <version>, e.g. ./render.sh v0.2}"
mkdir -p renders out

npx remotion render TestClip out/video.mp4
ffmpeg -y -v error -i out/video.mp4 -i narration.wav \
  -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 192k "renders/$VERSION.mp4"

ffprobe -v error -show_entries stream=codec_type -show_entries format=duration \
  -of compact "renders/$VERSION.mp4"
echo "Saved renders/$VERSION.mp4"
open "renders/$VERSION.mp4"
