export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null
};

export const calculator = (type, value, state) => {
  switch(type) {
    
    case "number":
      if (state.currentValue === "0") {
        return { currentValue: `${value}`}
      }
      return { 
        currentValue: `${state.currentValue}${value}`
      }

    case "clear":
      return initialState;
  
    default:
      return state;

  }
}