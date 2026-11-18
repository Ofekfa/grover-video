// Scene 17 — Recap. See SCRIPT.md "Scene 17" for the plan.
// Narration: narration/scene17-recap.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE17_ID = "scene17-recap";

export const Scene17Recap: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE17_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={17}
        title="Recap"
        onScreen="H gates → [U_f → D] × k → measure, beside the rotation picture: ~(π/4)√N rounds."
      />
    </AbsoluteFill>
  );
};
