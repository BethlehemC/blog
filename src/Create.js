import {useState} from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
const [title,setTitle]=useState("");
const [auther,setAuther]=useState('luke');
const [blog,setBlog]=useState("");
const[isPending,setIspending]=useState(false)
const history=useHistory();

function handelSubmit(e){
e.preventDefault();
const ablog= {title,auther,blog};
setIspending(true)
fetch(" http://localhost:8000/blogs",
{
method:'POST',
headers:{'content-Type':"application/json"},
body:JSON.stringify(ablog)
}
).then(()=>{
    alert("blog added");
    setTitle("") 
setAuther("") 
setBlog("")

console.log("added")

setIspending(false)
history.push('/')
}
)
}


    return (  
        <div className='Create'>
<h2>Add a new blog</h2>
<form onSubmit={handelSubmit}>
<label htmlFor="">Blog Title</label>
<input type="text" required
 value={title}
onChange={(e)=>setTitle(e.target.value)}

/>
<label >Blog</label>
<textarea 
value={blog}
onChange={(e)=>setBlog(e.target.value)}
></textarea>
<label >Auther</label>
<select  
value={auther}
onChange={(e)=>{setAuther(e.target.value)}}
>
    <option value="matthew">matthew</option>
    <option value="luke">luke</option>
    <option value="john">john</option>
</select>

{!isPending&&<button>Add Blog</button>}
{isPending&&<button disabled>Loading...</button>}
</form>


        </div>
    );
}
 
export default Create;