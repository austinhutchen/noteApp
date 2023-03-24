export default  getJoke = async () => {
 try {
   const res = await fetch(
     "https://api.quotable.io/search/authors?query=Einst"
   );
   if (!res.ok) {
     console.log("status: ", res.status);
     // carful you don't get an infinite loop
     await getJoke();
   }
   const json = await res.json();
   console.log(json);
 } catch (error) {
   console.log("catch error", error);
   // carful you don't get an infinite loop
   await getJoke();
 }
};