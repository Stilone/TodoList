import React from 'react';
import {TodoTask, Task, Text} from './task.styles';
import {iTodoProps} from '../../types/task';
import {Checkbox} from '../checkbox/checkbox.component';

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
