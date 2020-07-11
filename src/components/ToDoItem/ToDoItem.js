import React, { Component } from "react";
import "../../index.css";
export default class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDone: false,
    };
  }

  helperFunction = () => {
    this.handleDoneToggle();
  };

  handleDoneToggle = () => {
    const active = this.state.itemDone;
    this.setState({
      itemDone: !active,
    });
    console.log(this.state.itemDone);
  };

  render() {
    const {
      title,
      handleDelete,
      handleEdit,
      handleChangePositionUp,
      handleChangePositionDown,
      handleDone,
    } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2 shadow">
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
            className={
              this.state.itemDone
                ? "mx-2 text-success pointer"
                : "mx-2 text-secondary pointer"
            }
            onClick={this.helperFunction}
          >
            {this.state.itemDone ? (
              <i class="fas fa-check-square" onClick={handleDone}></i>
            ) : (
              <i class="far fa-check-square" onClick={handleDone}></i>
            )}
          </span>
          <span className="mx-2 text-primary pointer" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2 text-danger pointer" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
          <span
            className="mx-2 text-secondary pointer"
            onClick={handleChangePositionUp}
          >
            <i class="fas fa-arrow-up"></i>
          </span>
          <span
            className="mx-2 text-secondary pointer"
            onClick={handleChangePositionDown}
          >
            <i class="fas fa-arrow-down"></i>
          </span>
        </div>
      </li>
    );
  }
}
