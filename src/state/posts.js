import { useState, useEffect } from 'react';

export const usePost = (id) => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id)
      .then((post) => {
        setPost(post);
        setLoading(false);
      });
  }, [id]);

  return [post, loading];
};