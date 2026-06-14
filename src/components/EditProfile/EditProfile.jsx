import { useState } from 'react';

export default function EditProfile() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    return (
        <form
        onSubmit={(e) => e.preventDefault()}
        className="popup__form"
        name="profile-form"
        id="edit-profile-form"
        noValidate
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_name"
            id="name"
            maxLength="40"
            minLength="2"
            name="name"
            placeholder="Name"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="popup__input-error" id="name-error"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_description"
            id="description"
            maxLength="200"
            minLength="2"
            name="description"
            placeholder="About me"
            required
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <span className="popup__input-error" id="description-error"></span>
        </label>
        <button className="button popup__button" type="submit">Salvar</button>
      </form>
    );
}