import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from './useFetch'
import loading from './Hourglass.gif'


function BlogDetails() {
    const {id} = useParams()
    const {data: blog, isPending, error} =
    useFetch('http://localhost:8000/blogs/' + id )

  return (
    <div className='blog-details'>
        {isPending && <div><img src={loading} alt='loading spinner'/></div>}
        {error && <div>{error}</div> }
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <div className='bodyDetails'>{blog.body}</div>
                <h2>Acted  By: {blog.author}</h2>
            </article>
        )}
        </div>
  );
}

export default BlogDetails