import { useState } from 'react';

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodoList((prev) => [...prev, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <>
      <div>
        <input
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }}
          placeholder="Добавь новое дело"
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          value={newTodo}
        />
        <button onClick={() => addTodo()}>Добавить</button>
      </div>
      <div>
        {todoList.length === 0 ? (
          <div>"Список дел пуст"</div>
        ) : (
          <div>
            {todoList.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
