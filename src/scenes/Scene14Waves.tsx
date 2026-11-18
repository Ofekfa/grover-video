// Scene 14 — Where the Speedup Really Comes From. See SCRIPT.md "Scene 14" for the plan.
// Narration: narration/scene14-waves.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE14_ID = "scene14-waves";

export const Scene14Waves: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE14_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={14}
        title="Where the Speedup Really Comes From"
        onScreen="Myth: parallel oracles, but a measurement picks one. Double slit drawn in SVG; nature's ledger: amplitudes (±, cancel) squared into probabilities."
      />
    </AbsoluteFill>
  );
};
