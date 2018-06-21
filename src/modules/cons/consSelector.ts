import {createSelector} from "helpers/ReduxHelper";
import {ICons} from "./consReducer";
import {Map} from "immutable";

const consDataSelector: any = state => state.get("consData");

export const consSelector: any = createSelector(
    consDataSelector, consData => consData.get("cons")
);

export interface IConsModuleProps extends Map<string, any> {
    cons: Map<string, ICons>;
}

export interface IConsSelectorVariables {
    cons?: boolean;
}

export default {
    cons: consSelector
};
