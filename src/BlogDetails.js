import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails
 = () => {
      const history=useHistory();
    const {id}=useParams();
    const {data,ispending,error}=useFetch('http://localhost:8000/blogs/'+id) 
    function handelDelete(e){
        fetch('http://localhost:8000/blogs/'+id,
       { method:'DELETE'
      }
        ).then(()=>{
            history.push('/')

        })

    }


    return (
         <div className='blog-details'>
            {ispending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {data&& (
               <article>
                   <h2 >{data.title}</h2>
                   <p>Written by {data.auther}</p>
                   <div>{data.blog}</div>
                 <button onClick={handelDelete}>Delete</button>
               </article>

            )}
    </div> );
}
 
export default BlogDetails
;