function todos() {
    const initialState = {
      task: "",
      todos: [],
      filteredTodos: [],
      isCompleteAll: false
    };

    return {
      flag: false,
      ...initialState,
      init() {
        this.$watch("isCompleteAll", isComplete => {
          this.todos.forEach(todo => {
            todo.isComplete = isComplete;
          });
        });
        this.$watch("todos", () => {
          this.filteredTodos = this.todos;
        });
      },
      addTask() {
        if (this.task.trim() === "") return;
        this.todos = [
          ...this.todos,
          {
            task: this.task,
            isComplete: false,
            isEditing: false
          }
        ];
        this.task = "";
      },
      setIsEditingTask(index, isEditing) {
        if (this.todos[index].isEditing === isEditing) return;
        this.todos[index].isEditing = isEditing;
        this.todos = [...this.todos];
        if (isEditing) setTimeout(() => this.$refs[index].focus(), 100);
      },
      removeTask(index) {
        this.todos = this.todos.filter((_, _index) => _index !== index);
      },
      setFilter(type) {
        switch (type) {
          case 0:
            this.filteredTodos = this.todos;
            break;
          case 1:
            this.filteredTodos = this.todos.filter(item => !item.isComplete);
            break;
          case 2:
            this.filteredTodos = this.todos.filter(item => item.isComplete);
            break;
        }
      },
      reset() {
        this.task = initialState.task;
        this.todos = initialState.todos;
        this.filteredTodos = initialState.filteredTodos;
        this.isCompleteAll = initialState.isCompleteAll;
      },
    };
  }


