
export const getproduct = async() =>{
    const response = await fetch('http://localhost:8000/products');
   
    if(!response.ok){ //This code for error handle
        // eslint-disable-next-line no-throw-literal
        throw { message: response.statusText, status: response.status };
    }

    const data = await response.json();
    return data;

}

export const getSingleproduct = async(id) =>{
    const response = await fetch(`http://localhost:8000/products/${id}`);
   
    if(!response.ok){ //This code for error handle
        // eslint-disable-next-line no-throw-literal
        throw { message: response.statusText, status: response.status };
    }

    const data = await response.json();
    return data;

}
