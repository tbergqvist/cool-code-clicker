import { observable, action, computed } from "mobx";

export class CodeProject {
  @observable currentCode = 0;

  constructor(
    public readonly targetCode: number,
    public readonly name: string,
    public readonly profit: number
  ) {
  }

  @computed
  get targetReached() {
    return this.currentCode === this.targetCode;
  }

  @action
  increaseCode(amount: number) {
    this.currentCode += amount;
  }
}