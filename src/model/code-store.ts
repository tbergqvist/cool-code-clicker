import { observable, action } from "mobx";

export class CodeStore {
  @observable code = 0;

  @action
  increaseCode(amount: number) {
    this.code += amount;
  }
}