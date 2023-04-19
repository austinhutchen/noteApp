





export const updateLocal = (j) => {
  let serial = JSON.stringify(j);
  try {
    AsyncStorage.setItem("Journal", serial);
  } catch (error) {
    console.log(error);
  }
};
export const check = () => {
  if (AsyncStorage.getItem("Journal") !== null) {
    return true;
  }
};