"""Generate narration.wav with Kokoro TTS.

Run with the project venv:  .venv/bin/python tts.py
Also writes src/narration.json so the Remotion composition can size itself
to the narration length.
"""

import json
from pathlib import Path

import soundfile as sf
from kokoro_onnx import Kokoro

ROOT = Path(__file__).resolve().parent
MODEL = ROOT / "models" / "kokoro-v1.0.int8.onnx"
VOICES = ROOT / "models" / "voices-v1.0.bin"
OUT_WAV = ROOT / "public" / "narration.wav"
OUT_JSON = ROOT / "src" / "narration.json"

TEXT = (
    "Grover's algorithm finds a needle in a haystack "
    "of a million items in about eight hundred steps."
)


def main() -> None:
    kokoro = Kokoro(str(MODEL), str(VOICES))
    samples, sample_rate = kokoro.create(TEXT, voice="af_sarah", speed=1.0, lang="en-us")
    sf.write(OUT_WAV, samples, sample_rate)

    duration = len(samples) / sample_rate
    OUT_JSON.write_text(json.dumps({"durationInSeconds": round(duration, 3)}, indent=2) + "\n")
    print(f"Wrote {OUT_WAV.name} ({sample_rate} Hz)")
    print(f"Duration: {duration:.2f} s")


if __name__ == "__main__":
    main()
