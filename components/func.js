export default  getJoke = async () => {
 try {
   const res = await fetch(
     "https://api.quotable.io/random"
   );
   if (!res.ok) {
     console.log("status: ", res.status);               
     await getJoke();
   }
   const json = await res.json();
   console.log(json["content"])
   return json["content"];
 } catch (error) {
   console.log("catch error", error);
   // carful you don't get an infinite loop
   await getJoke();
 }
};