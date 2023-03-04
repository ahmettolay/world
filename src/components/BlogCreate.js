import { useState, useContext } from "react";
import BlogContext from "../context/blogs";

const BlogCreate = () => {
  const { createBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [blogCreateDate, setBlogCreateDate] = useState("");
  const [img,setImg]=useState()
  

  const handleSubmit = (event) => {
    event.preventDefault();
    createBlog(title,body,blogCreateDate,img);
    setTitle("");
    setBody("")
    setImg("")
  };

 
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
 
 
  
  
  return (
    <div className="blog-create">
      <h3>Blog Ekle</h3>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input className="input-title" value={title} onChange={e=> setTitle(e.target.value)} />
        <label>Body: </label>
        <input className="input-body" value={body}  onChange={e=> setBody(e.target.value)}/>
        <label>Img: </label>
        <input className="input-body" value={img}  onChange={e=> setImg(e.target.value)}/>
        <button className="button" onClick={()=>   setBlogCreateDate(formattedDate)}>Oluştur</button>
      </form>
       
    </div>
    
  );
};
export default BlogCreate;
