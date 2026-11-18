// Scene 2 — The Classical Way. See SCRIPT.md "Scene 2" for the plan.
// Narration: narration/scene2-classical.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE2_ID = "scene2-classical";

export const Scene2Classical: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE2_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={2}
        title="The Classical Way"
        onScreen='A cursor checks 8 boxes one by one; counter jumps to "average: 500,000".'
      />
    </AbsoluteFill>
  );
};
