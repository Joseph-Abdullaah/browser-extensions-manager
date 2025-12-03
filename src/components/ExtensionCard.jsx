import useExtensionsStore from '../store/useExtensionsStore';

function ExtensionCard({ extension }) {
  const toggleExtensionActive = useExtensionsStore((state) => state.toggleExtensionActive);
  const removeExtension = useExtensionsStore((state) => state.removeExtension);

  const handleToggle = () => toggleExtensionActive(extension.name);
  const handleRemove = () => removeExtension(extension.name);

  return (
    <article
      className={`extension-card ${extension.isActive ? '' : 'extension-card--inactive'}`}
    >
      <div className="extension-card__header">
        <div className="extension-card__icon-wrapper">
          <img src={extension.logo} alt={extension.name} className="extension-card__icon" />
        </div>
        <div className="extension-card__title-block">
          <h2 className="extension-card__name">{extension.name}</h2>
          <p className="extension-card__description">{extension.description}</p>
        </div>
      </div>

      <div className="extension-card__footer">
        <button
          type="button"
          className="extension-card__remove-button"
          onClick={handleRemove}
        >
          Remove
        </button>
        <button
          type="button"
          className={`extension-card__toggle ${extension.isActive ? 'is-on' : 'is-off'}`}
          role="switch"
          aria-checked={extension.isActive}
          onClick={handleToggle}
        >
          <span className="extension-card__toggle-thumb" />
        </button>
      </div>
    </article>
  );
}

export default ExtensionCard;


