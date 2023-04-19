





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

const Today=async ()=>{


  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format

}