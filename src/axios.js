import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-chad--clone.cloudfunctions.net/api'
  // "http://localhost:5001/chad--clone/us-central1/api"
});

export default instance;
