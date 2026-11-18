// Scene 10 — The Oracle as a Phase Flip. See SCRIPT.md "Scene 10" for the plan.
// Narration: narration/scene10-oracle-math.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE10_ID = "scene10-oracle-math";

export const Scene10OracleMath: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE10_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={10}
        title="The Oracle as a Phase Flip"
        onScreen="U_f box with an ancilla in |−⟩; phase kickback gives (−1)^f(x)|x⟩; bar |101⟩ flips."
      />
    </AbsoluteFill>
  );
};
