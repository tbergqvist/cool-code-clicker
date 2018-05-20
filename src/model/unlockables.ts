import { observable, action } from "mobx";

export class Unlockables {
  @observable
  unlockedMoney = false;

  @action
  unlockMoney() {
    this.unlockedMoney = true;
  }
}