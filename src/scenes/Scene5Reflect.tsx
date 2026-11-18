// Scene 5 — Inversion About the Mean. See SCRIPT.md "Scene 5" for the plan.
// Narration: narration/scene5-reflect.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE5_ID = "scene5-reflect";

export const Scene5Reflect: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE5_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={5}
        title="Inversion About the Mean"
        onScreen='A dashed "average" line; every bar reflects through it. Orange bar jumps to 0.884.'
      />
    </AbsoluteFill>
  );
};
