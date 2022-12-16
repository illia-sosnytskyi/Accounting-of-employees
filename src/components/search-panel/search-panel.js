import './search-panel.css';

const SearchPanel = ({
  onChangeSearch,
  query,
}) => {
  return (
    <input 
      type="text"
      className="form-control search-input"
      placeholder="Find an employee"
      value={query}
      onChange={onChangeSearch}
    />
  );
};

export default SearchPanel;
