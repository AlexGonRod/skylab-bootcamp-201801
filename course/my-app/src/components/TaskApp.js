'use strict';

import React, { Component } from 'react';
import Task from './Task';
import TodoList from './TodoList';
import InputSubmit from './InputSubmit';
import SuccessButton from './SuccessButton';
import DoneList from './DoneList';
import RemoveButton from './RemoveButton';


// import ReactDOM from 'react-dom';
class TaskApp extends Component {
    constructor() {
        super()

        this.state = {
            tasks: []
        }
    }

    addTask(title) {
        this.setState(prevState => ({
            tasks: prevState.tasks.concat(new Task(title))
        }))
    }

    checkTask(id) {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task => {
                if (task.id === id)
                    task.done = true

                return task
            })
        }))
    }

    checkAllTasks() {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task => {
                task.done = true

                return task
            })
        }))
    }

    removeTask(id) {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== id)
        }))
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <TodoList onAddTask={this.addTask.bind(this)} onCheckAllTasks={this.checkAllTasks.bind(this)} tasks={this.state.tasks} onCheckTask={this.checkTask.bind(this)} />
                </div>
                <div className="col-md-6">
                    <DoneList tasks={this.state.tasks} onRemoveTask={this.removeTask.bind(this)} />
                </div>
            </div>
        </div>
    }
}



export default TaskApp
