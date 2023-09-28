import React, { useState } from 'react';
import axios from 'axios';

const TaskInput = () => {
    const [task, setTask] = useState('');

    const handleChange = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (task.trim() !== '') {
            try {
                await axios.post('/tasks', { description: task, status: 'pending' });
                setTask('');
            } catch (error) {
                console.error('Error adding task:', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task"
                value={task}
                onChange={handleChange}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskInput;
