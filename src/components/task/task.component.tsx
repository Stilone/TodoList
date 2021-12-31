import React from 'react';
import {iTask} from '../../types/task';
import {Checkbox} from '../checkbox/checkbox.component';
import {Container, Task, Text} from './task.styles';

interface iTodoProps {
    value: iTask[];
    onChange: (index: number) => void;
}

export const TasksComponent: React.FC<iTodoProps> = ({value, onChange}) => {
    return (
        <Container>
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
        </Container>
    );
};
