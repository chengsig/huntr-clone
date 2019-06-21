/** API calls for jobs. */

import axios from 'axios';

const BASE_API_URL = "https://json-server-heroku-cg.herokuapp.com/";


/** Fetch list of jobs */

export async function fetchItems(type) {
  let res = await axios.get(`${BASE_API_URL}/${type}`);
  return res.data;
}

/** Add a new job */

export async function addJob(type, data) {
  await axios.post(`${BASE_API_URL}/${type}`, data);
}

/** Delete a job */

export async function deleteJob(type, id) {
  await axios.delete(`${BASE_API_URL}/${type}/${id}`);
}
