const Provider  = require("react-redux/src/components/Provider.js");
import store from "services/store";
import App from "containers/App";
import * as React from "react";
import * as ReactDOM from 'react-dom';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById("app")as HTMLElement);

