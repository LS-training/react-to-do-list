import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "./components/ToDoInput/ToDoInput";
import ToDoList from "./components/ToDoList/ToDoList";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
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
              handleDone={this.handleDone}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
