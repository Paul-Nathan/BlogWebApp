import useFetch from './useFetch';
import BlogList from './BlogList';
import loading from './Hourglass.gif'


  const Home = () => {

    const{data: blogs, isPending, error} =
    useFetch(' http://localhost:8000/blogs')
      

  return (
    <div className='home'>
      {error && <div>{error}</div> }
      {isPending && <div><img src={loading} alt='loading spinner'/></div>}
      {blogs &&<BlogList blogs = {blogs} title = "All Blogs" /> }    
    </div>
  )
}
export default Home;
