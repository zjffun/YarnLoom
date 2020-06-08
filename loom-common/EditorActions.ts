import { action } from "typesafe-actions";

import { YarnNode } from "./YarnNode";

/** Types of messages that can be sent from the editor to the extension */
export enum YarnEditorMessageTypes {
  /** Called when a node is being opened in a VSCode text editor */
  OpenNode = "OpenNode",

  /** Set a specific node */
  SetNode = "SetNode",

  /** Set all nodes */
  SetNodes = "SetNodes",
}

export const setNodes = (nodes: YarnNode[]) =>
  action(YarnEditorMessageTypes.SetNodes, { nodes });

export const setNode = (node: YarnNode) =>
  action(YarnEditorMessageTypes.SetNode, { node });

export const openNode = (nodeId: string) =>
  action(YarnEditorMessageTypes.OpenNode, { nodeId });
