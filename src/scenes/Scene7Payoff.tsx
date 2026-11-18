// Scene 7 — The Payoff. See SCRIPT.md "Scene 7" for the plan.
// Narration: narration/scene7-payoff.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE7_ID = "scene7-payoff";

export const Scene7Payoff: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE7_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={7}
        title="The Payoff"
        onScreen="Measurement snap leaves the orange bar; comparison card: 500,000 checks vs ~785 rounds."
      />
    </AbsoluteFill>
  );
};
