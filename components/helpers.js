
import moment from 'moment'; 




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

export const Today=()=>{
  var currentDate =  moment().format("MM/DD/YYYY");
  return currentDate;
  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format

}