import {useState} from 'react';
import BlogList from './BlogList';




  const Home = () => {
      const [blogs, setBlogs] = useState([
          { title: 'First Blood', body: 'Adventure and Action Movie', author: 'John Rambo', id: 1},
          { title: 'Second blood', body: 'Aventure and Action Movie', author: 'John Rambo', id:2},
          { title: 'Last Blood', body: 'Adventure and Actor Movie', author: 'John Rambo', id: 3},
          { title: 'Predator', body: 'Adventure, Actor Movie & Horror Movie', author: 'Arnold', id: 4},
          { title: 'Comando', body: 'Adventure and Actor Movie', author: 'Arnold', id:5}
      ])

      // ===============Delete Blogs===============
      const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog=>blog.id !== id)
        setBlogs(newBlogs)
      } 

  return (
    <div className='home'>
      <BlogList blogs = {blogs} title = "All Blogs" handleDelete ={handleDelete}/>
{/* ====================Output Just Johnm Rambo's Blogs====================== */}
      <BlogList blogs ={blogs.filter((blog)=>{
          if(blog.author === "John Rambo"){
              return true
            }
      })} title="John Rambo's Blogs"handleDelete ={handleDelete}/>
    </div>
  )
}
export default Home;
