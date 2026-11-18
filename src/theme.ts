// Shared look and video settings. Every scene imports from here, so change
// values in this file only when the change should apply to the whole video.

export const VIDEO = {
  fps: 30,
  width: 1920,
  height: 1080,
} as const;

export const COLORS = {
  background: "#fbfaf6",
  text: "#1f2544",
  mutedText: "#6b7194",
  bar: "#b4bffb",
  marked: "#ff7a1a",
} as const;

export const FONT_FAMILY =
  "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";
