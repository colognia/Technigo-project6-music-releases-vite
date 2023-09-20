import albumdata from "./data.json";
import { Album } from "./components/Album";

console.log(albumdata);
// returns albums, which is first and only key in objec

export const App = () => {
  // albums.items.artists.name
  return <Album name="Otto" />
};


