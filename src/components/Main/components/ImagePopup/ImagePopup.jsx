export default function ImagePopup(props) {
    const { onClose, name, link } = props;
    return (
        <div className="popup">
            <div className="popup__content">
                <button onClick={onClose} className="popup__close" type="button" />
                <img  className="popup__image" src={link} alt="" />
                <h2 className="popup__title">{name}</h2>
            </div>
        </div>
    );
}