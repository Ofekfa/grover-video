import { Composition } from "remotion";
import { FPS, TestClip, getDurationInFrames } from "./TestClip";
import narration from "./narration.json";
import { VIDEO } from "./theme";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TestClip"
        component={TestClip}
        durationInFrames={getDurationInFrames(narration.durationInSeconds)}
        fps={FPS}
        width={VIDEO.width}
        height={VIDEO.height}
      />
    </>
  );
};
