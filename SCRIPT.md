# Grover's Algorithm — Explainer Script

**Target length:** 4–5 min total (hard limit 5 min) · 1920×1080 · 30 fps
- **Part 1 — The big idea** (~1 min): the general intuition. Scenes 1–7.
- **Part 2 — The math and physics** (~3.7 min): the same algorithm with its real notation, building to the physical source of the speedup (amplitudes interfere; probability = amplitude²). Scenes 8–18.
**Voice:** Kokoro `am_puck` at speed 1.1 (youthful, casual male), `en-us`. Pace ≈ 3.1 words/s; narration lengths are measured by `tts.py`, and the video length follows them automatically.

**Visual language (colors live in `src/theme.ts`):**
- Light and bright: warm off-white background `#fbfaf6`, dark navy text `#1f2544`
- Ordinary items: soft periwinkle bars `#b4bffb`; marked item: bright orange `#ff7a1a` (bar #6, index 5)
- Bar **height = amplitude**. A horizontal zero axis appears from Scene 3 on, so bars can go negative (point down).
- **Illustrations are drawn in code** (React, SVG, CSS) as Remotion components. Real screenshots are fine when useful (e.g. a paper's abstract or a real circuit tool). **No images made by generative models.**

---

# Part 1 — The big idea (~1 min)

## Scene 1 — Hook (0:00–0:07)

**On screen:** The title "Grover's Algorithm" fades in. Below it, a wide field of tiny dots ("a million items") fades in, and one dot glows orange.

**Narration:**
> Grover's algorithm finds a needle in a haystack of a million items in about eight hundred steps. Here's how.

---

## Scene 2 — The classical way (0:07–0:15)

**On screen:** Zoom in to a row of 8 boxes. A cursor checks them left to right, and each checked box turns grey with a ✗. A counter in the corner reads "checks: 1, 2, 3…", then cuts to "average: 500,000".

**Narration:**
> A normal computer has to check items one at a time. On average, that's half a million checks.

---

## Scene 3 — Superposition (0:15–0:23)

**On screen:** The 8 boxes morph into 8 equal periwinkle bars standing on a zero axis. Label: "amplitude". A small caption reads "all items at once".

**Narration:**
> A quantum computer starts by putting every item in superposition, each with an equal amplitude. Think of amplitudes as bar heights.

**Bar values:** all 8 bars = 0.354 (1/√8).

---

## Scene 4 — The oracle (0:23–0:31)

**On screen:** A "🔍 Oracle" label sweeps across the bars. When it reaches bar #6, the bar turns orange and **flips below the axis**. A side panel shows "probability = height²", and all 8 probabilities stay equal at 12.5%.

**Narration:**
> Next, an oracle marks the answer by flipping its amplitude upside down. If we measured now, the odds would still be the same.

**Bar values:** others 0.354, marked −0.354.

---

## Scene 5 — Inversion about the mean (0:31–0:41)

**On screen:** A dashed horizontal line appears at the average height (0.265), labelled "average". Each bar reflects through that line: the periwinkle bars drop to about half their height, and the orange bar swings up to more than double.

**Narration:**
> Then comes the clever part: reflect every bar around the average. The flipped bar shoots up, and all the others shrink.

**Bar values:** others 0.177, marked 0.884. The probability for the marked item is now **78%**.

---

## Scene 6 — Repeat, but not too much (0:41–0:50)

**On screen:** A loop badge appears: "oracle → reflect ×2". The second round plays quickly. The marked bar reaches 0.972, and the others dip just below zero. Then a ghost third round plays as a dashed outline: the orange bar *shrinks* back to 0.575, with an "overshoot!" label, before rewinding to round 2.

**Narration:**
> Repeat the oracle and the reflection, and the marked item keeps growing. With eight items, two rounds give a ninety-four percent chance. But go too far, and it shrinks again.

**Bar values (round 2):** others −0.088, marked 0.972, giving **94.5%**.
**Round 3 (overshoot):** marked 0.575, giving 33%.

---

## Scene 7 — Payoff (0:50–1:00)

**On screen:** A measurement "snap" plays. Every bar collapses except the orange one, which lights up with ✓. Cut to a comparison card:

| | Classical | Grover |
|---|---|---|
| 1,000,000 items | ~500,000 checks | ~785 rounds (≈ π/4·√N) |

The closing caption reads "Quadratic speedup: √N instead of N". On the last sentence, a soft orange wave ripples across the bottom of the frame, the bars ride it for a moment, and it carries into Part 2 as a teaser for Scene 14.

**Narration:**
> For a million items, about eight hundred rounds are enough — roughly the square root. That's a quadratic speedup: not magic, but a huge shortcut. And the reason it works is written into the physics of waves.

---

# Part 2 — The math and physics (~3.7 min)

Part 2 goes back over the same algorithm with its real notation, keeping the same 8-item example (3 qubits, marked item = bar #6 = state |101⟩). Every illustration is drawn in code: kets as text, circuits as SVG wires and boxes, and the rotation picture as SVG axes and vectors.

> **Core message, which Part 2 builds toward (Scenes 14–15):** the speedup is not "trying every answer at once". It comes from a fact about nature: **the world keeps its books in amplitudes, which are waves that add and cancel, and turns them into probabilities only by squaring them when we look.** Grover makes the amplitudes add up *in sync* on the answer, so amplitude grows step by step while probability is its square. That square is exactly why √N rounds are enough instead of N checks. Scenes 8–13 set up the pieces (amplitudes, the Born rule's square, the rotation), and Scenes 16–18 show the consequences (a speed limit, fragility, real stakes).

---

## Scene 8 — Under the hood: amplitudes and the Born rule

**On screen:** A title card reads "Part 2 · The math and physics". Three qubit wires labelled q₀, q₁, q₂ fan out into 8 states |000⟩ … |111⟩, each with an amplitude bar. The formula |ψ⟩ = Σₓ aₓ|x⟩ writes itself in. Each bar gets a faint second bar for aₓ², and the caption **"P(x) = |aₓ|²"** is highlighted in orange. It is the seed of the core message, so it should linger.

**Narration:**
> Now let's look under the hood. Three qubits have eight basis states, and the quantum state is a list of eight amplitudes. Measure it, and each state appears with probability equal to its amplitude squared. That's the Born rule. Remember that square; it's the key to everything.

---

## Scene 9 — Hadamard: building the superposition

**On screen:** A circuit diagram shows three wires starting at |0⟩, each passing through an "H" box. A small inset unit circle shows |0⟩ (pointing up) turning into |+⟩ (at 45°), with H|0⟩ = (|0⟩ + |1⟩)/√2. Then H⊗³|000⟩ = (1/√8) Σₓ |x⟩ appears, and all 8 bars rise together to 0.354.

**Narration:**
> Every qubit first passes through a Hadamard gate, which turns zero into an equal mix of zero and one. Across three qubits, all eight states get the same amplitude: one over root eight, about zero point three five. That's our row of equal bars.

---

## Scene 10 — The oracle as a phase flip

**On screen:** The circuit gains a tall "U_f" box spanning the three wires plus an extra ancilla wire, which is prepared as |1⟩ → H → |−⟩. A small code-drawn sudoku grid with a ✓ sits beside the box ("easy to check, hard to solve"). The formulas appear in turn: U_f|x⟩|y⟩ = |x⟩|y ⊕ f(x)⟩, then (−1)^f(x) |x⟩|−⟩. A "kickback" arrow runs from the ancilla up to the main wires. Bar |101⟩ flips below the axis.

**Narration:**
> The oracle is a reversible circuit that recognizes the answer, like checking a sudoku without solving it. With an extra qubit in the minus state, the answer kicks back as a phase: the marked state is multiplied by minus one, and every other state is left alone.

---

## Scene 11 — The diffusion operator

**On screen:** The formula D = 2|s⟩⟨s| − I appears, then turns into the per-amplitude rule aₓ → 2ā − aₓ, with the dashed "average" line from Part 1 over the bars. The circuit for D is drawn silently below: H on all wires → a phase-flip box on |000⟩ → H on all wires.

**Narration:**
> The diffusion step is two times the projection onto the uniform state, minus the identity. Per amplitude, each one becomes twice the average minus itself: the reflection about the mean.

*Note for accuracy:* 2|0⟩⟨0| − I flips every state except |000⟩. That equals flipping only |000⟩ up to an overall sign, which has no physical effect.

---

## Scene 12 — Two reflections make a rotation

**On screen:** The bars fade away, leaving a clean 2D plane. The horizontal axis is |s′⟩ ("all wrong answers", periwinkle) and the vertical axis is |w⟩ ("the answer", orange). The state is a navy arrow at a small angle θ above the horizontal, with sin θ = 1/√N. Then:
1. The oracle draws a mirror line on the horizontal axis, and the arrow flips to −θ.
2. The diffusion draws a mirror line along the original state |s⟩, and the arrow flips to 3θ.
3. An arc labelled "2θ" shows the net rotation.

**Narration:**
> Here's the prettiest part. Everything happens in a flat plane, spanned by the answer and the mix of everything else. We start theta above the horizontal, where sine theta is one over root N. The oracle reflects across that axis, the diffusion across the starting state, and two reflections make a rotation by two theta.

---

## Scene 13 — How many rounds?

**On screen:** The same plane. The arrow steps around: θ = 20.7° → 62.1° → 103.5°. A readout shows "P = sin²(angle)": 12.5% → 78.1% → 94.5%. The formula (2k + 1)θ ≈ 90° ⇒ k ≈ (π/4)√N appears, then "N = 1,000,000 → 785 rounds".

**Narration:**
> After k rounds, the angle is two k plus one, times theta, and the chance of success is its sine, squared. Reaching ninety degrees takes about pi over four times root N rounds: two for eight items, seven hundred eighty-five for a million.

---

## Scene 14 — Where the speedup really comes from: waves

**On screen:**
1. **Myth card:** eight small copies of the oracle box run "in parallel", then a measurement meter picks *one* at random, and a "✗ parallelism alone" stamp appears.
2. **Double slit (code-drawn):** a source on the left, a barrier with two slits, and circular wavefronts spreading from each slit as SVG arcs. On the right screen, the bright and dark bands are computed from cos² of the path difference. Labels: "waves add → bright" and "waves cancel → dark".
3. **Nature's ledger:** two columns. Probabilities: "only add (0 → 1)". Amplitudes: "+ and −, can cancel". An arrow labelled "square when we look" points from the amplitudes column to the probabilities column.
4. The 8 bars return. The wrong answers' contributions are tinted to show them cancelling, and the marked bar's to show them piling up.

**Narration:**
> So where does the speedup really come from? Not from trying every answer at once: a measurement hands you just one result, at random. It comes from how nature keeps its books. A quantum system stores amplitudes, waves that can be positive or negative and can cancel, and only when we look are they squared into odds. It's the physics of the double-slit experiment, where a particle's waves cancel in some places and pile up in others. Grover tunes that interference to pile up on the answer.

---

## Scene 15 — Why exactly the square root

**On screen:** Two side-by-side panels, each with a unit square whose filled orange area = probability of having found the answer.
- **Classical (left):** each check adds a thin strip of area 1/N. A counter shows that it takes ~N strips to fill the square.
- **Quantum (right):** the filled region is a square whose *side* = the answer's amplitude. Each round adds a short orange arrow of length ≈ 2/√N to the side, head to tail and all pointing the same way ("in sync"). The area (side²) grows slowly at first, then fast, and fills the square after ~√N arrows.
- **Swing inset:** a small pendulum gets well-timed pushes, and its amplitude grows each swing.
- Caption: **"amplitude adds in steps of ~1/√N · probability = amplitude² → ~√N rounds"**.

**Narration:**
> And that squaring is exactly where the square root comes from. Think of probability as the area of a square, and amplitude as its side. Classically, each check adds about one over N of area, so you need about N checks. Quantumly, each round lengthens the side by about two over root N, and the pushes add up in sync, like well-timed pushes on a swing. So about root N rounds are enough to fill the whole square.

*Accuracy notes:* for small k the marked amplitude is sin((2k + 1)θ) ≈ (2k + 1)/√N, so each round adds ≈ 2/√N (checked: exactly 0.002 per round at first for N = 10⁶). Because the state is really rotating, the steps shrink near the top: the side reaches 1 after (π/4)√N rounds rather than √N/2. The animation can show the arrows following a quarter-circle near the end. Classically, after k random distinct checks P = k/N. The swing is an analogy for coherent (in-phase) accumulation, not a literal mechanism.

---

## Scene 16 — A speed limit from the same physics

**On screen:** A code-drawn chart (log scale) of queries against N: a periwinkle line for classical (N/2) and an orange line for Grover ((π/4)√N), with a shaded floor labelled "no quantum algorithm goes below ~√N". Citation cards: "Grover, 1996 — quant-ph/9605043" and "Bennett, Bernstein, Brassard, Vazirani, 1997 — quant-ph/9701001". These can be screenshots of the arXiv abstract pages. **Verify both IDs before use.**

**Narration:**
> The same picture sets a speed limit: each query can only turn the state a little. In nineteen ninety-seven, Bennett, Bernstein, Brassard and Vazirani proved that no quantum search beats about root N queries, so Grover's algorithm is optimal.

---

## Scene 17 — Fragile waves, real stakes

**On screen:** Left: a row of small phase dials that start aligned, then jitter and drift apart, labelled "noise / decoherence". The interference bands from Scene 14 wash out to grey as they drift. Right: two key-size bars. "AES-128: 2¹²⁸ → ~2⁶⁴ steps with Grover" is shown in orange as a warning, and "AES-256: 2²⁵⁶ → ~2¹²⁸" in navy with "still out of reach".

**Narration:**
> That's also why it's hard to build: noise scrambles the phases and washes out this interference, so long searches need error correction. Still, it's why cryptographers favor two hundred fifty-six bit keys, since Grover would cut a two to the one twenty-eight key search to about two to the sixty-four steps.

---

## Scene 18 — Recap

**On screen:** A compact summary built from earlier pieces: the H-box circuit → [U_f → D] × k → a measurement meter, with the rotation picture and the amplitude-square from Scene 15 beside it. Closing line: "Amplitudes add in sync; nature squares them at the end → ~(π/4)√N rounds." Then the final title.

**Narration:**
> So here's Grover in one picture: two reflections per round, each turning the state two theta toward the answer. Amplitudes build up in sync, nature squares them only at the end, and after about pi over four root N rounds, the needle is yours.

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

**Rotation picture (Scenes 12–13, 15):** sin θ = 1/√N. After k rounds the angle is (2k + 1)θ and P(marked) = sin²((2k + 1)θ).

| N | θ | Round 0 | Round 1 | Round 2 | Round 3 | k_opt = ⌊(π/4)√N⌋ |
|---|---|---|---|---|---|---|
| 8 | 20.70° | 20.7° (12.5%) | 62.1° (78.1%) | 103.5° (94.5%) | 144.9° (33.0%) | 2 |
| 1,000,000 | 0.0573° | | | | | 785, which lands at 90.01° (P ≈ 100%) |

## Part 1 timing (targets)

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
