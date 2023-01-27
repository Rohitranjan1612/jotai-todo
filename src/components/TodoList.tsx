import * as React from "react";
import { useAtom } from "jotai";

import {
  Todo,
  todosAtom,
  updateTodoAtom,
  removeTodoAtom,
  toggleTodoAtom,
} from "../store";

function TodoListItems() {
  const [todos] = useAtom(todosAtom);
  const [, updateTodo] = useAtom(updateTodoAtom);
  const [, removeTodo] = useAtom(removeTodoAtom);
  const [, toggleTodo] = useAtom(toggleTodoAtom);

  return (
    <>
      {todos.map((todo: Todo) => (
        <div key={todo.id}>
          <input type="checkbox" onClick={() => toggleTodo(todo.id)} checked={todo.done} />
          <input
            value={todo.text}
            onChange={(evt) =>
              updateTodo({ id: todo.id, text: evt.target.value })
            }
          />
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <h3>Todo List</h3>
      <TodoListItems />
    </>
  );
}

export default TodoList;
