import { useState } from 'react';

export default function EditAvatar() {
    const [avatar, setAvatar] = useState('');

    return (
        <form
        onSubmit={(e) => e.preventDefault()}
        className="popup__form"
        name="avatar-form"
        id="edit-avatar-form"
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_avatar"
            id="avatar"
            name="avatar"
            placeholder="Avatar link"
            required
            type="url"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
          <span className="popup__input-error" id="avatar-error"></span>
        </label>
        <button className="button popup__button" type="submit">Salvar</button>
      </form>
    );
}