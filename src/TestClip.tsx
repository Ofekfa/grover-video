import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const FPS = 30;
const BASE_SECONDS = 5;
const AUDIO_PADDING_SECONDS = 0.5;

// 5 s by default; if the narration is longer, narration + 0.5 s.
export const getDurationInFrames = (narrationSeconds: number) => {
  const seconds =
    narrationSeconds > BASE_SECONDS
      ? narrationSeconds + AUDIO_PADDING_SECONDS
      : BASE_SECONDS;
  return Math.ceil(seconds * FPS);
};

const BAR_COUNT = 8;
const MARKED_INDEX = 5;
const BAR_WIDTH = 120;
const BAR_GAP = 40;
const BASE_HEIGHT = 120;
const MARKED_HEIGHT = 420;

const COLORS = {
  background: "#fbfaf6",
  title: "#1f2544",
  bar: "#b4bffb",
  marked: "#ff7a1a",
};

export const TestClip: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Title fades in (and drifts up slightly) over the first second.
  const titleOpacity = interpolate(frame, [0, fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, fps], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Bars fade in after the title.
  const barsOpacity = interpolate(frame, [0.5 * fps, 1.2 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // The marked bar grows from 1.5 s until 0.5 s before the end.
  const growth = interpolate(
    frame,
    [1.5 * fps, durationInFrames - 0.5 * fps],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.cubic),
    },
  );
  const markedHeight = BASE_HEIGHT + growth * (MARKED_HEIGHT - BASE_HEIGHT);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 100,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 110,
            fontWeight: 700,
            letterSpacing: -2,
            color: COLORS.title,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          Grover's Algorithm
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: BAR_GAP,
            height: MARKED_HEIGHT,
            opacity: barsOpacity,
          }}
        >
          {Array.from({ length: BAR_COUNT }, (_, i) => {
            const isMarked = i === MARKED_INDEX;
            return (
              <div
                key={i}
                style={{
                  width: BAR_WIDTH,
                  height: isMarked ? markedHeight : BASE_HEIGHT,
                  borderRadius: 12,
                  backgroundColor: isMarked ? COLORS.marked : COLORS.bar,
                  boxShadow: isMarked
                    ? `0 0 ${40 * growth}px ${COLORS.marked}80`
                    : "none",
                }}
              />
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
