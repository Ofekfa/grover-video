import React from "react";
import { CalculateMetadataFunction, Series } from "remotion";
import { getSceneDurationInFrames } from "./scene-timing";
import { SCENES } from "./scenes";

export type GroverExplainerProps = {
  /** Frames per scene, filled in by calculateMetadata from the narration. */
  sceneDurations: number[];
};

export const calculateExplainerMetadata: CalculateMetadataFunction<
  GroverExplainerProps
> = async () => {
  const sceneDurations = await Promise.all(
    SCENES.map((scene) => getSceneDurationInFrames(scene.id)),
  );
  return {
    durationInFrames: sceneDurations.reduce((sum, d) => sum + d, 0),
    props: { sceneDurations },
  };
};

// The full video: every scene from scenes/index.ts, back to back.
export const GroverExplainer: React.FC<GroverExplainerProps> = ({
  sceneDurations,
}) => {
  return (
    <Series>
      {SCENES.map((scene, i) => (
        <Series.Sequence
          key={scene.id}
          name={scene.compositionId}
          durationInFrames={sceneDurations[i]}
        >
          <scene.component />
        </Series.Sequence>
      ))}
    </Series>
  );
};
