import { observable, action, computed } from "mobx";
import { Research } from "./research";

export class CodeProject {
  @observable 
  private _currentCode = 0;

  constructor(
    public readonly targetCode: number,
    public readonly name: string,
    public readonly profit: number,
    private readonly _research: Research
  ) {
  }

  @action
  increaseCode(amount: number) {
    this._currentCode += amount * this._research.clickMultiplier;
  }

  @computed
  get currentCode() {
    return this._currentCode;
  }

  @computed
  get targetReached() {
    return this._currentCode === this.targetCode;
  }
}