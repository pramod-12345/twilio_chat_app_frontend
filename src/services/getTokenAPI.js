import axios from 'axios';

export const getToken = (username) => 
  axios.get(`https://twilio-backend-fyqm.onrender.com/gettoken/${username}`).then((twilioUser) => twilioUser.data)
