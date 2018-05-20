import * as React from "react";
import { inject, observer } from "mobx-react";

import { System } from "../model/system";
import { Unlockables } from "../model/unlockables";
import { Resources } from "../model/resources";

interface MainParameters {
  unlockables: Unlockables;
  resources: Resources;
}

export const ResourcesView = inject(
  (system: System)=>({unlockables: system.unlockables, resources: system.resources})
)(observer(
  ({unlockables, resources}: MainParameters) => {
    return (
      <div>
        {unlockables.unlockedMoney ? (<div><span>${resources.money}</span></div>) : null}
      </div>
    );
  }
));