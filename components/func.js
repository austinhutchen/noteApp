export default  getJoke = async () => {
 try {
    res = await fetch(
     "https://api.quotable.io/random"
   );
  
   if (!res.ok) {
     console.log("status: ", res.status);               
      await getJoke();
   }
   else{
    json=await res.json(); 
    return json;
   }
   
 } catch (error) {
   console.log("catch error", error);
   // carful you don't get an infinite loop
   await getJoke();
 }
};