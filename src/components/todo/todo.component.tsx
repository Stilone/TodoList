import React, {useEffect, useState} from 'react';
import {
    Author,
    Container,
    LastContainer,
    Main,
    NextContainer,
    Todo,
    TodoButton,
    TodoButtonDelete,
    TodoTitle,
} from './todo.styles';
import {TaskComponent} from '../task/task.component';
import {iTask} from '../../types/task';
import {useQuery} from 'react-query';
import {getTask} from '../../api/tasks';
import {LoadingComponent} from '../loading/loading.component'
import {AddTaskComponent} from '../addTask/addTask.component';

export const TodoComponent = () => {
    const [value, setValue] = useState<iTask[]>([]);
    const [addTask, setAddTask] = useState(false);
    const {isLoading, data, isSuccess} = useQuery<iTask[]>('getData', () => getTask());

    useEffect(() => {
        const check = (accum: iTask[], item: iTask) => {
            if (accum.length < 4 && Math.round(Math.random() * 100) + 1 <= 25) {
                accum.push(item);
            }
            return accum
        };
        if (isSuccess && Array.isArray(data)) {
            const newData: iTask[] = data.reduce(check, []);
            setValue(newData);
        }
    }, [data, isSuccess]);

    const handleChange = (index: number) => {
        const newValue = [...value];
        newValue[index].completed = !newValue[index].completed
        setValue(newValue)
    };

    const handleDeleteClick = () => {
        const newValue = [...value];
        const tasks = newValue.filter(item => !item.completed);
        setValue(tasks);
    };

    const handleAddClick = () => {
        setAddTask(!addTask)
    };

    const onAddTask = (task: iTask) => {
        const newValue = [...value];
        task.id = Math.round(Math.random() * 100);
        task.userId = newValue[0].userId;
        newValue.push(task);
        setValue(newValue);
        setAddTask(false)
    };

    return (
        <Main>
            <Container>
                <LastContainer/>
                <NextContainer/>
                <Todo>
                    <TodoTitle>Todo list</TodoTitle>
                    <TodoButton onClick={handleAddClick}>ADD</TodoButton>
                    <TodoButtonDelete onClick={handleDeleteClick}>DELETE</TodoButtonDelete>
                    {addTask?
                        <AddTaskComponent onAddTask={onAddTask}/>:
                        null
                    }
                    {isLoading?
                        <LoadingComponent />:
                        <TaskComponent value={value} onChange={handleChange}/>
                    }
                </Todo>
                <Author>&copy; {new Date().getFullYear()}. Dmitriy Astashin</Author>
            </Container>
        </Main>
    );
};