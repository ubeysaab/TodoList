const apiRequest = async (url = "", method = null, errMsg = null) => {

try {
  // * Fetch also except the method
  const respone = await fetch(url,method)
  // * the method it is what makes the differences between this being create, update, delete 
  if(!respone.ok) throw Error("Please Reload the page or re-run the server because it's not convert the id to string when we add new item  ")  
  //? we say this becasue the state of the app may not  be in sync with the database if we have an Error with creating updating  or deleting we'll be out of sync so when we reload we'll get that data back from the server on again  and our state will be updated to be in sync with server 
} catch (error) {
  errMsg=error.message;
  
}finally{
  // Finally will always excute whether we have an Error or not 
  return errMsg 
  // it can be null or an error message 
}
// * we don't really need the responses  back from the api here because we update the state with the setFunctions , but how ever we don't need the state of our app to stay in sync with api  but we can update the state and see the changes faster than we may get a response from the api so we don't wanna wait to that response we'll just instantly  show the new state in the application but then  if we get an error  message we'll know we're out of sync with api.
}

export default apiRequest;
