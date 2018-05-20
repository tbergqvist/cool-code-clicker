import { CodeProjects } from "./code-projects";
import { Unlockables } from "./unlockables";
import { Resources } from "./resources";

let resources = new Resources();
let unlockables = new Unlockables();
let codeProjects = new CodeProjects(unlockables, resources);

let systemImp = {
  codeProjects,
  unlockables,
  resources
};

export type System = typeof systemImp;

export let system: System = systemImp;