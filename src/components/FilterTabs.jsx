import useExtensionsStore from '../store/useExtensionsStore';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'inactive', label: 'Inactive' },
];

function FilterTabs({ className = '' }) {
  const filter = useExtensionsStore((state) => state.filter);
  const setFilter = useExtensionsStore((state) => state.setFilter);

  return (
    <nav className={`filter-tabs ${className}`} aria-label="Filter extensions by status">
      {FILTERS.map((f) => {
        const isActive = filter === f.id;
        return (
          <button
            key={f.id}
            type="button"
            className={`filter-tabs__pill ${isActive ? 'filter-tabs__pill--active' : ''}`}
            onClick={() => setFilter(f.id)}
            aria-pressed={isActive}
          >
            {f.label}
          </button>
        );
      })}
    </nav>
  );
}

export default FilterTabs;


