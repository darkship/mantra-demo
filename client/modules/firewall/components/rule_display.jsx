import React from 'react';
import {DragSource, DropTarget} from 'react-dnd';
import {findDOMNode} from 'react-dom';

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      ...props,
    };
  },
};
const cardTarget = {
  hover(props, monitor, component) {
    const dragItem=monitor.getItem();// getItem() returns cardsource...
    const dragIndex = dragItem.index;
    const hoverIndex = props.index;// drop index

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    dragItem.move(dragItem.rule, dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
};

/**
 * Specifies the props to inject into your component.
 * @param connect
 * @param monitor
 * @return {{connectDragSource: {object}, isDragging: {object}}}
 */
const collectDrag =(connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}
const collectDrop = (connect) => ({
  connectDropTarget: connect.dropTarget(),
});

/**
 * RuleDisplay : display a rule (can't edit)
 */
class RuleDisplay extends React.Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * runs delete action
   */
  delete() {
    this.props.delete(this.props.rule);
  }

  /**
   * sets to edit mode
   */
  edit() {
    this.props.showEditor(this.props.rule);
  }

  /**
   * renders a draggable rule
   * @return {xml}
   */
  render() {
    const {isDragging, connectDropTarget,connectDragSource} = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDropTarget(connectDragSource(
      <div className='rule-display' style={{opacity}} >
        <div className='rule-drag'>
          <span className='glyphicon glyphicon-th'></span>
        </div>
        <div className='rule-content'>
          <div className='title'>{this.props.rule.title}</div>
          <div className='action'><span>Action</span>
            {this.props.rule.action}</div>
          <div className='config'>
          <div className='inbound'><span>Inbound</span>
            {this.props.rule.inbound_host}:{this.props.rule.inbound_port}
            </div>
            <div className='outbound'>
              <span>Outbound</span>
              { this.props.rule.outbound_host}:{this.props.rule.outbound_port}
              </div>
          </div>
        </div>
        <div className='actions'>
          <div className='btn-group'>
            <button type='button'
                    className='btn btn-default'
                    onClick={this.edit.bind(this)}>Edit</button>
            <button type='button'
                    className='btn btn-default'
                    onClick={this.delete.bind(this)}>Delete</button>
          </div>
        </div>
      </div>
    ));
  }
}

export default DropTarget('rule', cardTarget, collectDrop)(DragSource('rule', cardSource, collectDrag)(RuleDisplay));
