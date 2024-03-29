import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3d829ec902ce4e41bdf642f3d7b192e9",
  },
});
