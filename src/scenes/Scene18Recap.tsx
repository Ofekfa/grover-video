// Scene 18 — Recap. See SCRIPT.md "Scene 18" for the plan.
// Narration: narration/scene18-recap.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE18_ID = "scene18-recap";

export const Scene18Recap: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE18_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={18}
        title="Recap"
        onScreen="H gates → [U_f → D] × k → measure, beside the rotation and amplitude-square pictures."
      />
    </AbsoluteFill>
  );
};
