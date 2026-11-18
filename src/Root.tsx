import { Composition, Folder } from "remotion";
import { GroverExplainer, calculateExplainerMetadata } from "./GroverExplainer";
import { getSceneDurationInFrames } from "./scene-timing";
import { SCENES } from "./scenes";
import { VIDEO } from "./theme";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* The full video. Length = sum of the scene lengths. */}
      <Composition
        id="GroverExplainer"
        component={GroverExplainer}
        durationInFrames={VIDEO.fps * 60}
        fps={VIDEO.fps}
        width={VIDEO.width}
        height={VIDEO.height}
        defaultProps={{ sceneDurations: SCENES.map(() => VIDEO.fps * 8) }}
        calculateMetadata={calculateExplainerMetadata}
      />

      {/* Each scene on its own, for previewing while working on it. */}
      {([1, 2] as const).map((part) => (
        <Folder key={part} name={`Part${part}`}>
          {SCENES.filter((scene) => scene.part === part).map((scene) => (
            <Composition
              key={scene.id}
              id={scene.compositionId}
              component={scene.component}
              durationInFrames={VIDEO.fps * 8}
              fps={VIDEO.fps}
              width={VIDEO.width}
              height={VIDEO.height}
              calculateMetadata={async () => ({
                durationInFrames: await getSceneDurationInFrames(scene.id),
              })}
            />
          ))}
        </Folder>
      ))}
    </>
  );
};
