import {useState,useEffect} from "react";

const useJson = (url,object) => {
    const [success,setSuccess] = useState(null);
    
    useEffect(()=>{
    fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(object)
    }).then(()=>{
        setSuccess(true);
    }).catch(()=>{
        setSuccess(false);
    })},[url])
    return {success};
}
 
export default useJson;