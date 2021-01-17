const todoState = {
  categories: ["General", "Entertainment", "Chores"],
  todoList: [
    {
      id: 1,
      category: "General",
      text: "To go sleep",
      completed: false
    },
    {
      id: 2,
      category: "Chores",
      text: "To clean my lawn",
      completed: false
    },
    {
      id: 3,
      category: "General",
      text: "To go sleep",
      completed: false
    },
    {
      id: 4,
      category: "Entertainment",
      text: "To watch Rick and Morty",
      completed: false
    },
    {
      id: 5,
      category: "Entertainment",
      text: "To play Outer Worlds",
      completed: false
    }
  ],
  activeTodo: 0,
  activeCategory: "General"
}

export default function todo(state = todoState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.data]
      };
      case "ADD_CATEGORY":
        return {
          ...state,
          categories: [...state.categories, action.data]
        }
        case "SET_ACTIVE_CATEGORY":
          return {
            ...state,
            activeCategory: action.data
          }
          case "MARK_COMPLETE":
          return {
            ...state,
            todoList: state.todoList.map(todo => {
              if(todo.id === action.data.id) {
                todo.completed = action.data.completed
              }
              return todo;
            })
          }
          case "DELETE_TODO":
            return {
              ...state,
              todoList: state.todoList.filter(todo => todo.id !== action.data)
            }
            case "UPDATE_TODO":
              return {
                ...state,
                todoList: state.todoList.map(todo => {
                  if(todo.id === action.data.id) {
                    todo.text = action.data.content
                  }
                  return todo;
                })
              }
    default:
      return state;
  }
}