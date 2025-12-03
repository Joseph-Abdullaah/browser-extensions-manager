import { useEffect } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';
import FilterTabs from './components/FilterTabs';
import ExtensionsGrid from './components/ExtensionsGrid';
import useExtensionsStore from './store/useExtensionsStore';

function App() {
  const theme = useExtensionsStore((state) => state.theme);

  useEffect(() => {
    document.body.style.background =
      theme === 'dark' ? 'var(--image-gradient-dark)' : 'var(--image-gradient-light)';
    document.body.style.color =
      theme === 'dark' ? 'var(--color-neutral-200)' : 'var(--color-neutral-600)';
  }, [theme]);

  const themeClass = theme === 'dark' ? 'theme-dark' : 'theme-light';

  return (
    <div className={`app-root ${themeClass}`}>
      <div className="app-shell">
        <HeaderBar />
        <main className="app-main">
          <div className="app-main__header">
            <h1 className="app-main__title">Extensions List</h1>
            <FilterTabs />
          </div>
          <ExtensionsGrid />
        </main>
      </div>
    </div>
  );
}

export default App;
