import React from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../../state/usePosts';
import styles from './BlogPage.css';

const BlogPage = () => {
  const [posts] = usePosts();

  const postList = posts.map(post => {
    return (
      <li key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </li>
    );
  });

  return (
    <span className={styles.BlogPage}>
      <h1>
        Dancer to Developer
      </h1>
      <h3>
        a travel blog
      </h3>
      <div>
        <img src={'./pics/image0.jpeg'} />
        <img src={'./pics/image1.jpeg'} />
        <img src={'./pics/image2.jpeg'} />
        <img src={'./pics/image3.jpeg'} />
        <img src={'./pics/image4.JPG'} />
        <img src={'./pics/image7.JPG'} />
        <img src={'./pics/image6.JPG'} />
        <img src={'./pics/image5.JPG'} />
      </div>
      <h5>
        <Link to={'/create-post'}>Create Post Here</Link>
      </h5>
      <ul>{postList}</ul>
    </span>
  );
};

export default BlogPage;
