// Scene 14 — Interference: The Physics Behind It. See SCRIPT.md "Scene 14" for the plan.
// Narration: narration/scene14-interference.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE14_ID = "scene14-interference";

export const Scene14Interference: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE14_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={14}
        title="Interference: The Physics Behind It"
        onScreen="Waves add (constructive) or cancel (destructive); bars with ± signs; evolution is unitary."
      />
    </AbsoluteFill>
  );
};
