import React from 'react';
import {iTask} from '../../types/task';
import {Checkbox} from '../checkbox/checkbox.component';
import {TodoTask, Task, Text} from './task.styles';

interface iTodoProps {
    value: iTask[];
    onChange: (index: number) => void;
}

export const TaskComponent: React.FC<iTodoProps> = ({value, onChange}) => {
    return (
        <TodoTask>
            {value.map((item, index) => {
                return <Task key={index}>
                    <label>
                        <Checkbox onChange={onChange}
                                  checked={item.completed}
                                  index={index}
                        />
                        <Text mark={item.completed}>
                            {item.title}
                        </Text>
                    </label>
                </Task>
            })}
        </TodoTask>
    );
};
