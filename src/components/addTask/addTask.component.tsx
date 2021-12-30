import React, {useState} from 'react';
import {iTask} from '../../types/task';
import {AddTaskInput, AddTaskTitle, NewTaskComponent, AddButton} from './newTask.styles';

interface iAddTaskProps {
    onAddTask: (inputValue: iTask) => void;
}

export const AddTaskComponent: React.FC<iAddTaskProps> = ({onAddTask}) => {
    const [inputValue, setInputValue] = useState({userId: 0, id: 0, title: '', completed: false});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = {...inputValue}
        newValue.title = event.target.value
        setInputValue(newValue)
    };

    return (
        <NewTaskComponent>
            <AddTaskTitle>New Task:</AddTaskTitle>
            <AddTaskInput
                type='text'
                value={inputValue.title}
                onChange={(event) => handleChange(event)}
            />
            <AddButton onClick={() => onAddTask(inputValue)}>+</AddButton>
        </NewTaskComponent>
    );
};
