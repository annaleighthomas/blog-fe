import { useState, useEffect } from 'react';
import { getPosts } from '../utils/blog-api';

export const usePosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((posts) => {
        setPosts(posts);
        setLoading(false);
      });
  }, []);

  return [posts, loading];
};
