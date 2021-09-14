import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import queryString from 'query-string';
import Pagination from '../components/Pagination'
import Searchbar from '../components/Searchbar'
import ListItem from '../components/ListItem'

const Users = () => {
    const history = useHistory()
    const location = history.location
    const query = queryString.parse(location.search);
    const page = Number(query.page)

    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(page ? page : 1)
    const [loading, setLoading] = useState(true)
    const [searchUsers, setSearchUsers] = useState([])

    // Fetching User's Data
    const fetchUserData = async () => {
        try {
            const url = `https://randomuser.me/api/?page=${currentPage}&results=10`
            setLoading(true)
            const response = await fetch(url)
            const users = await response.json()

            setUsers(users.results)
            setSearchUsers(users.results)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        history.push(`?page=${currentPage}`);
        fetchUserData()
    }, [currentPage])

    return (
        <div className="users-container">

            <Searchbar
                users={users}
                setSearchUsers={setSearchUsers}
            />

            <div className="users-list">
                {loading
                    ? <div className="loader"></div>
                    : searchUsers.map((user, index) => (
                        <ListItem key={index} user={user} loading={loading} />
                    ))
                }
            </div>

            <div className="pagination">
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default Users
