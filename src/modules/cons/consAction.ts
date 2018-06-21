import {ICons, CONS_REDUCER_ACTION_TYPES} from "./consReducer";

export interface IConsActions {
    type: string;
    payload?: {
        cons?: ICons;
        id?: string;
    };
}

export function addCons(cons: ICons): IConsActions {
    return {type: CONS_REDUCER_ACTION_TYPES.ADD, payload: {cons}};
}

export function editCons(cons: ICons): IConsActions {
    return {type: CONS_REDUCER_ACTION_TYPES.EDIT, payload: {cons}};
}

export function removeCons(id: string): IConsActions {
    return {type: CONS_REDUCER_ACTION_TYPES.REMOVE, payload: {id}};
}
