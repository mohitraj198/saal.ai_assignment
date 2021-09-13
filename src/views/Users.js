import React, { useState, useEffect } from 'react'
import Pagination from '../components/Pagination'
import Searchbar from '../components/Searchbar'
import ListItem from '../components/ListItem'

const Users = (props) => {
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [searchUsers, setSearchUsers] = useState([])

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
        fetchUserData()
    }, [currentPage])

    return (
        <div className="users-container">
            <Searchbar
                users={users}
                setSearchUsers={setSearchUsers}
                setLoading={setLoading}
            />
            {loading
                ? <div className="loader"></div>
                : (
                    <div className="users-list">
                        {
                            searchUsers.map((user, index) => <ListItem key={index} user={user} loading={loading} />)
                        }
                    </div>
                )
            }
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
