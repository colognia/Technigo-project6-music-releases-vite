export const Header = () => {
    const imageObject = {
        imageURL: "https://",
        imageAlt: "Alt text"
    }
    const headerText = ""
    //simple string

    return <header>(
        < img src={imageObject.imageURL} alt={imageObject.imageAlt} />
        <p>{headerText}</p>
        )
    </header>
    //could have been defined directly here without imageObject
}
