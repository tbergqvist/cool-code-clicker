import { CodeProjects } from "./code-projects";
import { Unlockables } from "./unlockables";
import { Resources } from "./resources";
import { Research } from "./research";

let resources = new Resources();
let unlockables = new Unlockables();
let research = new Research(resources, unlockables);
let codeProjects = new CodeProjects(unlockables, resources, research);

let systemImp = {
  codeProjects,
  unlockables,
  resources,
  research
};

export type System = typeof systemImp;

export let system: System = systemImp;