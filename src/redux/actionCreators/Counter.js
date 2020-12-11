export const addCounterCreator = () => {
  return {
    type: "ADD_COUNTER",
    // payload optional jika ada yang dibawa ke reducer
  };
};
export const subCounterCreator = () => {
  return {
    type: "SUB_COUNTER",
    // payload optional jika ada yang dibawa ke reducer
  };
};
