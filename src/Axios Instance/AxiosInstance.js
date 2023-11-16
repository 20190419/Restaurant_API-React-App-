import axios from "axios";
const instance = axios.create({
  baseURL: "https://swensonhe-dev-challenge.s3.us-west-2.amazonaws.com/",
});
export default instance;
