import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from "mobx-react";

import { system } from "./model/system";
import { App } from "./view/app";

setTimeout(()=> {
  ReactDom.render(
    <Provider {...system}>
      <App />
    </Provider>
    , 
    document.getElementById("app")!);
});