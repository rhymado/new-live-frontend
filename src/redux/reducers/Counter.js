import { addCounterString, subCounterString } from "../actionString";
const initialState = {
  counterNumber: 1,
};

const counterReducer = (prevState = initialState, action) => {
  // prevState => State store sebelum diubah
  // action => yang dikirim oleh dispatch
  let nextNumber = prevState.counterNumber;
  switch (action.type) {
    case addCounterString:
      nextNumber += 1;
      return {
        ...prevState,
        counterNumber: nextNumber,
      };
    case subCounterString:
      nextNumber -= 1;
      return {
        ...prevState,
        counterNumber: nextNumber,
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default counterReducer;
