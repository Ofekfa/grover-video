# Versions

Each version has a git tag (`git checkout vX.Y` to go back to it) and a rendered video with sound at `renders/vX.Y.mp4`. The videos are also attached to the matching GitHub Release.

| Version | What changed |
|---|---|
| v0.3 | Narration is part of the composition: audible in `npm run dev`, and `render.sh` no longer needs an ffmpeg mix step |
| v0.2 | Light and bright palette: off-white background, navy title, periwinkle bars, orange marked bar |
| v0.1 | First test clip: dark background, title fade-in, 8 bars with one growing, Kokoro narration. Plus `SCRIPT.md` |

## Making a new version
1. `./render.sh vX.Y` renders the video and opens it.
2. Add a row to the table above.
3. Commit, tag and push: `git tag vX.Y && git push --tags`.
