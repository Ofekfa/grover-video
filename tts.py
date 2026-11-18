"""Generate per-scene narration audio with Kokoro TTS.

Each scene's text lives in narration/<scene>.txt and its audio is written to
public/narration/<scene>.wav. Scenes are independent, so agents working on
different scenes can regenerate their own audio without touching anyone else's.

Usage (with the project venv):
    .venv/bin/python tts.py                       # all scenes
    .venv/bin/python tts.py scene3-superposition  # one or more scenes
"""

import sys
from pathlib import Path

import soundfile as sf
from kokoro_onnx import Kokoro

ROOT = Path(__file__).resolve().parent
MODEL = ROOT / "models" / "kokoro-v1.0.int8.onnx"
VOICES = ROOT / "models" / "voices-v1.0.bin"
TEXT_DIR = ROOT / "narration"
AUDIO_DIR = ROOT / "public" / "narration"

# Youthful, casual American male voice at a slightly brisk pace.
# Alternatives: am_liam, am_echo, am_adam (casual); am_michael (calm, serious)
VOICE = "am_puck"
SPEED = 1.1


def main() -> None:
    names = sys.argv[1:] or sorted(p.stem for p in TEXT_DIR.glob("*.txt"))
    missing = [n for n in names if not (TEXT_DIR / f"{n}.txt").exists()]
    if missing:
        sys.exit(f"No narration text for: {', '.join(missing)} (expected narration/<name>.txt)")

    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    kokoro = Kokoro(str(MODEL), str(VOICES))
    total = 0.0
    for name in names:
        text = (TEXT_DIR / f"{name}.txt").read_text().strip()
        samples, sample_rate = kokoro.create(text, voice=VOICE, speed=SPEED, lang="en-us")
        sf.write(AUDIO_DIR / f"{name}.wav", samples, sample_rate)
        duration = len(samples) / sample_rate
        total += duration
        print(f"{name:<24} {duration:5.2f} s  ({len(text.split())} words)")
    if len(names) > 1:
        print(f"{'total':<24} {total:5.2f} s")


if __name__ == "__main__":
    main()
