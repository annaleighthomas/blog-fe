import React, { useState } from 'react';
import { addPost } from '../../utils/blog-api';
import { useHistory } from 'react-router-dom';
import styles from './Post.css';

const Post = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const history = useHistory();

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'title':
        setTitle(target.value);
        break;
      case 'body':
        setBody(target.value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    addPost({ title, body })
      .then(() => {
        history.push('/');
      });
  };


  return (
    <form className={styles.Post}
      onSubmit={handleSubmit}>
      <input
        required
        name="title"
        value={title}
        placeholder="title"
        onChange={handleChange}
      />

      <textarea
        required
        name="body"
        value={body}
        placeholder="blog post"
        onChange={handleChange}>
      </textarea>

      <button>post</button>
    </form>
  );
};

export default Post;
