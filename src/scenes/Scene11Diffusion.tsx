// Scene 11 — The Diffusion Operator. See SCRIPT.md "Scene 11" for the plan.
// Narration: narration/scene11-diffusion.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE11_ID = "scene11-diffusion";

export const Scene11Diffusion: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE11_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={11}
        title="The Diffusion Operator"
        onScreen="D = 2|s⟩⟨s| − I becomes aₓ → 2ā − aₓ; circuit H → phase flip on |000⟩ → H."
      />
    </AbsoluteFill>
  );
};
