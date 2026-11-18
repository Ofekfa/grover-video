import { Composition } from "remotion";
import { FPS, TestClip, getDurationInFrames } from "./TestClip";
import narration from "./narration.json";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TestClip"
        component={TestClip}
        durationInFrames={getDurationInFrames(narration.durationInSeconds)}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
