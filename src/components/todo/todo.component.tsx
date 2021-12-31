import React, {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {iTask} from '../../types/task';
import {getTask} from '../../api/tasks';
import {TasksComponent} from '../tasks/tasks.component';
import {LoadingComponent} from '../loading/loading.component';
import {AddTaskComponent} from '../addTask/addTask.component';
import {
    Author,
    Container,
    LastContainer,
    NextContainer,
    Content,
    AddButton,
    DeleteButton,
    Title,
} from './todo.styles';

export const TodoComponent = () => {
    const [value, setValue] = useState<iTask[]>([]);
    const [addTask, setAddTask] = useState(false);
    const {isLoading, data, isSuccess} = useQuery<iTask[]>('getData', () => getTask());

    useEffect(() => {
        if (isSuccess && Array.isArray(data)) {
            const newData = data.reduce((accum: iTask[], item) => {
                if (accum.length < 4 && Math.round(Math.random() * 100) + 1 <= 25) {
                    accum.push(item);
                }
                return accum
            }, [])
            setValue(newData);
        }
    }, [data, isSuccess]);

    const handleChange = (index: number) => {
        const newValue = [...value];
        newValue[index].completed = !newValue[index].completed;
        setValue(newValue);
    };

    const handleDeleteClick = () => {
        const newValue = [...value];
        const tasks = newValue.filter(item => !item.completed);
        setValue(tasks);
    };

    const handleAddClick = () => {
        setAddTask(!addTask);
    };

    const onAddTask = (task: iTask) => {
        const newValue = [...value];
        task.id = Math.round(Math.random() * 100);
        task.userId = newValue[0].userId;
        newValue.push(task);
        setValue(newValue);
        setAddTask(false);
    };

    return (
            <Container>
                <LastContainer/>
                <NextContainer/>
                <Content>
                    <Title>Todo list</Title>
                    <AddButton onClick={handleAddClick}>ADD</AddButton>
                    <DeleteButton onClick={handleDeleteClick}>DELETE</DeleteButton>
                    {addTask?
                        <AddTaskComponent onAddTask={onAddTask}/>:
                        null
                    }
                    {isLoading?
                        <LoadingComponent />:
                        <TasksComponent value={value} onChange={handleChange}/>
                    }
                </Content>
                <Author>&copy; {new Date().getFullYear()}. Dmitriy Astashin</Author>
            </Container>
    );
};