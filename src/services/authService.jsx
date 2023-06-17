export const login = async (authDetail) =>{
  const requestOptions ={
      method: "post",
      headers: {"content-Type": "application/json"},
      body: JSON.stringify(authDetail)
    }
  
    const response = await fetch("http://localhost:8000/login", requestOptions);
  
    if(!response.ok){
      // eslint-disable-next-line no-throw-literal
      throw { message: response.statusText, status: response.status };
    }
    const data = await response.json();
    console.log(data)
    
    if(data.accessToken){
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }
    return data

}

export const signup = async (authDetail) => {

    const requestOptions ={
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(authDetail) 
      }
      
      const response = await fetch('http://localhost:8000/users', requestOptions);
      
      if(!response.ok){
        // eslint-disable-next-line no-throw-literal
        throw { message: response.statusText, status: response.status };
      }

      const data = await response.json();
      console.log(data)
      if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
      }
      return data;
}




export function logout(){
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
}

