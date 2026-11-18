// Scene 8 — Under the Hood: Amplitudes and the Born Rule. See SCRIPT.md "Scene 8" for the plan.
// Narration: narration/scene8-qubits.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE8_ID = "scene8-qubits";

export const Scene8Qubits: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE8_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={8}
        title="Under the Hood: Amplitudes and the Born Rule"
        onScreen="3 qubit wires fan out to |000⟩…|111⟩ with amplitude bars; P(x) = |aₓ|² highlighted as the key."
      />
    </AbsoluteFill>
  );
};
