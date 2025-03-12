export default function SearchBox({ filter, onFilterChange }) {
    return (
      <div>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={filter}
          onChange={onFilterChange}
        />
      </div>
    );
  }
  