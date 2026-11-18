# Grover's Algorithm explainer (Remotion + Kokoro TTS)

A ~60 s, 1920×1080, 30 fps explainer video. `SCRIPT.md` is the plan: what each scene shows and says, plus the exact bar values for the math.

## Layout

| Path | Owner | What it is |
|---|---|---|
| `src/scenes/SceneN<Name>.tsx` | **one agent per scene** | The scene's visuals. Plays its own narration. |
| `narration/sceneN-<name>.txt` | that scene's agent | The scene's narration text |
| `public/narration/sceneN-<name>.wav` | that scene's agent | Generated audio. Never edit by hand |
| `src/scenes/index.ts` | shared | Scene order. Change only to add, remove or reorder scenes |
| `src/theme.ts` | shared | Colors, font, fps, size |
| `src/components/` | shared | Reusable pieces (e.g. `ScenePlaceholder`) |
| `src/GroverExplainer.tsx`, `src/Root.tsx` | shared | Full video and Studio registrations |
| `src/scene-timing.ts` | shared | Scene length = narration length + 0.5 s |
| `tts.py` | shared | Kokoro TTS (voice `am_michael`) |
| `render.sh`, `VERSIONS.md`, `renders/` | shared | Versioned renders |

## Working in parallel

Two agents can work at the same time if each one owns different scenes:

1. **Only edit files you own:** your scene's `.tsx`, `.txt` and `.wav`. If a shared file needs a change (for example a new color in `theme.ts` or a new shared component), keep it small and mention it in your commit message.
2. **Put scene-only helpers inside your scene file** rather than in `src/components/`, unless another scene really needs them too.
3. **Regenerate only your own audio:** `.venv/bin/python tts.py scene3-superposition`.
4. **Preview only your scene:** in `npx remotion studio`, open the `Scenes` folder. Render it alone with `./render.sh <version> Scene3-Superposition`.
5. **Commit only your files** (`git add src/scenes/Scene3Superposition.tsx narration/scene3-superposition.txt public/narration/scene3-superposition.wav`), never `git add -A`. If git reports `index.lock`, wait a moment and retry: the other agent is committing.
6. **Use the scene's length:** inside a scene, `useVideoConfig().durationInFrames` is that scene's own length. Time animations against it, so they still fit when the narration changes.

## Conventions

- Bar height = amplitude. Ordinary bars use `COLORS.bar`; the marked item is bar #6 (index 5) in `COLORS.marked`. Use the values in the `SCRIPT.md` math table.
- Python runs from the venv: `.venv/bin/python` (system `python3` doesn't have kokoro-onnx).
- Check before committing: `npx tsc && npx eslint src`.
- Commit after every step, with a message that says **what** changed and **why**. End messages with the `Co-Authored-By` line.
- Each visible milestone becomes a version: `./render.sh vX.Y`, add a row to `VERSIONS.md`, then commit, `git tag -a vX.Y`, push with tags, and `gh release create vX.Y renders/vX.Y.mp4`.
