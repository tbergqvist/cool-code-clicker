import * as React from "react";
import { observer } from "mobx-react";

import { CodeProject } from "../model/code-project";

interface Parameters {
  project: CodeProject;
}

export const ProjectView = observer(({project}: Parameters) => {
    return (
      <div>
        <span>Project: {project.name}</span>
        <div>
          <span>Code: {project.currentCode}/{project.targetCode}</span>
        </div>
        <div>
          <button onClick={()=>project.increaseCode(1)}>Do code</button>
        </div>
      </div>
    );
});