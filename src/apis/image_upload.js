import axios from "axios";
import store from "./../store";

const ImageUploadAPI =  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  });

  ImageUploadAPI.interceptors.request.use(request => {
    const state = store.getState();
    const token = state.auth.token;
  
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
  
    return request;
  });

  export default ImageUploadAPI;