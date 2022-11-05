import { useEffect,useState } from "react";


const useFetch = (url) => {

    const [data,setBlogs]=useState(null)
    const[ispending,setpending]=useState(true)
   const [error,seterror]=useState(null)

    useEffect(()=>{
const abortContrller =new  AbortController()  
setTimeout(()=>{
    fetch(url,abortContrller.Signal)
    .then((res)=>{
        if(!res.ok){throw Error("could not fetch the data")}
        else{ return res.json() } })
    .then((data)=>{ setBlogs(data)
        setpending(false)
        seterror(null)})
    .catch(err=>{
        if(err.name==='AbortError'){
            console.log('fetch is aborted')
        }else{
            seterror(err.message)
            setpending(false);
        }
    })
},1000);

return ()=> abortContrller.abort();
}
,[url]);
return {data,ispending,error}
}
 
export default useFetch;