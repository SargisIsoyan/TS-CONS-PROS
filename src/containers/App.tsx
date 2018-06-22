import {mapDispatchToProps, mapStateToProps} from "helpers/ReduxHelper";
import {addCons, editCons, removeCons} from "modules/cons/consAction";
import {addPros, editPros, removePros} from "modules/pros/prosAction";
import {ISelectorVariables} from "services/selector";
import {ICons} from "modules/cons/consReducer";
import {IPros} from "modules/pros/prosReducer";
import ItemList from "components/ItemList";
import Header from "components/Header";
import {connect} from "react-redux";
import "../../assets/main.scss";
import * as React from "react";
import {List} from "immutable";

interface IAppProps {
    removePros: (id: string) => void;
    removeCons: (id: string) => void;
    editPros: (pros: IPros) => void;
    editCons: (cons: ICons) => void;
    addCons: (cons: ICons) => void;
    addPros: (pros: IPros) => void;
    consArray: List<any>;
    prosArray: List<any>;
}

class App extends React.Component<IAppProps> {
    render(): JSX.Element {
        const {consArray, prosArray, removePros, addCons, addPros, editCons, editPros, removeCons} = this.props;

        return (
            <div className="container">
                <div className="content">
                    <Header/>
                    <div className="heading-row">
                        <div>PROS</div>
                        <div>CONS</div>
                    </div>
                    <div className="content-row">
                        <ItemList
                            remove={removePros}
                            data={prosArray}
                            edit={editPros}
                            add={addPros}
                            key="pros"
                        />
                        <ItemList
                            remove={removeCons}
                            data={consArray}
                            edit={editCons}
                            add={addCons}
                            key="cons"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const selectorVariables: ISelectorVariables = {
    cons: {
        consArray: true
    },
    pros: {
        prosArray: true
    }
};

const actions: any = {
    removePros,
    removeCons,
    editPros,
    editCons,
    addCons,
    addPros
};

export default connect(mapStateToProps(selectorVariables), mapDispatchToProps(actions))(App);