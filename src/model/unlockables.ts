import { observable, action, computed } from "mobx";

export class Unlockables {
  @observable
  private _unlockedMoney = false;

  @observable
  private _unlockedResearch = false;

  @action
  unlockMoney() {
    this._unlockedMoney = true;
  }

  @action
  unlockResearch() {
    this._unlockedResearch = true;
  }

  @computed
  get unlockedMoney() {
    return this._unlockedMoney;
  }

  @computed
  get unlockedResearch() {
    return this._unlockedResearch;
  }
}