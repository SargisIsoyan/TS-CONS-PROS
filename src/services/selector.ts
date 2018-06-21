import {consSelector, IConsModuleProps, IConsSelectorVariables} from "modules/cons/consSelector";
import {IProsModuleProps, IProsSelectorVariables, prosSelector} from "modules/pros/prosSelector";
import {getAllProps, getProps} from "helpers/ReduxHelper";

export interface IStoreProps extends IConsModuleProps, IProsModuleProps {
    //Custom selectors
}

export interface ISelectorVariables {
    cons?: true | IConsSelectorVariables;
    pros?: true | IProsSelectorVariables;
}

const selectors: any = {
    cons: consSelector,
    pros: prosSelector
};

export default (state, variables: ISelectorVariables | true): any => variables === true ? getAllProps(selectors, state) : getProps(variables, selectors, state);