import Todos from '@/components/Todos';
export const metadata = {
  title: '关于',
  description: '关于我们',
};

export default function About() {
  return (
    <div>
      <h1>Todo List</h1>
      <Todos />
    </div>
  );
}
