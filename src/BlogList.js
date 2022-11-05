import { Link } from "react-router-dom";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import Card from '@mui/material/Card';
import { blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';

import IconButton  from '@mui/material/IconButton';




const BlogList = ({blogs,title}) => {
 
  const images=[
      {src:'./tree.jpg' , alt:'tree'},
      {src:'./mountaines.jpg'},
      {src:'./grass.jpg'},
      {src:'./surrise.jpg'}]
   
    return ( 
     
    <div className="blog-list">
        <h1>{title}</h1>
   {blogs.map((blog)=>(
  
       <div className="blog-preview" key={blog.id}>
      
        
        <Card sx={{ maxWidth: 345 , bgcolor: blue[200] ,fontSize:100 ,fontFamily:"https://fonts.googleapis.com/css?family=Sofia"}}>
        <Link to={`/blogs/${blog.id}`}>
        <CardHeader
                  avatar={
            <Avatar sx={{ bgcolor: blue[900] , fontSize:14 }} aria-label="recipe">
              BLOG
            </Avatar>
          }
          
          title={blog.title}
          subheader={blog.auther}
        />  
         
        <CardMedia
          component="img"
          height="194"
          image={process.env.PUBLIC_URL + images[Math.floor(Math.random() * (3 - 0 + 0) + 0)].src} 
          alt="Paella dish"
        />
       </Link>
      
         
         <CardActions disableSpacing>
      
          <IconButton aria-label="add to favorites">
            <button onClick={()=>{}} >like  </button>
          </IconButton>
          <IconButton aria-label="share">
              <button onClick={()=>{}}>dislike</button>
          </IconButton>
    
        </CardActions> 
        </Card> 
       
     
 
       
</div>
   )         
            )
        } 
        
    </div> );
}
 
export default BlogList;