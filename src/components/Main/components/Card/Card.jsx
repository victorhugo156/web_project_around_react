import ImageComponent from './Components/ImageComponent';

export default function Card(props) {
    const { card, handleOpenPopup } = props;
    const { name, link } = card;

    const imageComponent = {
      title: name,
      children: <ImageComponent name={name} link={link} />,
    };

    return (
      <li className="card">
        <img onClick={() => handleOpenPopup(imageComponent)} className="card__image" src={link} alt={name} />
        <button
          aria-label="Delete card"
          className="card__delete-button"
          type="button"
        />
        <div className="card__description">
          <h2 className="card__title">{name}</h2>
          <button
            aria-label="Like card"
            type="button"
            className="card__like-button"
          />
        </div>
      </li>
    );
  }