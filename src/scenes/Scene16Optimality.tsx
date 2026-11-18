// Scene 16 — A Speed Limit From the Same Physics. See SCRIPT.md "Scene 16" for the plan.
// Narration: narration/scene16-optimality.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE16_ID = "scene16-optimality";

export const Scene16Optimality: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE16_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={16}
        title="A Speed Limit From the Same Physics"
        onScreen="Log chart of N/2 vs (π/4)√N with a √N floor; citations Grover 1996 and BBBV 1997."
      />
    </AbsoluteFill>
  );
};
