export interface iTask {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface iTodoProps {
    value: iTask[];
    onChange: (index: number) => void;
}

export interface iAddTaskProps {
    onAddTask: (inputValue: iTask) => void;
}

export interface iCheckbox {
    index: number
    checked: boolean
    onChange: (index: number) => void
}