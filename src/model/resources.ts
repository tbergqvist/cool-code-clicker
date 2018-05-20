import { observable, action, computed } from "mobx";

export class Resources {
  @observable
  private _money = 0;

  @action
  addMoney(amount: number) {
    this._money += amount;
  }

  @computed
  get money() {
    return this._money;
  }
}