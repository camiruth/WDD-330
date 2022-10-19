export const getTodos = () => {
  return JSON.parse(localStorage.getItem("toDoList")) || [];
};

export const setTodos = (todos) => {
  localStorage.setItem("toDoList", JSON.stringify(todos));
};
