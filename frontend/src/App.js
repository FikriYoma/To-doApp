// frontend/src/App.js

import React, { Component } from 'react';
import axios from 'axios';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.getTasks();
  }

  getTasks = () => {
    axios.get('/tasks')
      .then((response) => {
        const data = response.data;
        this.setState({ tasks: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  updateTasks = (newTask) => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }));
  }

  render() {
    return (
      <div className="app">
        <h1>Todo App</h1>
        <TaskInput updateTasks={this.updateTasks} />
        <TaskList tasks={this.state.tasks} getTasks={this.getTasks} />
      </div>
    );
  }
}

export default App;
