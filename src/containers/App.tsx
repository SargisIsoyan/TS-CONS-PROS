import {ISelectorVariables} from "services/selector";
import {mapDispatchToProps, mapStateToProps} from "helpers/ReduxHelper";
import {ICons} from "modules/cons/consReducer";
import {IPros} from "modules/pros/prosReducer";
import ItemList from "components/ItemList";
import Header from "components/Header";
import {connect} from "react-redux";
import "../../assets/main.scss";
import {List, Map} from "immutable";
import * as React from "react";
import {addCons, editCons, removeCons} from "modules/cons/consAction";
import {addPros, editPros, removePros} from "modules/pros/prosAction";

interface IAppProps {
    removePros: (id: string) => void;
    removeCons: (id: string) => void;
    editPros: (pros: IPros) => void;
    editCons: (cons: ICons) => void;
    addCons: (cons: ICons) => void;
    addPros: (pros: IPros) => void;
    pros: any;
    cons: any;
}

class App extends React.Component<IAppProps> {
    render(): JSX.Element {
        const {cons, pros} = this.props;
        console.log(cons);
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
                            edit={editPros}
                            add={addPros}
                            data={pros}
                            key="pros"
                        />
                        <ItemList
                            remove={removeCons}
                            edit={editCons}
                            add={addCons}
                            data={cons}
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
        cons: true
    },
    pros: {
        pros: true
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