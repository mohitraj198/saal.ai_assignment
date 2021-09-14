import React, { useState } from 'react'

const Searchbar = ({ users, setSearchUsers }) => {
    const [input, setInput] = useState('')

    // searching by username
    const search = (text) => {
        const filterResult = users.filter(user => {
            const { name: { title, first, last } } = user
            const name = `${title}. ${first} ${last}`.toLocaleLowerCase()
            return text === "" ? user : name.includes(text.toLocaleLowerCase())
        })
        setSearchUsers(filterResult)
    }

    // UserName Validation(allow only alpha, space and dot)
    const checkValidInput = (text) => {
        const regex = /^[a-zA-Z\s.]*$/;
        if (regex.test(text)) {
            search(text)
        }
    }

    const handleSearchInput = (e) => {
        setInput(e.target.value)
        checkValidInput(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        checkValidInput(input)
    }

    return (
        <form className="search-form">
            <input onChange={handleSearchInput} type="text" placeholder="Search" value={input} name="text" className="search-input" />
            <button onClick={handleSearch} className="search-button"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default Searchbar
