import { TodoItemProps } from "@/types/item";

export const TodoItem = ({ id, title, onToggle, onDelete, completed }: TodoItemProps) => (
    <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => onToggle(id)}
                className="h-5 w-5"
            />
            <span
                className={`text-lg ${completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
            >
                {title}
            </span>
        </div>
    </div>
);

