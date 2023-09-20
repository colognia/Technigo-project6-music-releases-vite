// import { App } from "../App" . nicht nötig

export const Album = ({ name }) => {
    return (
        <p>Albumname: {name}</p>
    )
}

//
// needs subcomponents:
// AlbumName.jsx
// AristName.jsx -> all involved sep with ,
// coverImage.jsx
// Header.jsx -> for each card/album