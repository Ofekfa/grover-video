// Scene 16 — Real Hardware, Real Stakes. See SCRIPT.md "Scene 16" for the plan.
// Narration: narration/scene16-hardware.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE16_ID = "scene16-hardware";

export const Scene16Hardware: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE16_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={16}
        title="Real Hardware, Real Stakes"
        onScreen="Phase dials drifting apart (decoherence); AES-128 2¹²⁸ → 2⁶⁴ vs AES-256 still out of reach."
      />
    </AbsoluteFill>
  );
};
