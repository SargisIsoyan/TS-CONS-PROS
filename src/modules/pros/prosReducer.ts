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
    text: string;
    id: string;
}

interface IProsData extends Map<string, any> {
    pros: Map<string, IPros>
}

const initialState: IProsData = fromJS({
    pros: {}
});

export default (state = initialState, {type, payload}: IProsActions) => {
    switch (type) {
        case PROS_REDUCER_ACTION_TYPES.ADD:
        case PROS_REDUCER_ACTION_TYPES.EDIT:
            return state.set(payload.pros.get("id"), payload.pros);

        case PROS_REDUCER_ACTION_TYPES.REMOVE:
            return state.delete(payload.id);

        default:
            return state;
    }
}
