import {compose, createStore} from "redux";
import selector from "services/selector";
import reducer from "services/reducer";
import {Map} from "immutable";

let store: any;

const initialState: any = Map();

if (process && process.env.NODE_ENV !== "production") {
    const composeEnhancers: any = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        stateSanitizer: state => selector(state, true)
    }) : compose;
    store = createStore(reducer, initialState, composeEnhancers());
} else {
    store = createStore(reducer, initialState);
}

export default store;