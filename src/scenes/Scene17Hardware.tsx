// Scene 17 — Fragile Waves, Real Stakes. See SCRIPT.md "Scene 17" for the plan.
// Narration: narration/scene17-hardware.txt
import React from "react";
import { Audio } from "@remotion/media";
import { AbsoluteFill } from "remotion";
import { ScenePlaceholder } from "../components/ScenePlaceholder";
import { narrationFile } from "../scene-timing";

export const SCENE17_ID = "scene17-hardware";

export const Scene17Hardware: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={narrationFile(SCENE17_ID)} />
      {/* TODO: replace the placeholder with this scene's visuals. */}
      <ScenePlaceholder
        number={17}
        title="Fragile Waves, Real Stakes"
        onScreen="Phase dials drift apart and the interference bands wash out; AES-128 2¹²⁸ → 2⁶⁴ vs AES-256 still out of reach."
      />
    </AbsoluteFill>
  );
};
