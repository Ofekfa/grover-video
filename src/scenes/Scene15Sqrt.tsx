// Scene 15 — Why Exactly the Square Root. See SCRIPT.md "Scene 15" for the plan.
// Narration: narration/scene15-sqrt.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE15_ID = "scene15-sqrt";

export const Scene15Sqrt: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE15_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={15}
        title="Why Exactly the Square Root"
        onScreen="Probability = area, amplitude = side. Classical: N strips of 1/N. Quantum: in-sync steps of ~2/√N fill the square in ~√N rounds."
      />
    </AbsoluteFill>
  );
};
