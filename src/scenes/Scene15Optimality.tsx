// Scene 15 — Can We Do Better? No.. See SCRIPT.md "Scene 15" for the plan.
// Narration: narration/scene15-optimality.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE15_ID = "scene15-optimality";

export const Scene15Optimality: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE15_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={15}
        title="Can We Do Better? No."
        onScreen="Log chart of N/2 vs (π/4)√N with a √N floor; citations Grover 1996 and BBBV 1997."
      />
    </AbsoluteFill>
  );
};
