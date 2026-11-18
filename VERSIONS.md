# Versions

Each version has a git tag (`git checkout vX.Y` to go back to it) and a rendered video with sound in `renders/`. Every render gets a new numbered file (`render-01.mp4`, `render-02.mp4`, …) and earlier renders are never overwritten. The videos are also attached to the matching GitHub Release.

| Version | Render | What changed |
|---|---|---|
| v0.7 | render-07.mp4 | Part 2 rebuilt around the physical source of the speedup: new scenes 14 (amplitudes are waves that cancel and add; the double slit; nature squares them on measurement) and 15 (why √N: probability = area, amplitude = side). 18 scenes, 4:47.8. Scene 1 animated; scenes 2–18 are placeholders |
| v0.6 | render-06.mp4 | Part 2 added: 17 scenes, 4:44 total. Part 1 (1:04) is the big idea; Part 2 (3:41) covers the math and physics (Born rule, Hadamard, phase kickback, diffusion operator, rotation by 2θ, (π/4)√N, interference, optimality, hardware and crypto). Scene 1 animated; scenes 2–17 are placeholders. Renders are now numbered and never overwritten |
| v0.5 | render-05.mp4 | One file per scene: 7 scenes back to back (63.5 s) with full per-scene narration. Scene 1 animated; scenes 2–7 are placeholder cards. `CLAUDE.md` rules for parallel agents |
| v0.4 | render-04.mp4 | Voice changed to `am_michael` (calm, warm male); clip is now 7.26 s to fit the slower narration |
| v0.3 | render-03.mp4 | Narration is part of the composition: audible in `npm run dev`, and `render.sh` no longer needs an ffmpeg mix step |
| v0.2 | render-02.mp4 | Light and bright palette: off-white background, navy title, periwinkle bars, orange marked bar |
| v0.1 | render-01.mp4 | First test clip: dark background, title fade-in, 8 bars with one growing, Kokoro narration. Plus `SCRIPT.md` |

## Making a new version
1. `./render.sh` renders the full video to the next free `renders/render-NN.mp4` and opens it. `./render.sh Scene3-Superposition` renders one scene as `render-NN-Scene3-Superposition.mp4`.
2. Add a row to the table above with the version, the render file, and what changed.
3. Commit, tag (`git tag -a vX.Y`), push with `--tags`, and run `gh release create vX.Y renders/render-NN.mp4`.
