// Scene 12 — Two Reflections Make a Rotation. See SCRIPT.md "Scene 12" for the plan.
// Narration: narration/scene12-rotation.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE12_ID = "scene12-rotation";

export const Scene12Rotation: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE12_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={12}
        title="Two Reflections Make a Rotation"
        onScreen="2D plane with axes |s′⟩ and |w⟩; the state at θ reflects to −θ, then to 3θ; arc labelled 2θ."
      />
    </AbsoluteFill>
  );
};
