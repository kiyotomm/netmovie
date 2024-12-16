import axios from "axios";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3", // Replace with the actual base URL of the API
  params: {
    api_key: "f3f01bbb7ea2ac753c31dcf33eee6e0b", // Add your client_id or access key
    include_video: true,
  },
});

// Export the Axios instance for reuse
export default apiClient;
