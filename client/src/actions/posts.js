import axios from 'axios';

export const getPosts = () => dispatch => {
  axios.get('/api/posts')
  .then( res => {
    debugger
    dispatch({ type: 'GET_POSTS, posts: res.data' })
  })
}