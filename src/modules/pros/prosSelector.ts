import {createSelector} from "helpers/Utils";
import {IPros} from "./prosReducer";
import {Map} from "immutable";

const prosDataSelector: any = state => state.get("prosData");

export const prosSelector: any = createSelector(
    prosDataSelector, prosData => prosData.get("pros")
);

export const prosArraySelector: any = createSelector(
    prosSelector, pros => pros && pros.valueSeq().sort((pros1, pros2) => pros1.get("index") - pros2.get("index"))
);

export interface IProsModuleProps extends Map<string, any> {
    pros: Map<string, IPros>;
}

export interface IProsSelectorVariables {
    prosArray?: boolean;
    pros?: boolean;
}

export default {
    prosArray: prosArraySelector,
    pros: prosSelector
};
