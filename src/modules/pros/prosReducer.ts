import {IProsActions} from "./prosAction";
import {fromJS, Map} from "immutable";

interface IProsReducerActionTypes {
    REMOVE: string;
    EDIT: string;
    ADD: string;
}

export const PROS_REDUCER_ACTION_TYPES: IProsReducerActionTypes = {
    REMOVE: "PROS:REMOVE",
    EDIT: "PROS:EDIT",
    ADD: "PROS:ADD"
};

export interface IPros extends Map<string, string> {
    index: number;
    text: string;
    id: string;
}

interface IProsData extends Map<string, any> {
    pros: Map<string, any>
}

const initialState: IProsData = fromJS({
    pros: {}
});

export default (state = initialState, {type, payload}: IProsActions) => {
    switch (type) {
        case PROS_REDUCER_ACTION_TYPES.ADD:
        case PROS_REDUCER_ACTION_TYPES.EDIT:
            return state.setIn(["pros", payload.pros.get("id")], Map(payload.pros));

        case PROS_REDUCER_ACTION_TYPES.REMOVE:
            return state.deleteIn(["pros", payload.id]);

        default:
            return state;
    }
}
