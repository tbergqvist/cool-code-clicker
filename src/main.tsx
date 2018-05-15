import * as React from 'react';
import * as ReactDom from 'react-dom';

import { App } from "./app";
import {observer} from 'mobx-react';

const app = new App();

const Main = observer(({app}: {app: App}) =>
  <div>
    <span>Code: {app.code}</span>
    <div>
      <button onClick={()=>app.increaseCode(1)}>Do code</button>
    </div>
  </div>
);

setTimeout(()=> {
  ReactDom.render(<Main app={app}/>, document.getElementById("app")!);
});