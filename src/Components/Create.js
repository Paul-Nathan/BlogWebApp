import {useState} from 'react';

const Create = ()=> {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [actor, setActor] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        const blog = {title, body, actor}

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("New Blog Added");
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
                <label>Blog Actor</label>
                <select
                    value={actor}
                    onChange={(e)=>setActor(e.target.value)}
                    >
                        <option value="John Rambo">John Rambo</option>
                        <option value= "Will Smith">Will Smith</option>
                        <option value= "Arnold">Arnold</option>
                    </select>
                    <button>Add Blog</button>
        </form>
        </div>
  )
}

export default Create