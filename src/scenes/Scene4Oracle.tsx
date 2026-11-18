// Scene 4 — The Oracle. See SCRIPT.md "Scene 4" for the plan.
// Narration: narration/scene4-oracle.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE4_ID = "scene4-oracle";

export const Scene4Oracle: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE4_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={4}
        title="The Oracle"
        onScreen="The oracle sweeps across; bar #6 turns orange and flips below the axis. Probabilities stay at 12.5%."
      />
    </AbsoluteFill>
  );
};
