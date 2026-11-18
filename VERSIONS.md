# Versions

Each version has a git tag (`git checkout vX.Y` to go back to it) and a rendered video with sound at `renders/vX.Y.mp4`. The videos are also attached to the matching GitHub Release.

| Version | What changed |
|---|---|
| v0.5 | One file per scene: 7 scenes back to back (63.5 s) with full per-scene narration. Scene 1 animated; scenes 2–7 are placeholder cards. `CLAUDE.md` rules for parallel agents |
| v0.4 | Voice changed to `am_michael` (calm, warm male); clip is now 7.26 s to fit the slower narration |
| v0.3 | Narration is part of the composition: audible in `npm run dev`, and `render.sh` no longer needs an ffmpeg mix step |
| v0.2 | Light and bright palette: off-white background, navy title, periwinkle bars, orange marked bar |
| v0.1 | First test clip: dark background, title fade-in, 8 bars with one growing, Kokoro narration. Plus `SCRIPT.md` |

## Making a new version
1. `./render.sh vX.Y` renders the full video and opens it (`./render.sh vX.Y Scene3-Superposition` renders one scene).
2. Add a row to the table above.
3. Commit, tag and push: `git tag vX.Y && git push --tags`.
