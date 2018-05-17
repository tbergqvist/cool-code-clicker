import * as React from "react";
import { inject, observer } from "mobx-react";

import { System } from "../model/system";
import { CodeStore } from "../model/money-store";

interface MainParameters {
  codeStore: CodeStore;
}

export const App = inject(
  (system: System)=>({codeStore: system.codeStore})
)(observer(
  ({codeStore}: MainParameters) => {
  return <div>
    <span>Code: {codeStore.code}</span>
    <div>
      <button onClick={()=>codeStore.increaseCode(1)}>Do code</button>
    </div>
  </div>
  }
));