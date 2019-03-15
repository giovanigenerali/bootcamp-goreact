const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [
        ...state,
        {
          id: Math.random(),
          name: "facebook/react",
          description: "teste",
          url: "http://localhost:3000"
        }
      ];
    default:
      return state;
  }
}
