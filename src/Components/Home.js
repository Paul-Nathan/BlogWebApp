import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import loading from './Hourglass.gif'




  const Home = () => {
      const [blogs, setBlogs] = useState(null)
      const[isPending, setIsPending] = useState(true)
      const [error, setError] = useState(null)

      setTimeout(()=>{

      }, 2000);

      useEffect(()=>{
        setTimeout(()=>{
          fetch(' http://localhost:8000/blogs')
        .then((res)=>{
          if(!res.ok){
            throw Error("Could not fetch the data for that resource");
          }
          return res.json()
        })
        .then((data)=>{
        console.log(data);
        setBlogs(data)
        setIsPending(false)
        setError(null)

        })
        .catch((err)=>{
          setIsPending(false)
          setError(err.message)
        })
        }, 2000);
  
        
      },[])

  return (
    <div className='home'>
      {error && <div>{error}</div> }
      {isPending && <div><img src={loading} alt='loading spinner'/></div>}
      {blogs &&<BlogList blogs = {blogs} title = "All Blogs" /> }    
    </div>
  )
}
export default Home;
