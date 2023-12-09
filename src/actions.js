export const increment = (num) => {
  return {
    type: "INCEREMENT",
    payload: num,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
