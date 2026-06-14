import ImagePopup from "../ImagePopup/ImagePopup";


export default function Card({card, handleOpenPopup}) {

    const { name, link } = card;
    console.log(`This is the card name:${link}`)

    const imagePopupConfig = {
      children: <ImagePopup link={link} name={name}/>
    };

    function handleLike(){
      console.log("like")
    }
    function handleDelete(){
      console.log("Delete")
    }

    return (
      <li className="card">
        <img onClick={() => handleOpenPopup(imagePopupConfig)} className="card__image" src={link} alt={name} />
        <button
        onClick={() => handleLike()}
          aria-label="Delete card"
          className="card__delete-button"
          type="button"
        />
        <div className="card__description">
          <h2 className="card__title">{name}</h2>
          <button
          onClick={()=>handleDelete()}
            aria-label="Like card"
            type="button"
            className="card__like-button"
          />
        </div>
      </li>
    );
  }