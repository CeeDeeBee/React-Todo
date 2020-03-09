import React from "react";

const Search = ({ query, updateQuery }) => {
    const handleChange = e => {
        updateQuery(e.target.value.toLowerCase());
    }

    return (
        <div className="search-wrapper">
            <input
                type="text"
                placeholder="Search Todos"
                value={query}
                onChange={handleChange}
            />
        </div>
    )
}

export default Search;