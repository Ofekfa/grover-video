// Scene 1 — Hook. See SCRIPT.md "Scene 1" for the plan.
// Narration: narration/scene1-hook.txt
import React from "react";
import { Audio } from "@remotion/media";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { narrationFile } from "../scene-timing";
import { COLORS, FONT_FAMILY } from "../theme";

export const SCENE1_ID = "scene1-hook";

const BAR_COUNT = 8;
const MARKED_INDEX = 5;
const BAR_WIDTH = 120;
const BAR_GAP = 40;
const BASE_HEIGHT = 120;
const MARKED_HEIGHT = 420;

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  // Inside the full video this is the scene's own length.
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
        fontFamily: FONT_FAMILY,
      }}
    >
      <Audio src={narrationFile(SCENE1_ID)} />
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
            color: COLORS.text,
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
