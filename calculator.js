export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null
};



export const calculator = (type, value, state) => {
  switch (type) {
    case "equal":
      const current = parseFloat(state.currentValue);
      const previous = parseFloat(state.previousValue);
      let currentValue = current;
      if (state.operator === "+") {
        currentValue = previous + current;
      } else if (state.operator === "-") {
        currentValue = previous - current;
      } else if (state.operator === "*") {
        currentValue = previous * current;
      }

      return {
        currentValue: currentValue,
        operator: null,
        previousValue: null
      }

    case "operator":
      return {
        currentValue: "0",
        operator: value,
        previousValue: state.currentValue
      }

    case "number":
      if (state.currentValue === "0") {
        return { currentValue: `${value}` }
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