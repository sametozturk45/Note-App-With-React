import {useState,useEffect} from 'react';

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetch(url).then(res=>{
            if(!res.ok) throw Error("Veriler Çekilemedi");
            return res.json();
        }).then(resData=>{
            setData(resData);
            setLoading(false);
        }).catch(err=>{
            setLoading(false);
            setError(err.message)
        });
    },[url])
    return {data,loading,error}
}
 
export default useFetch;