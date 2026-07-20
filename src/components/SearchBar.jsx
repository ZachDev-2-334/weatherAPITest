function SearchBar({ city, setCity, onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;