import  {useState} from 'react';
import {useEffect} from 'react';

const useFetch = (request) => {
    

        let [data,setData]=useState(null);
        let [pending,setPending]=useState(true);
        let [error,seterror]=useState(null);


        useEffect(()=>{
            setTimeout(()=>
            {
                fetch(request)
                .then((response)=>{
                    
                    if(response.ok===false)
                    {
                        // console.log(response);
                        throw Error(response.statusText + response.url);
                    }
                    
                    
                    
                return response.json(); })
                
                .then((movie)=>{setData(movie);setPending(false);})
                .catch((error)=>{
                    seterror(error.message);
                    setPending(false);
                })
            },2000)
            
        },[]);
    
        return {data,pending,error};
        
    


            
        }
 
export default useFetch;