import HTML5Backend from 'react-dnd-html5-backend'
import {ICons} from "modules/cons/consReducer";
import {IPros} from "modules/pros/prosReducer";
import {generateGUID} from "helpers/Utils";
import {DragDropContext} from 'react-dnd'
import {fromJS, List} from "immutable";
import * as React from "react";
import Item from "components/Item";

interface IItemListProps {
    edit: (item: IPros | ICons) => void;
    add: (item: IPros | ICons) => void;
    remove: (id: string) => void;
    data: List<any>;
}

interface IItemListState {
    activeItem: any;
}

class ItemList extends React.Component<IItemListProps, IItemListState> {

    state: IItemListState = {
        activeItem: null
    };

    onKeyPressed = event => {
        if (event.keyCode === 13) {
            this.onBlurHandle(event);
        }
    }

    onBlurHandle = ({target}) => {
        const {add, edit, data} = this.props;
        const {activeItem} = this.state;

        if (target.value) {
            const index = data ? data.size : 0;
            const item: ICons | IPros = fromJS({
                id: activeItem ? activeItem.get("id") : generateGUID(),
                index: activeItem ? activeItem.get("index") : index,
                text: target.value
            });

            if (activeItem === null) {
                add(item);
                target.value = "";
            } else {
                edit(item);
                this.setState({activeItem: null});
            }
        }
    }

    inputChange = ({target}) => {
        const {remove} = this.props;
        const {activeItem} = this.state;

        if (target.value.length === 0 && activeItem) {
            remove(activeItem.get("id"));
        }
    }

    setActiveItem = (item: IPros | ICons) => {
        this.setState({activeItem: item});
    }

    get listItems() {
        const {activeItem} = this.state;
        const {data} = this.props;

        if (!data) {
            return null;
        }

        return data.map((item) => (
            <div
                key={item.get("index")}
                className="row-item"
            >
                {
                    activeItem && activeItem.get("id") === item.get("id") ? (
                        <input
                            defaultValue={item.get("text")}
                            onKeyDown={this.onKeyPressed}
                            onChange={this.inputChange}
                            onBlur={this.onBlurHandle}
                            autoFocus={true}
                            type="text"
                        />
                    ) : (
                        <Item
                            setActiveItem={this.setActiveItem}
                            moveItem={this.moveItem}
                            item={item}
                        />
                    )
                }
            </div>
        ));
    }

    moveItem(dragIndex, hoverIndex) {
        //todo implement drag
    }

    render(): JSX.Element {
        return (
            <div className="item-list-wrapper">
                <div className="item-scroll-section">
                    {this.listItems}
                    <div className="row-item">
                        <input
                            onKeyDown={this.onKeyPressed}
                            onBlur={this.onBlurHandle}
                            type="text"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(ItemList)