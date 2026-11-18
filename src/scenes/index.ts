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

export type SceneEntry = {
  /** Matches narration/<id>.txt and public/narration/<id>.wav */
  id: string;
  /** Composition id for previewing the scene alone in Studio */
  compositionId: string;
  component: React.FC;
};

export const SCENES: SceneEntry[] = [
  { id: SCENE1_ID, compositionId: "Scene1-Hook", component: Scene1Hook },
  {
    id: SCENE2_ID,
    compositionId: "Scene2-Classical",
    component: Scene2Classical,
  },
  {
    id: SCENE3_ID,
    compositionId: "Scene3-Superposition",
    component: Scene3Superposition,
  },
  { id: SCENE4_ID, compositionId: "Scene4-Oracle", component: Scene4Oracle },
  { id: SCENE5_ID, compositionId: "Scene5-Reflect", component: Scene5Reflect },
  { id: SCENE6_ID, compositionId: "Scene6-Repeat", component: Scene6Repeat },
  { id: SCENE7_ID, compositionId: "Scene7-Payoff", component: Scene7Payoff },
];
