import {createSelector} from "helpers/ReduxHelper";
import {IPros} from "./prosReducer";
import {Map} from "immutable";

const prosDataSelector: any = state => state.get("prosData");

export const prosSelector: any = createSelector(
    prosDataSelector, prosData => prosData.get("pros")
);

export interface IProsModuleProps extends Map<string, any> {
    pros: Map<string, IPros>;
}

export interface IProsSelectorVariables {
    pros?: boolean;
}

export default {
    pros: prosSelector
};
