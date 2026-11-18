// The order of scenes in the full video. Edit this list only to add,
// remove or reorder scenes — not when working inside a single scene.
import React from "react";
import { SCENE1_ID, Scene1Hook } from "./Scene1Hook";
import { SCENE2_ID, Scene2Classical } from "./Scene2Classical";
import { SCENE3_ID, Scene3Superposition } from "./Scene3Superposition";
import { SCENE4_ID, Scene4Oracle } from "./Scene4Oracle";
import { SCENE5_ID, Scene5Reflect } from "./Scene5Reflect";
import { SCENE6_ID, Scene6Repeat } from "./Scene6Repeat";
import { SCENE7_ID, Scene7Payoff } from "./Scene7Payoff";
import { SCENE8_ID, Scene8Qubits } from "./Scene8Qubits";
import { SCENE9_ID, Scene9Hadamard } from "./Scene9Hadamard";
import { SCENE10_ID, Scene10OracleMath } from "./Scene10OracleMath";
import { SCENE11_ID, Scene11Diffusion } from "./Scene11Diffusion";
import { SCENE12_ID, Scene12Rotation } from "./Scene12Rotation";
import { SCENE13_ID, Scene13Rounds } from "./Scene13Rounds";
import { SCENE14_ID, Scene14Waves } from "./Scene14Waves";
import { SCENE15_ID, Scene15Sqrt } from "./Scene15Sqrt";
import { SCENE16_ID, Scene16Optimality } from "./Scene16Optimality";
import { SCENE17_ID, Scene17Hardware } from "./Scene17Hardware";
import { SCENE18_ID, Scene18Recap } from "./Scene18Recap";

export type SceneEntry = {
  /** Matches narration/<id>.txt and public/narration/<id>.wav */
  id: string;
  /** Composition id for previewing the scene alone in Studio */
  compositionId: string;
  /** 1 = the big idea (~1 min), 2 = the math and physics */
  part: 1 | 2;
  component: React.FC;
};

// prettier-ignore
export const SCENES: SceneEntry[] = [
  // Part 1 — the big idea
  { id: SCENE1_ID, part: 1, compositionId: "Scene1-Hook", component: Scene1Hook },
  { id: SCENE2_ID, part: 1, compositionId: "Scene2-Classical", component: Scene2Classical },
  { id: SCENE3_ID, part: 1, compositionId: "Scene3-Superposition", component: Scene3Superposition },
  { id: SCENE4_ID, part: 1, compositionId: "Scene4-Oracle", component: Scene4Oracle },
  { id: SCENE5_ID, part: 1, compositionId: "Scene5-Reflect", component: Scene5Reflect },
  { id: SCENE6_ID, part: 1, compositionId: "Scene6-Repeat", component: Scene6Repeat },
  { id: SCENE7_ID, part: 1, compositionId: "Scene7-Payoff", component: Scene7Payoff },
  // Part 2 — the math and physics
  { id: SCENE8_ID, part: 2, compositionId: "Scene8-Qubits", component: Scene8Qubits },
  { id: SCENE9_ID, part: 2, compositionId: "Scene9-Hadamard", component: Scene9Hadamard },
  { id: SCENE10_ID, part: 2, compositionId: "Scene10-OracleMath", component: Scene10OracleMath },
  { id: SCENE11_ID, part: 2, compositionId: "Scene11-Diffusion", component: Scene11Diffusion },
  { id: SCENE12_ID, part: 2, compositionId: "Scene12-Rotation", component: Scene12Rotation },
  { id: SCENE13_ID, part: 2, compositionId: "Scene13-Rounds", component: Scene13Rounds },
  { id: SCENE14_ID, part: 2, compositionId: "Scene14-Waves", component: Scene14Waves },
  { id: SCENE15_ID, part: 2, compositionId: "Scene15-Sqrt", component: Scene15Sqrt },
  { id: SCENE16_ID, part: 2, compositionId: "Scene16-Optimality", component: Scene16Optimality },
  { id: SCENE17_ID, part: 2, compositionId: "Scene17-Hardware", component: Scene17Hardware },
  { id: SCENE18_ID, part: 2, compositionId: "Scene18-Recap", component: Scene18Recap },
];
