import {compose, createStore} from "redux";
import reducer from "services/reducer";
import {fromJS} from "immutable";

let store: any;

const initialState: any = fromJS({consData: {}, prosData: {}});

if (process && process.env.NODE_ENV !== "production") {
    const composeEnhancers: any = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    store = createStore(reducer, initialState, composeEnhancers());
} else {
    store = createStore(reducer, initialState);
}

export default store;