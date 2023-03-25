export default  getJoke = async () => {
 try {
   const res = await fetch(
     "https://api.quotable.io/random"
   ).json();
   if (!res.ok) {
     console.log("status: ", res.status);               
     await getJoke();
   }
   console.log(res["content"])
   return res["content"];
 } catch (error) {
   console.log("catch error", error);
   // carful you don't get an infinite loop
   await getJoke();
 }
};