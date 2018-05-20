import * as React from "react";
import { inject, observer } from "mobx-react";

import { System } from "../model/system";
import { CodeProjects } from "../model/code-projects";
import { ProjectView } from "./project-view";
import { ResourcesView } from "./resources-view";
import { ResearchView } from "./research-view";

interface MainParameters {
  codeProjects: CodeProjects;
}

export const AppView = inject(
  (system: System)=>({codeProjects: system.codeProjects})
)(observer(
  ({codeProjects}: MainParameters) => {
    return (
      <div>
        <ResourcesView></ResourcesView>
        <ProjectView project={codeProjects.currentProject}></ProjectView>
        <ResearchView></ResearchView>        
      </div>
    );
  }
));