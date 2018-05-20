import * as React from "react";
import { inject, observer } from "mobx-react";

import { System } from "../model/system";
import { Unlockables } from "../model/unlockables";
import { Research, ResearchItem } from "../model/research";

interface Parameters {
  unlockables: Unlockables;
  research: Research;
}

const ResearchItemView = observer(
  ({researchItem}: {researchItem: ResearchItem}) => {
    return (
      <div className={researchItem.canAfford ? "can-afford" : ""} title={researchItem.description} onClick={()=>researchItem.buy()}>
        <div>{researchItem.name}</div>
        Cost: ${researchItem.bought ? "BOUGHT!" : researchItem.cost}
      </div>
    );
  }
);

export const ResearchView = inject(
  (system: System)=>({
    unlockables: system.unlockables,
    research: system.research
  })
)(observer(
  ({unlockables, research}: Parameters) => {
    if (!unlockables.unlockedResearch) {
      return null;
    }
    return (
      <div>
        {research.researchItems.map(item => (<ResearchItemView key={item.name} researchItem={item}></ResearchItemView>))}
      </div>
    );
  }
));