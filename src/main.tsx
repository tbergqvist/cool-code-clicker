import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from "mobx-react";

import { system } from "./model/system";
import { AppView } from "./view/app-view";

setTimeout(()=> {
  ReactDom.render(
    <Provider {...system}>
      <AppView />
    </Provider>
    , 
    document.getElementById("app")!);
});