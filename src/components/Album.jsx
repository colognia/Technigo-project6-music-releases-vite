// import { App } from "../App" . nicht nötig
import { Artists } from "./Artists"

export const Album = ({ name, artists }) => {
    return (
        <div>
            <p>
                <span>Albumname: {name}</span>
            </p>
            {/* now child components */}
            <div>
                <Artists artists={artists} />
            </div>
        </div>
        // several elements in return need a parent container!
    )
    // imports 2 varaibles -> name+ artists to display content
}




//
// needs subcomponents:
// AlbumName.jsx -> top level unique

// AristName.jsx -> all involved sep with , -> nested in arists array "artists", sometimes >1 object, subkey: "name"
// coverImage.jsx -> 3 size objects in array "images", key "url" for pic

// Header.jsx -> for each card/album