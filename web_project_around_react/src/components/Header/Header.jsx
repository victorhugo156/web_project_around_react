import logo from '../../images/logo.svg';

export function Header() {
  return (
    
    <header class="header page__section">
      <img alt="Logotipo Around The U.S." class="logo header__logo" src={logo} />
    </header>
  );
}