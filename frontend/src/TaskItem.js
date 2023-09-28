// frontend/src/TaskItem.js

import React from 'react';

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        };
    }

    handleEdit = () => {
        this.setState({ isEditing: true });
    }

    handleSave = () => {
        this.props.onSave(this.state.task);
        this.setState({ isEditing: false });
    }

    handleDelete = () => {
        this.props.onDelete(this.props.task.id);
    }

    handleToggle = () => {
        this.props.onToggle(this.props.task.id);
    }

    handleChange = (event) => {
        this.setState({ task: { ...this.state.task, description: event.target.value } });
    }

    render() {
        const { task } = this.props;
        const { isEditing } = this.state;

        return (
            <div className="task-item">
                {isEditing ? (
                    <input type="text" value={this.state.task.description} onChange={this.handleChange} />
                ) : (
                    <span className={`task-description ${task.status === 'done' ? 'done' : ''}`} onClick={this.handleToggle}>
                        {task.description}
                    </span>
                )}
                <div className="task-actions">
                    {isEditing ? (
                        <button onClick={this.handleSave}>Save</button>
                    ) : (
                        <button onClick={this.handleEdit}>Edit</button>
                    )}
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        );
    }
}

export default TaskItem;
