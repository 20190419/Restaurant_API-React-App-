// Import the Axios library
import axios from "axios";

// Create an Axios instance with a specific base URL
const instance = axios.create({
  baseURL: "https://swensonhe-dev-challenge.s3.us-west-2.amazonaws.com/",
});

// Export the configured Axios instance as the default export of this module
export default instance;
