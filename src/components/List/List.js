import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoList from "../ToDoList/ToDoList";
import { v4 as uuidv4 } from "uuid";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: uuidv4(),
      item: "",
      editItem: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true,
    });
  };
  // Function to Change Position of To Do Item one to the top
  handleChangePositionUp = (id) => {
    const selectedItem = this.state.items.find((item) => item.id === id); // Item I want to change
    const selectedItemIndex = this.state.items.findIndex(
      // Index of Item i Want to change
      (item) => item.id === id
    );
    if (this.state.items.length === 1) {
      return;
    }
    if (selectedItemIndex === 0) {
      return;
    }
    const IndexOfInsertion = selectedItemIndex - 1; // Index of Insertion
    const ChangingElement = this.state.items[selectedItemIndex - 1]; // get helper var to save second element of change
    const newArray = this.state.items;
    newArray[IndexOfInsertion] = selectedItem;
    newArray[IndexOfInsertion + 1] = ChangingElement; //newArray has the new Order
    this.setState({
      items: newArray,
    });
  };
  // Function to Change Position of To Do Item one to the bottom
  handleChangePositionDown = (id) => {
    const selectedItem = this.state.items.find((item) => item.id === id); // Item I want to change
    const selectedItemIndex = this.state.items.findIndex(
      // Index of Item i Want to change
      (item) => item.id === id
    );
    if (this.state.items.length === 1) {
      return;
    }
    if (selectedItemIndex === this.state.items.length - 1) {
      return;
    }

    const IndexOfInsertion = selectedItemIndex + 1; // Index of Insertion
    const ChangingElement = this.state.items[selectedItemIndex + 1]; // get helper var to save second element of change
    const newArray = this.state.items;
    newArray[IndexOfInsertion] = selectedItem;
    newArray[IndexOfInsertion - 1] = ChangingElement; //newArray has the new Order
    this.setState({
      items: newArray,
    });
  };

  //Function to Sort Item Down to Bottom, when DONE
  handleDone = (id) => {
    const selectedItem = this.state.items.find((item) => item.id === id); // Item I want to change
    let newArray = this.state.items.filter((item) => item.id !== id);
    newArray = [...newArray, selectedItem];
    this.setState({
      items: newArray,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center ">ToDo Input</h3>
            <ToDoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <ToDoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleChangePositionUp={this.handleChangePositionUp}
              handleChangePositionDown={this.handleChangePositionDown}
              handleDone={this.handleDone}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default List;
