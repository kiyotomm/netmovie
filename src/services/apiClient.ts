import axios from "axios";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3", // Replace with the actual base URL of the API
  params: {
    api_key: "d1ee23eca14e7dec355c6748058fb72f", // Add your client_id or access key
    include_video: true,
  },
});

// Export the Axios instance for reuse
export default apiClient;
