const INITIAL_STATE = [
  { id: 1, text: "Fazer Café" },
  { id: 2, text: "Estudar Node" },
  { id: 3, text: "Estudar ReactJS" }
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.payload.text }];
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
