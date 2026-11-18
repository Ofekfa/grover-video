// Scene 13 — How Many Rounds?. See SCRIPT.md "Scene 13" for the plan.
// Narration: narration/scene13-rounds.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE13_ID = "scene13-rounds";

export const Scene13Rounds: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE13_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={13}
        title="How Many Rounds?"
        onScreen="The arrow steps 20.7° → 62.1° → 103.5° (P 12.5% → 78.1% → 94.5%); k ≈ (π/4)√N = 785 for a million."
      />
    </AbsoluteFill>
  );
};
