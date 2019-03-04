import { LOGIN, SIGNUP } from './types';
import axios from 'axios';

const cloudfunctions = 'https://us-central1-family-f54cc.cloudfunctions.net/';

export const signup = info => dispatch => {
  axios({
    method: 'post',
    url: cloudfunctions + 'signup',
    data: {
      firstName: info.firstName,
      lastName: info.lastName,
      dob: info.dob,
      city: info.city,
      country: info.country,
      preferred_language: info.preferred_language
    }
  })
    .then(res => {
    console.log(res);
  })
};