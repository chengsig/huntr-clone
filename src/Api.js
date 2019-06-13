/** API calls for jobs. */

import axios from 'axios';

const BASE_API_URL = "http://localhost:3000";


/** Fetch list of jobs */

export async function fetchItems() {
  let res = await axios.get(`${BASE_API_URL}/jobs`);
  return res.data;
}
