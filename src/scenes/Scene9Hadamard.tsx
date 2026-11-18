// Scene 9 — Hadamard: Building the Superposition. See SCRIPT.md "Scene 9" for the plan.
// Narration: narration/scene9-hadamard.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE9_ID = "scene9-hadamard";

export const Scene9Hadamard: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE9_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={9}
        title="Hadamard: Building the Superposition"
        onScreen="Circuit of three H gates; H|0⟩ = (|0⟩+|1⟩)/√2; all 8 bars rise to 1/√8 ≈ 0.354."
      />
    </AbsoluteFill>
  );
};
