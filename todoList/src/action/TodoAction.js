
export const AddTodoAction = (todo) => (disptch, getState) => {
    console.log("inside add todo action")
    const {
        Todo: { todos }, // [{id:1,userName:"vikasii henanth"}]
    } = getState()

    const hasTodo = todos.find((i) => i.id === todo.id);

    if (!hasTodo && todo !== "") {
        console.log("inside add todo if cond")
        disptch({
            type: "ADD_TODO",
            payload: [{ id: todo.id, userName: todo.userName }, ...todos],
        });
    };
};

export const UpdateTodoAction = (todo) => (disptch, getState) => {
    const {
        Todo: { todos },
    } = getState()

   const updatedTodo =  todos.map(t => {
        if (t.id === todo.id) {
            console.log("updating user")
              return  todo
        } else {
            return t
        }
    })

    console.log("updated todo:")
    console.log(updatedTodo)
    disptch({
        type: "Update_TODO",
        payload:[...updatedTodo],
    });
};

export const RemoveTodoAction = (todo) => (disptch, getState) => {
    console.log("inside remove todo")

    console.log(todo)
    const {
        Todo: { todos },
    } = getState()
    disptch({
        type: "Remove_TODO",
        payload: todos.filter((t) => t.id !== todo.id),
    });
};
