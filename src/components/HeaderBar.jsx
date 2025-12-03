import useExtensionsStore from '../store/useExtensionsStore';
import '../App.css';

function HeaderBar() {
  const theme = useExtensionsStore((state) => state.theme);
  const toggleTheme = useExtensionsStore((state) => state.toggleTheme);

  const isDark = theme === 'dark';
  const iconSrc = isDark ? '/images/icon-sun.svg' : '/images/icon-moon.svg';
  const iconAlt = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <header className="header-bar">
      <div className="header-bar__inner">
        <div className="header-bar__logo">
          <img src="/images/logo.svg" alt="Extensions" className="header-bar__logo-image" />
          <span className="header-bar__logo-text">Extensions</span>
        </div>
        <button
          type="button"
          className="header-bar__theme-toggle"
          onClick={toggleTheme}
          aria-label={iconAlt}
        >
          <img src={iconSrc} alt="" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export default HeaderBar;


