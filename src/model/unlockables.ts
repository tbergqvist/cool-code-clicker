import { observable, action, computed } from "mobx";

export class Unlockables {
  @observable
  private _unlockedMoney = false;

  @action
  unlockMoney() {
    this._unlockedMoney = true;
  }

  @computed
  get unlockedMoney() {
    return this._unlockedMoney;
  }
}