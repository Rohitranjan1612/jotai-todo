import * as React from "react";
import { Provider as JotaiProvider } from "jotai";

import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

function App() {
  return (
    <JotaiProvider>
      <TodoList />
      <TodoAdd />
    </JotaiProvider>
  );
}
export default App;
