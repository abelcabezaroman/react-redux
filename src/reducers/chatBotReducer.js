const initState = ["hola!"];

const chatBotReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CHAT_BOT":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default chatBotReducer;
