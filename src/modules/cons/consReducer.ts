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
    text: string;
    id: string;
}

interface IConsData extends Map<string, any> {
    cons: Map<string, ICons>
}

const initialState: IConsData = fromJS({
    cons: {}
});

export default (state = initialState, {type, payload}: IConsActions) => {
    switch (type) {
        case CONS_REDUCER_ACTION_TYPES.ADD:
        case CONS_REDUCER_ACTION_TYPES.EDIT:
            return state.set(payload.cons.get("id"), payload.cons);

        case CONS_REDUCER_ACTION_TYPES.REMOVE:
            return state.delete(payload.id);

        default:
            return state;
    }
}
