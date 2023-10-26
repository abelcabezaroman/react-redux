const initState = 5;

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return state + 1;
    case "INCREMENT_COUNTER_TEN":
      return state + 10;
    case "DOUBLE_COUNTER":
      return state * 2;
    case "MULTIPLY_COUNTER":
      return state * action.payload;
    case "DECREMENT_COUNTER_TEN":
      return state - 10;
    case "DECREMENT_COUNTER":
      return state - 1;
    case "RESET_COUNTER":
      return 0;

    default:
      return state;
  }
};

export default counterReducer;
