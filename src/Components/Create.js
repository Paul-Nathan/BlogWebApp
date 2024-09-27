import {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Create = ()=> {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending]= useState(false);
    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const blog = {title, body, author}

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("New Blog Added");
            setIsPending(false)
            history.push("/")
        })
    }

  return (
    <div className='create'>
        <h1>Add New Blog</h1>
        <form onSubmit={handleSubmit}>
            <label>Movie Title:</label>
            <input
                    type='text'
                    required 
                    value ={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog author</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                    >
                        <option value="John Rambo">John Rambo</option>
                        <option value= "Will Smith">Will Smith</option>
                        <option value= "Arnold">Arnold</option>
                    </select>
                    {!isPending && <button>Add Movie</button>}
                    {isPending && <button disabled>Adding Movie....</button>}
        </form>
        </div>
  )
}

export default Create