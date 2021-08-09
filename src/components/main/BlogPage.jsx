import React from 'react';
import { Link } from 'react-router-dom';
// import Post from '../posts/Post';

const BlogPage = () => {
  return (
    <>
      <div>
        <img src={'../../public/pics/pic1.JPG'} />
      </div>
      <span>
        <Link to={'/create-post'}>Create Post Here</Link>
      </span>
      {/* <article>
        <li key={post.id}>
          <Post {...post} />
        </li>
      </article> */}
    </>
  );
};

export default BlogPage;
