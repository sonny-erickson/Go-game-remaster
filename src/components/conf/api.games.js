import * as axios from "axios";

const apiGames = axios.create({
  baseURL: "https://api.rawg.io/api/games?" // attention URL an maj !!
});

export default apiGames;