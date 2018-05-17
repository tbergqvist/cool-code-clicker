import { CodeStore } from "./code-store";

let systemImp = {
  codeStore: new CodeStore()
};

export type System = typeof systemImp;

export let system: System = systemImp;