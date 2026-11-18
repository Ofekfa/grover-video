# Grover's Algorithm — 1-Minute Explainer Script

**Target length:** ~60 s · 1920×1080 · 30 fps
**Voice:** Kokoro `af_sarah`, `en-us`. Measured pace ≈ 3 words/s (17 words → 5.7 s), so ~155 words of narration leaves room for pauses.

**Visual language (carried over from `TestClip`):**
- Background `#0b1020`, text `#f5f7ff`
- Ordinary items: slate bars `#3a4670`; marked item: teal `#4fd1c5` (bar #6, index 5)
- Bar **height = amplitude**. A horizontal zero axis appears from Scene 3 on, so bars can go negative (point down).

---

## Scene 1 — Hook (0:00–0:07)

**On screen:** The title "Grover's Algorithm" fades in. Below it, a wide field of tiny dots ("a million items") fades in, and one dot glows teal.

**Narration:**
> Grover's algorithm finds a needle in a haystack of a million items in about eight hundred steps. Here's how.

---

## Scene 2 — The classical way (0:07–0:15)

**On screen:** Zoom in to a row of 8 boxes. A cursor checks them left to right, and each checked box turns grey with a ✗. A counter in the corner reads "checks: 1, 2, 3…", then cuts to "average: 500,000".

**Narration:**
> A normal computer has to check items one at a time. On average, that's half a million checks.

---

## Scene 3 — Superposition (0:15–0:23)

**On screen:** The 8 boxes morph into 8 equal slate bars standing on a zero axis. Label: "amplitude". A small caption reads "all items at once".

**Narration:**
> A quantum computer starts by putting every item in superposition, each with an equal amplitude. Think of amplitudes as bar heights.

**Bar values:** all 8 bars = 0.354 (1/√8).

---

## Scene 4 — The oracle (0:23–0:31)

**On screen:** A "🔍 Oracle" label sweeps across the bars. When it reaches bar #6, the bar turns teal and **flips below the axis**. A side panel shows "probability = height²", and all 8 probabilities stay equal at 12.5%.

**Narration:**
> Next, an oracle marks the answer by flipping its amplitude upside down. If we measured now, the odds would still be the same.

**Bar values:** others 0.354, marked −0.354.

---

## Scene 5 — Inversion about the mean (0:31–0:41)

**On screen:** A dashed horizontal line appears at the average height (0.265), labelled "average". Each bar reflects through that line: the slate bars drop to about half their height, and the teal bar swings up to more than double.

**Narration:**
> Then comes the clever part: reflect every bar around the average. The flipped bar shoots up, and all the others shrink.

**Bar values:** others 0.177, marked 0.884. The probability for the marked item is now **78%**.

---

## Scene 6 — Repeat, but not too much (0:41–0:50)

**On screen:** A loop badge appears: "oracle → reflect ×2". The second round plays quickly. The marked bar reaches 0.972, and the others dip just below zero. Then a ghost third round plays in red: the teal bar *shrinks* back to 0.575, with an "overshoot!" label, before rewinding to round 2.

**Narration:**
> Repeat the oracle and the reflection, and the marked item keeps growing. With eight items, two rounds give a ninety-four percent chance. But go too far, and it shrinks again.

**Bar values (round 2):** others −0.088, marked 0.972, giving **94.5%**.
**Round 3 (overshoot):** marked 0.575, giving 33%.

---

## Scene 7 — Payoff (0:50–1:00)

**On screen:** A measurement "snap" plays. Every bar collapses except the teal one, which lights up with ✓. Cut to a comparison card:

| | Classical | Grover |
|---|---|---|
| 1,000,000 items | ~500,000 checks | ~785 rounds (≈ π/4·√N) |

The closing caption reads "Quadratic speedup: √N instead of N".

**Narration:**
> For a million items, about eight hundred rounds are enough — roughly the square root. That's a quadratic speedup: not magic, but a huge shortcut.

---

## Math reference (for accurate visuals)

N = 8, so the optimal number of rounds is ⌊π/4 · √8⌋ = 2.

| Step | Other bars | Marked bar | P(marked) |
|---|---|---|---|
| Start (superposition) | 0.354 | 0.354 | 12.5% |
| Round 1 after oracle | 0.354 | −0.354 | 12.5% |
| Round 1 after reflect | 0.177 | 0.884 | 78.1% |
| Round 2 after oracle | 0.177 | −0.884 | 78.1% |
| Round 2 after reflect | −0.088 | 0.972 | 94.5% |
| Round 3 after reflect | — | 0.575 | 33.0% |

Reflection rule: new = 2·mean − old.
For N = 1,000,000: π/4 · 1000 ≈ 785 rounds, so "about eight hundred" is accurate.

## Timing summary

| # | Scene | Start | End | Frames |
|---|---|---|---|---|
| 1 | Hook | 0:00 | 0:07 | 0–210 |
| 2 | Classical | 0:07 | 0:15 | 210–450 |
| 3 | Superposition | 0:15 | 0:23 | 450–690 |
| 4 | Oracle | 0:23 | 0:31 | 690–930 |
| 5 | Reflect | 0:31 | 0:41 | 930–1230 |
| 6 | Repeat | 0:41 | 0:50 | 1230–1500 |
| 7 | Payoff | 0:50 | 1:00 | 1500–1800 |

Scene lengths are targets. Adjust them once the real narration for each scene has been generated and measured.
