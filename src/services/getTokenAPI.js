import axios from 'axios';

export const getToken = (username) => 
  axios.get(`https://my-node-server-render.onrender.com/gettoken/${username}`).then((twilioUser) => twilioUser.data)
