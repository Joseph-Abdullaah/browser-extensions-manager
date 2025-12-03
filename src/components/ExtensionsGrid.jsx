import useExtensionsStore from '../store/useExtensionsStore';
import ExtensionCard from './ExtensionCard';

function ExtensionsGrid({ className = '' }) {
  const filter = useExtensionsStore((state) => state.filter);
  const extensions = useExtensionsStore((state) => state.extensions);

  const visibleExtensions = extensions
    .filter((ext) => !ext.isRemoved)
    .filter((ext) => {
      if (filter === 'active') return ext.isActive;
      if (filter === 'inactive') return !ext.isActive;
      return true;
    });

  return (
    <section className={`extensions-grid ${className}`} aria-label="Browser extensions list">
      {visibleExtensions.map((ext) => (
        <ExtensionCard key={ext.name} extension={ext} />
      ))}
    </section>
  );
}

export default ExtensionsGrid;


