import React from "react";
import axios from 'axios';

const URL = process.env.STRAPIBASEURL


export default function Login(){
// Request API.
axios
  .post('http://localhost:1337/api/auth/local', {
    identifier: 'test',
    password: 'Test123!',
  })
  .then((response) => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch((error) => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });

  return(
      <>
      <p>lol</p>
      </>
  )


}