import { ALL_FORMATS, Input, UrlSource } from "mediabunny";
import { staticFile } from "remotion";
import { VIDEO } from "./theme";

// Silence added after each scene's narration before the next scene starts.
export const SCENE_PADDING_SECONDS = 0.5;

export const narrationFile = (sceneId: string) =>
  staticFile(`narration/${sceneId}.wav`);

const getAudioDurationInSeconds = async (src: string) => {
  const input = new Input({ formats: ALL_FORMATS, source: new UrlSource(src) });
  try {
    return await input.computeDuration();
  } finally {
    input.dispose();
  }
};

// A scene lasts as long as its narration plus padding, so changing a
// scene's text (and re-running tts.py) resizes the video automatically.
export const getSceneDurationInFrames = async (sceneId: string) => {
  const seconds = await getAudioDurationInSeconds(narrationFile(sceneId));
  return Math.ceil((seconds + SCENE_PADDING_SECONDS) * VIDEO.fps);
};
