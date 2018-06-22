import {IConsActions} from "./consAction";
import {fromJS, Map} from "immutable";

interface IConsReducerActionTypes {
    REMOVE: string;
    EDIT: string;
    ADD: string;
}

export const CONS_REDUCER_ACTION_TYPES: IConsReducerActionTypes = {
    REMOVE: "CONS:REMOVE",
    EDIT: "CONS:EDIT",
    ADD: "CONS:ADD"
};

export interface ICons extends Map<string, string> {
    index: number;
    text: string;
    id: string;
}

interface IConsData extends Map<string, any> {
    cons: Map<string, any>
}

const initialState: IConsData = fromJS({
    cons: {}
});

export default (state = initialState, {type, payload}: IConsActions) => {
    switch (type) {
        case CONS_REDUCER_ACTION_TYPES.ADD:
        case CONS_REDUCER_ACTION_TYPES.EDIT:
            return state.setIn(["cons", payload.cons.get("id")], Map(payload.cons));

        case CONS_REDUCER_ACTION_TYPES.REMOVE:
            return state.deleteIn(["cons", payload.id]);

        default:
            return state;
    }
}
