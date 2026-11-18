// Shared amplitude-bar chart used by Part 1 and Part 2.
// It is a pure drawing component: the scene animates by passing changing
// `values` (and optional mean / probability props) every frame.
import React from "react";
import { COLORS, FONT_FAMILY } from "../theme";

export const KET_LABELS = [
  "|000⟩",
  "|001⟩",
  "|010⟩",
  "|011⟩",
  "|100⟩",
  "|101⟩",
  "|110⟩",
  "|111⟩",
];

/** The marked item: bar #6, state |101⟩. */
export const MARKED_INDEX = 5;

/** Amplitude 1/√8, the equal superposition of 8 states. */
export const EQUAL_AMPLITUDE = 1 / Math.sqrt(8);

export type AmplitudeBarsProps = {
  /** One amplitude per bar. Negative values point down from the axis. */
  values: number[];
  /** Index of the highlighted (orange) bar. Use null for no highlight. */
  markedIndex?: number | null;
  /** Pixel height of an amplitude of 1.0. */
  unitHeight?: number;
  barWidth?: number;
  gap?: number;
  /** Draw the horizontal zero axis. */
  showAxis?: boolean;
  /** 0..1 opacity of the axis, for fading it in. */
  axisOpacity?: number;
  /** Labels under the axis (e.g. KET_LABELS). */
  labels?: string[];
  labelOpacity?: number;
  /** Draw a dashed line at this amplitude (the mean), or null for none. */
  meanValue?: number | null;
  meanLabel?: string;
  meanOpacity?: number;
  /** 0..1 opacity of a faint second bar showing probability = amplitude². */
  probabilityOpacity?: number;
  /** Text shown above/below each bar (e.g. values). Null to hide. */
  valueLabels?: (string | null)[];
  style?: React.CSSProperties;
};

export const AmplitudeBars: React.FC<AmplitudeBarsProps> = ({
  values,
  markedIndex = MARKED_INDEX,
  unitHeight = 400,
  barWidth = 110,
  gap = 36,
  showAxis = true,
  axisOpacity = 1,
  labels,
  labelOpacity = 1,
  meanValue = null,
  meanLabel = "average",
  meanOpacity = 1,
  probabilityOpacity = 0,
  valueLabels,
  style,
}) => {
  const width = values.length * barWidth + (values.length - 1) * gap;
  // Room above and below the axis so values in [-1, 1] always fit.
  const half = unitHeight;
  const height = half * 2;
  const axisY = half;

  return (
    <div style={{ position: "relative", width, height, ...style }}>
      {values.map((value, i) => {
        const isMarked = markedIndex === i;
        const h = Math.abs(value) * unitHeight;
        const top = value >= 0 ? axisY - h : axisY;
        const left = i * (barWidth + gap);
        const probH = value * value * unitHeight;
        return (
          <React.Fragment key={i}>
            {probabilityOpacity > 0 ? (
              <div
                style={{
                  position: "absolute",
                  left: left + barWidth * 0.3,
                  width: barWidth * 0.4,
                  top: axisY - probH,
                  height: probH,
                  borderRadius: 6,
                  backgroundColor: isMarked ? COLORS.marked : COLORS.text,
                  opacity: 0.25 * probabilityOpacity,
                }}
              />
            ) : null}
            <div
              style={{
                position: "absolute",
                left,
                width: barWidth,
                top,
                height: h,
                borderRadius: 12,
                backgroundColor: isMarked ? COLORS.marked : COLORS.bar,
                opacity: probabilityOpacity > 0 ? 0.85 : 1,
              }}
            />
            {valueLabels?.[i] ? (
              <div
                style={{
                  position: "absolute",
                  left,
                  width: barWidth,
                  top: value >= 0 ? top - 52 : top + h + 8,
                  textAlign: "center",
                  fontFamily: FONT_FAMILY,
                  fontSize: 30,
                  fontWeight: 600,
                  color: isMarked ? COLORS.marked : COLORS.mutedText,
                }}
              >
                {valueLabels[i]}
              </div>
            ) : null}
            {labels?.[i] ? (
              <div
                style={{
                  position: "absolute",
                  left: left - 20,
                  width: barWidth + 40,
                  // Below the axis normally; above it when the bar points
                  // down, so it never collides with the value label.
                  top: value < 0 ? axisY - 52 : axisY + 16,
                  textAlign: "center",
                  fontFamily: FONT_FAMILY,
                  fontSize: 30,
                  color: isMarked ? COLORS.marked : COLORS.text,
                  opacity: labelOpacity,
                }}
              >
                {labels[i]}
              </div>
            ) : null}
          </React.Fragment>
        );
      })}

      {showAxis ? (
        <div
          style={{
            position: "absolute",
            left: -40,
            width: width + 80,
            top: axisY - 2,
            height: 4,
            borderRadius: 2,
            backgroundColor: COLORS.text,
            opacity: 0.6 * axisOpacity,
          }}
        />
      ) : null}

      {meanValue !== null ? (
        <>
          <div
            style={{
              position: "absolute",
              left: -40,
              width: width + 80,
              top: axisY - meanValue * unitHeight - 2,
              borderTop: `4px dashed ${COLORS.text}`,
              opacity: meanOpacity,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: width + 56,
              top: axisY - meanValue * unitHeight - 22,
              fontFamily: FONT_FAMILY,
              fontSize: 32,
              fontStyle: "italic",
              color: COLORS.text,
              opacity: meanOpacity,
              whiteSpace: "nowrap",
            }}
          >
            {meanLabel}
          </div>
        </>
      ) : null}
    </div>
  );
};
