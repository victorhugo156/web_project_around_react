import { useState } from 'react';
import Popup from '../Popup/Popup';
import NewCard from '../NewCard/NewCard';
import Card from '../Card/Card';
import EditProfile from '../EditProfile/EditProfile';
import EditAvatar from '../EditAvatar/EditAvatar';


const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

const newCardPopup = { title: "New card", children: <NewCard /> };
const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };
const editAvatarPopup = { title: "Edit avatar", children: <EditAvatar /> };


export function Main() {

  const [popup, setPopup] = useState(null);

  function handleClosePopup() {
    setPopup(null);
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  return (
    <main className="content">
      <section className="profile page__section">
        <button onClick={() => handleOpenPopup(editAvatarPopup)} className="profile__avatar-button">
          <div className="profile__edit-icon-container">
            <img className="profile__edit-icon" src="./images/edit-icon.svg" alt="Avatar" />
          </div>
          <img className="profile__image" src="./images/avatar.jpg" alt="Avatar" />

        </button>

        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button onClick={() => handleOpenPopup(editProfilePopup)} aria-label="Editar perfil" className="profile__edit-button" type="button"></button>
          <p className="profile__description">Explorador</p>
        </div>
        <button onClick={() => handleOpenPopup(newCardPopup)} aria-label="Adicionar cartão" className="profile__add-button" type="button"></button>
      </section>


      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
          ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

    </main>
  );
}