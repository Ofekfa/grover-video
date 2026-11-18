// Studio preview of AmplitudeBars: one Grover round on 8 items
// (equal → oracle flip → reflect about the mean), for checking the look.
import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "../theme";
import {
  AmplitudeBars,
  EQUAL_AMPLITUDE,
  KET_LABELS,
  MARKED_INDEX,
} from "./AmplitudeBars";

const a = EQUAL_AMPLITUDE;
const equal = Array(8).fill(a);
const flipped = equal.map((v, i) => (i === MARKED_INDEX ? -v : v));
const mean = flipped.reduce((s, v) => s + v, 0) / 8;
const reflected = flipped.map((v) => 2 * mean - v);

const mix = (from: number[], to: number[], t: number) =>
  from.map((v, i) => v + (to[i] - v) * t);

export const AmplitudeBarsPreview: React.FC = () => {
  const frame = useCurrentFrame();
  const flipT = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const reflectT = interpolate(frame, [90, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const values = mix(mix(equal, flipped, flipT), reflected, reflectT);
  const meanOpacity = interpolate(frame, [60, 75, 125, 140], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AmplitudeBars
        values={values}
        labels={KET_LABELS}
        meanValue={mean}
        meanOpacity={meanOpacity}
        valueLabels={values.map((v) => v.toFixed(2))}
        probabilityOpacity={interpolate(frame, [150, 165], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}
      />
    </AbsoluteFill>
  );
};
