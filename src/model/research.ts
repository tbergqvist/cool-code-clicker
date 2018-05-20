import { Resources } from "./resources";
import { when, action, observable, computed } from "mobx";
import { Unlockables } from "./unlockables";

export class ResearchItem {
  @observable
  private _bought = false;

  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly cost: number,
    private readonly _resources: Resources
  ) {
  }

  @computed
  get bought() {
    return this._bought;
  }

  @computed
  get canAfford() {
    return this._resources.money >= this.cost;
  }

  @action
  buy() {
    if (this.bought) {
      return;
    }
    this._bought = true;
    this._resources.withdrawMoney(this.cost);
  }
}

export class Research {
  private readonly _researchItems: ResearchItem[] = [];

  constructor(
    _resources: Resources,
    _unlockables: Unlockables
  ) {
      when(
        ()=>_resources.money === 10,
        ()=>{
          _unlockables.unlockResearch();
          this._researchItems.push(
            new ResearchItem("Mouse Upgrade", "This mouse upgrade will give you double the code for each click!!!", 20, _resources)
          );
        }
      );
  }

  @computed
  get clickMultiplier() {
    return this._researchItems.filter(item => item.bought).length + 1;
  }

  @computed
  get researchItems() {
    return this._researchItems;
  }
}