import {useState} from 'react';



  const Home = () => {
      const [blogs, setBlogs] = useState([
          { title: 'First Blood', body: 'Adventure and Action Movie', author: 'John Rambo', id: 1},
          { title: 'Second blood', body: 'Aventure and Action Movie', author: 'John Rambo', id:2},
          { title: 'Last Blood', body: 'Adventure and Actor Movie', author: 'John Rambo', id: 3},
          { title: 'Predator', body: 'Adventure, Actor Movie & Horror Movie', author: 'Arnold', id: 4},
          { title: 'Comando', body: 'Adventure and Actor Movie', author: 'Arnold', id:5}
      ])

  return (
    <div className='home'>

        {blogs.map((blog)=>(
            <div className='blog-preview' key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written By: {blog.author}</p>
                <p>Type: {blog.body}</p>
            </div>
        ))}
    </div>
  )
}
export default Home;
