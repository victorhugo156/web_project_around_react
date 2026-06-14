export default function ImagePopup({ name, link }) {

    console.log(`This is the image name:${name}`)
    console.log(`This is the image link:${link}`)
    return (
        <>
            <img className="popup__image" src={link} alt={name} />
            <p className="popup__caption">{name}</p>
        </>

    );
}