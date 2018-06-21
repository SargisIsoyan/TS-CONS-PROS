import {IPros} from "modules/pros/prosReducer";
import {ICons} from "modules/cons/consReducer";
import {Map} from "immutable";
import * as React from "react";

interface IItemListProps {
    edit: (item: IPros | ICons) => void;
    add: (item: IPros | ICons) => void;
    remove: (id: string) => void;
    data: any;
}

interface IItemListState {
    activeInput: number;
}

export default class ItemList extends React.Component<IItemListProps, IItemListState> {

    constructor(props: IItemListProps) {
        super(props);

        this.state = {
            activeInput: -1
        };
    }

    get listItems() {
        const {data} = this.props;
        if(!data){
            return null;
        }
        return data.map((item, idx) => (
            <div className="row-item">
                <p>{item.get("text")}</p>
            </div>
        ));
    }

    render(): JSX.Element {
        return (
            <div className="item-list-wrapper">
                <div className="item-scroll-section">
                    {
                        this.listItems
                    }
                    <div className="row-item">
                        <input type="text"/>
                    </div>
                </div>
            </div>
        );
    }
}