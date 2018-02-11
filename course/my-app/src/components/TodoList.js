import React, { Component } from 'react';
import InputSubmit from './InputSubmit';
import SuccessButton from './SuccessButton';

function TodoList(props) {
    return <div className="todolist not-done">
        <h1>Todos</h1>
        <InputSubmit onSubmit={props.onAddTask.bind(this)} placeholder={'Add todo'} />
        <SuccessButton onClick={props.onCheckAllTasks} label={'Mark all as done'} />
        <hr />
        <ul id="sortable" className="list-unstyled">
            {
                props.tasks.map((task) =>
                    task.done ? '' : <li className="ui-state-default" key={task.id}>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" defaultValue onClick={e => { e.preventDefault(); props.onCheckTask(task.id) }} />{task.title}</label>
                        </div>
                    </li>)
            }
        </ul>
        <div className="todo-footer">
            <strong><span className="count-todos">{props.tasks.reduce((accum, task) => task.done ? accum : ++accum, 0)}</span></strong> Items Left
        </div>
    </div>
}

export default TodoList