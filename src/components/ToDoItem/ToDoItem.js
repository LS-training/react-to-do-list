import React, { Component } from "react";
import "../../index.css";
export default class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDone: false,
    };
  }

  handleDoneToggle = () => {
    const active = this.state.itemDone;
    this.setState({
      itemDone: !active,
    });
    console.log(this.state.itemDone);
  };

  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <span>
          {this.state.itemDone ? (
            <h6 className="done-item">
              <del>{title}</del>
            </h6>
          ) : (
            <h6>{title}</h6>
          )}
        </span>

        <div className="todo-icon">
          <span
            className="mx-2 text-primary pointer"
            onClick={this.handleDoneToggle}
          >
            <i className="fas fa-check"></i>
          </span>
          <span className="mx-2 text-success pointer" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2 text-danger pointer" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
