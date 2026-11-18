// Scene 6 — Repeat, But Not Too Much. See SCRIPT.md "Scene 6" for the plan.
// Narration: narration/scene6-repeat.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE6_ID = "scene6-repeat";

export const Scene6Repeat: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE6_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={6}
        title="Repeat, But Not Too Much"
        onScreen="Round 2 takes the orange bar to 0.972 (94.5%); a ghost round 3 overshoots to 0.575."
      />
    </AbsoluteFill>
  );
};
