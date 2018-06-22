import {ConnectDragSource, ConnectDropTarget, DragSource, DropTarget} from 'react-dnd';
import {IPros} from "modules/pros/prosReducer";
import {ICons} from "modules/cons/consReducer";
import * as React from "react";
import flow from "lodash/flow";
import ReactDOM from "react-dom";

interface IItemProps {
    moveItem: (dragIndex: number, hoverIndex: number) => void;
    setActiveItem: (item: IPros | ICons) => void;
    connectDropTarget: ConnectDropTarget;
    connectDragSource: ConnectDragSource;
    isDragging?: boolean;
    item: IPros | ICons;
}

const itemSource = {
    beginDrag(props) {
        return {
            id: props.item.get("id"),
            index: props.item.get("index"),
        }
    },
}

const itemTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.item.get("index");

        if (dragIndex === hoverIndex) {
            return;
        }

        const element = ReactDOM.findDOMNode(component) as Element;
        const hoverBoundingRect = element.getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        props.moveItem(dragIndex, hoverIndex);
        monitor.getItem().index = hoverIndex;
    }
}

class Item extends React.Component<IItemProps> {
    render(): JSX.Element {
        const {
            connectDropTarget,
            connectDragSource,
            setActiveItem,
            item
        } = this.props;

        return connectDragSource(connectDropTarget(
            <p onClick={() => setActiveItem(item)}>
                {item.get("text")}
            </p>
            )
        );
    }
}

export default flow([
    DragSource("item", itemSource, (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    })),
    DropTarget("item", itemTarget, connect => ({
        connectDropTarget: connect.dropTarget(),
    }))
])(Item);