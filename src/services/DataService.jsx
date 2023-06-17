
// All User FOR Admin 
  export const getUsers = async() =>{
    const response = await fetch('http://localhost:8000/users');
   
    if(!response.ok){ //This code for error handle
        // eslint-disable-next-line no-throw-literal
        throw { message: response.statusText, status: response.status };
    }

    const data = await response.json();
    return data;

}



// For Login user Information
const getSession = () =>{
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  return {token, cbid};
}

export const getUser = async () => { // getUser going  DropdowwnLogin page`

  const browserData = getSession()
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };

  const response = await fetch(`http://localhost:8000/users/${browserData.cbid}`,
    requestOptions
  );


  if(!response.ok){
    // eslint-disable-next-line no-throw-literal
    throw { message: response.statusText, status: response.status };
  }

  const data = await response.json();
  return data;
};


