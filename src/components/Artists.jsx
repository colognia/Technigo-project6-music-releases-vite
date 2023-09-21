export const Artists = ({ artists }) => {
    return (
        <div>
            <p>Artists: </p>
            {artists.map((i) => (
                <p key={i.id}>{i.name}</p>
            ))}
        </div>
    )
}




// AristName.jsx -> all involved sep with , -> nested in arists array "artists", sometimes >1 object, subkey: "name"