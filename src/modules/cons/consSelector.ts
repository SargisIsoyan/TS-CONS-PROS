import {createSelector} from "helpers/Utils";
import {ICons} from "./consReducer";
import {Map} from "immutable";

const consDataSelector: any = state => state.get("consData");

export const consSelector: any = createSelector(
    consDataSelector, consData => consData.get("cons")
);

export const consArraySelector: any = createSelector(
    consSelector, cons => cons && cons.valueSeq().sort((cons1, cons2) => cons1.get("index") - cons2.get("index"))
);

export interface IConsModuleProps extends Map<string, any> {
    cons: Map<string, ICons>;
}

export interface IConsSelectorVariables {
    consArray?: boolean;
    cons?: boolean;
}

export default {
    consArray: consArraySelector,
    cons: consSelector
};
