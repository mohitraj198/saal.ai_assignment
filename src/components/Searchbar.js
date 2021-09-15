import React from 'react'

const Searchbar = ({ users, setSearchUsers, searchUser, setSearchUser }) => {
    // searching by username
    const search = (text) => {
        const filterResult = users.filter(user => {
            const { name: { title, first, last } } = user
            const name = `${title}. ${first} ${last}`.toLocaleLowerCase()
            return text === "" ? user : name.includes(text.toLocaleLowerCase())
        })
        setSearchUsers(filterResult)
    }

    const handleSearchInput = (e) => {
        const searchText = e.target.value.replace(/[^A-Za-z\s.]/ig, '')
        setSearchUser(searchText)
        search(searchText)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        search(searchUser)
    }

    return (
        <form className="search-form">
            <input onChange={handleSearchInput} type="text" placeholder="Search" value={searchUser} name="text" className="search-input" />
            <button onClick={handleSearch} className="search-button"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default Searchbar
