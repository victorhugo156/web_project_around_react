import { useState, useEffect } from 'react';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { CurrentUserProvider } from "../contexts/CurrentUserContext";
import { api } from '../utils/api';

export function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);


  async function handleCardLike(card) {

    const isLiked = card.isLiked;
    console.log("card._id:", card._id, "isLiked:", isLiked);


    await api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((element) => element.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    }).catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api.deleteCard(card._id).then((newCard) => {
      console.log("Delete response:", newCard)
      setCards((element) => element.filter((element) => element._id !== card._id));
    }).catch((error) => console.error(error));
  }

  async function handleAddPlaceSubmit(data) {
    await api.addNewCard(data.name, data.link).then((newCard) => {
      setCards((element) => [newCard, ...element]);
      handleClosePopup();
    }).catch((error) => console.error(error));
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleUpdateAvatar(avatar) {
    (async () => {
      await api.updateUserAvatar(avatar).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  }

  function handleUpdateUser(data) {
    (async () => {
      await api.updateUserInfo(data.name, data.about).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  useEffect(() => {
    api.getInitialData()
    .then(([user]) => {
      setCurrentUser(user);
    })
    .catch(err => console.log(err));
  }, []);


  useEffect(() => {
    api.getInitialCards().then((cards) => {
      setCards(cards);
    }).catch((error) => console.error(error));
  }, []);

  return (
    <div className="page__content">
      <CurrentUserProvider value={{currentUser, setCurrentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit}}>
        <Header />
        <Main onOpenPopup={handleOpenPopup} onClosePopup={handleClosePopup} popup={popup} cards={cards} handleCardLike={handleCardLike} handleCardDelete={handleCardDelete} />
        <Footer />
      </CurrentUserProvider>
    </div>
  )
}
