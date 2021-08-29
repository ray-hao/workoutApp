export const APIParser = (response) => {
    if(!response.ok){
       
        return Promise.reject(response);
    }
    else{
        
        return response.json();
    }
}