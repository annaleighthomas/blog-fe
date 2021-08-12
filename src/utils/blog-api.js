import request from 'superagent';

const API = 'http://localhost:7890';

export async function getPost(id) {
  const response = await request
    .get(API + `/api/v1/posts/${id}`)
    .ok(res => res.status < 500);

  if (response.status === 400) {
    throw response.body;
  }
  return response.body;
}

export async function getPosts() {
  const response = await request
    .get(API + '/api/v1/posts')
    .ok(res => res.status < 500);

  if (response.status === 400) {
    throw response.body;
  }

  return response.body;
}

export async function addPost(post) { 
  const response = await request
    .post(API + '/api/v1/posts')
    .send(post);

  return response.body;
}
