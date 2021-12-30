import React from 'react';
import {Checkmark, ContainerCheckbox, Input} from './checkbox.styles';

interface iCheckbox {
    index: number
    checked: boolean
    onChange: (index: number) => void
}

export const Checkbox: React.FC<iCheckbox> = ({checked, onChange, index}) => {
    return (
        <ContainerCheckbox checked={checked}>
            <Input type='checkbox'
                   checked={checked}
                   onChange={() => onChange(index)}
            />
            <Checkmark checked={checked}></Checkmark>
        </ContainerCheckbox>
    );
};
