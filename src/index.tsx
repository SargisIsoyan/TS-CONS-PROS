import {Provider} from "react-redux";
import store from "services/store";
import App from "containers/App";
import {render} from 'react-dom';
import * as React from "react";

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById("app"));

