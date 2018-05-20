import { observable, action, computed } from "mobx";

export class Resources {
  @observable
  private _money = 0;

  @action
  depositMoney(amount: number) {
    this._money += amount;
  }

  @action
  withdrawMoney(amount: number) {
    //TODO: make sure we have the money
    this._money -= amount;
  }

  @computed
  get money() {
    return this._money;
  }
}