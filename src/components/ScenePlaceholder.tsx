import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT_FAMILY } from "../theme";

// Temporary card for scenes that have not been animated yet.
// Replace it in the scene file with the real visuals from SCRIPT.md.
export const ScenePlaceholder: React.FC<{
  number: number;
  title: string;
  onScreen: string;
}> = ({ number, title, onScreen }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONT_FAMILY,
        padding: 160,
        textAlign: "center",
        opacity,
      }}
    >
      <div style={{ fontSize: 36, fontWeight: 600, color: COLORS.marked }}>
        Scene {number}
      </div>
      <h1 style={{ margin: "16px 0 40px", fontSize: 96, color: COLORS.text }}>
        {title}
      </h1>
      <p
        style={{
          margin: 0,
          maxWidth: 1300,
          fontSize: 36,
          lineHeight: 1.5,
          color: COLORS.mutedText,
        }}
      >
        {onScreen}
      </p>
    </AbsoluteFill>
  );
};
