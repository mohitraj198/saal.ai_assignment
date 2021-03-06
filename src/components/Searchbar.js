import React from 'react'

/**
 * @componentName Searchbar
 * @description this component is use for searching
 */

const Searchbar = ({ onSearch, searchInput, ...restProps }) => {
    const handleSearchInput = (e) => {
        const searchText = e.target.value.replace(/[^A-Za-z\s.]/ig, '')
        onSearch(searchText)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch(searchInput)
    }

    return (
        <form className="search-form">
            <input onChange={handleSearchInput} type="text" placeholder="Search" value={searchInput} name="text" className="search-input" {...restProps} />
            <button onClick={handleSearch} className="search-button"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default Searchbar

