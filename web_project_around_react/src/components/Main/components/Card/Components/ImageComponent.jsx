export default function ImageComponent(props) {
    const { name, link } = props;
    return (
        <img className="popup__image" src={link} alt={name} />
    );
}