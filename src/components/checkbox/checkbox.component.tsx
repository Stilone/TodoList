import React from 'react';
import {iCheckbox} from '../../types/task';
import {Checkmark, ContainerCheckbox, Input} from './checkbox.styles';


export const Checkbox: React.FC<iCheckbox> = ({checked, onChange, index}) => {
    return (
        <ContainerCheckbox checked={checked}>
            <Input type='checkbox'
                   checked={checked}
                   onChange={() => onChange(index)}
            />
            <Checkmark></Checkmark>
        </ContainerCheckbox>
    );
}
