import {IPros, PROS_REDUCER_ACTION_TYPES} from "./prosReducer";

export interface IProsActions {
    type: string;
    payload?: {
        pros?: IPros;
        id?: string;
    };
}

export function addPros(pros: IPros): IProsActions {
    return {type: PROS_REDUCER_ACTION_TYPES.ADD, payload: {pros}};
}

export function editPros(pros: IPros): IProsActions {
    return {type: PROS_REDUCER_ACTION_TYPES.EDIT, payload: {pros}};
}

export function removePros(id: string): IProsActions {
    return {type: PROS_REDUCER_ACTION_TYPES.REMOVE, payload: {id}};
}
