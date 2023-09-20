// no import React from "react" since v18
import data from "./data.json";
// returns full object
import { Album } from "./components/Album";
import { Header } from "./components/Header";

const albumData = data.albums.items;
// console.log(albumData);
// returns only albums
// console.log(albumData[0])

export const App = () => {

  // declare process to retrieve all albums, assign result to new array displayAlbums
  const displayAlbums = () => {
    return albumData.map((i) => (
      // return assigns to new array
      <Album key={i.uri} name={i.name} />
    ))
  }

  return (
    <div>
      {displayAlbums()}
    </div>
    //kombi of html + jsx
  )
}

// for every prop in object new component with map: Album + link, Artisname -> used in Album, 