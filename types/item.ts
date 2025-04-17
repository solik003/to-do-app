export type Props = {
    id: number;
    title: string;
    completed: boolean;
    onToggle: (id: number) => void;
};
export type Todo = {
    id: number;
    title: string;
    completed: boolean;
};
export type TodoItemProps = {
    id: number;
    title: string;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    completed: boolean;
};

