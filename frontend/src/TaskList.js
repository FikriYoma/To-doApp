import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
    render() {
        return (
            <div className="task-list">
                <h2>Tasks</h2>
                {this.props.tasks.map((task, index) => (
                    <TaskItem 
                        key={index} 
                        task={task} 
                        handleDelete={this.props.handleDelete} 
                        handleToggle={this.props.handleToggle}
                        handleEdit={this.props.handleEdit}
                    />
                ))}
            </div>
        );
    }
}

export default TaskList;
