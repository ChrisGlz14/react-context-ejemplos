import React from "react";

const Header = ({
  theme,
  handleTheme,
  texts,
  handleLanguage,
  auth,
  handleAuth,
}) => {
  return (
    <header className={theme} value={auth}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ESPAÑOL</option>
        <option value="en">ENGLISH</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light">{texts.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark">{texts.headerDark}</label>
      <button onClick={handleAuth}>
        {auth ? texts.buttonLogout: texts.buttonLogin}
      </button>
    </header>
  );
};

export default Header;
