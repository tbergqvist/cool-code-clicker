import { observable, when, computed } from "mobx";
import { CodeProject } from "./code-project";
import { Unlockables } from "./unlockables";
import { Resources } from "./resources";
import { Research } from "./research";

export class CodeProjects {
  @observable 
  private _currentProject: CodeProject;

  constructor(
    private _unlockables: Unlockables,
    private _resources: Resources,
    private _research: Research
  ) {
      this._currentProject = new CodeProject(10, "Cool stuff", 10, _research);

      when(
        ()=> this._currentProject.targetReached,
        ()=> this.newProject()
      );
  }

  private newProject() {
    this._unlockables.unlockMoney();
    this._resources.depositMoney(this._currentProject.profit);
    this._currentProject = new CodeProject(10, "Cool stuff", 10, this._research);

    when(
      ()=> this._currentProject.targetReached,
      ()=> this.newProject()
    );
  }

  @computed
  get currentProject() {
    return this._currentProject;
  }
}