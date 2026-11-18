// Scene 3 — Superposition. See SCRIPT.md "Scene 3" for the plan.
// Narration: narration/scene3-superposition.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE3_ID = "scene3-superposition";

export const Scene3Superposition: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE3_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={3}
        title="Superposition"
        onScreen='8 equal periwinkle bars on a zero axis, labelled "amplitude".'
      />
    </AbsoluteFill>
  );
};
