export type Props = {
  id: number;
  title: string;
  onDelete: (id: number) => void;
};
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
